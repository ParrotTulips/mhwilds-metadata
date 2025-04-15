const fs = require("fs");
const path = require("path");
const { build } = require("esbuild");

const dataDir = path.join(__dirname, "../data");
const distDir = path.join(__dirname, "../dist/data");
const tempDir = path.join(__dirname, "../temp");

// 确保目录存在
[distDir, tempDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 创建临时转换脚本
const createTempScript = (file, exportName) => `
import { ${exportName} } from '../data/${file}';
const data = ${exportName};
console.log(JSON.stringify(data));
`;

// 处理每个文件
async function processFiles() {
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith(".ts") && file !== "index.ts");

  for (const file of files) {
    const content = fs.readFileSync(path.join(dataDir, file), "utf8");
    const exports =
      content
        .match(/export\s+const\s+(\w+)/g)
        ?.map((match) => match.replace(/export\s+const\s+/, "")) || [];

    for (const exportName of exports) {
      const tempFile = path.join(tempDir, `${exportName}.ts`);
      fs.writeFileSync(tempFile, createTempScript(file, exportName));

      try {
        const result = await build({
          entryPoints: [tempFile],
          bundle: true,
          write: false,
          format: "cjs",
          target: "node14",
        });

        const { outputFiles } = result;
        const bundledCode = outputFiles[0].text;

        // 执行打包后的代码
        const output = await new Promise((resolve, reject) => {
          const process = require("child_process").spawn("node", [
            "-e",
            bundledCode,
          ]);
          let stdout = "";
          let stderr = "";

          process.stdout.on("data", (data) => (stdout += data));
          process.stderr.on("data", (data) => (stderr += data));
          process.on("close", (code) => {
            if (code === 0) {
              resolve(stdout);
            } else {
              reject(new Error(`Process exited with code ${code}\n${stderr}`));
            }
          });
        });

        // 写入 JSON 文件
        const jsonPath = path.join(distDir, `${exportName}.json`);
        fs.writeFileSync(jsonPath, output);
      } catch (error) {
        console.error(
          `Error processing export ${exportName} from ${file}:`,
          error
        );
      }
    }
  }

  // 清理临时目录
  fs.rmSync(tempDir, { recursive: true, force: true });
}

processFiles().catch(console.error);
