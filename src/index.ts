import * as types from "../types";
import * as fs from "fs";
import * as path from "path";

// 导出所有类型
export * from "../types";

// 读取 JSON 数据
const dataDir = path.join(__dirname, "../dist/data");

const readJson = (filename: string) => {
  const filePath = path.join(dataDir, `${filename}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

// 导出 JSON 数据
export const skills = readJson("skills");
export const monsters = readJson("monsters");
export const decorations = readJson("decorations");
export const charms = readJson("charms");
export const armor = readJson("armor");

// 导出类型
export type Skill = types.Skill;
export type Monster = types.IAttack;
export type Decoration = types.Decoration;
export type Charm = types.Charm;
export type Armor = types.Armor;
