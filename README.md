# mhwilds-metadata

A TypeScript/JSON package containing Monster Hunter Wilds game data.

## Installation

```bash
npm install mhwilds-metadata
# or
yarn add mhwilds-metadata
# or
pnpm add mhwilds-metadata
```

## Usage

### Importing Data

```typescript
import { skills, monsters, decorations, charms, armor } from "mhwilds-metadata";

// Using the data
console.log(skills);
console.log(monsters);
console.log(decorations);
console.log(charms);
console.log(armor);
```

### Using Types

```typescript
import { Skill, Monster, Decoration, Charm, Armor } from "mhwilds-metadata";

// Using types
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

## Data Types

- `skills`: Skill data
- `monsters`: Monster data
- `decorations`: Decoration data
- `charms`: Charm data
- `armor`: Armor data

## Development

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the project: `pnpm run build`

## License

MIT

[中文文档](README.zh-CN.md)
