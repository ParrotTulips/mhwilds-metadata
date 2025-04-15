# mhwilds-metadata

Monster Hunter Wilds 游戏数据的 TypeScript/JSON 包。

## 安装

```bash
npm install mhwilds-metadata
# 或
yarn add mhwilds-metadata
# 或
pnpm add mhwilds-metadata
```

## 使用方法

### 导入数据

```typescript
import { skills, monsters, decorations, charms, armor } from "mhwilds-metadata";

// 使用数据
console.log(skills);
console.log(monsters);
console.log(decorations);
console.log(charms);
console.log(armor);
```

### 使用类型

```typescript
import { Skill, Monster, Decoration, Charm, Armor } from "mhwilds-metadata";

// 使用类型
const skill: Skill = {
  // ...
};

const monster: Monster = {
  // ...
};

const decoration: Decoration = {
  // ...
};

const charm: Charm = {
  // ...
};

const armor: Armor = {
  // ...
};
```

## 数据类型

- `skills`: 技能数据
- `monsters`: 怪物数据
- `decorations`: 装饰品数据
- `charms`: 护石数据
- `armor`: 防具数据

## 开发

1. 克隆仓库
2. 安装依赖：`pnpm install`
3. 构建项目：`pnpm run build`

## 许可证

ISC
