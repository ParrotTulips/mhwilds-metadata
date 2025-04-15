import type { Attack } from "../../types";

export const ChargeBladeAttacks: Attack[] = [
  {
    name: "Sword: Forward Slash",
    mv: 18,
  },
  {
    name: "Sword: Weak Slash",
    mv: 12,
  },
  {
    name: "Sword: Return Stroke",
    mv: 15,
  },
  {
    name: "Sword: Roundslash",
    mv: 30,
  },
  {
    name: "Sword: Fade Slash",
    mv: 24,
  },
  {
    name: "Sword: Charged Rising Slash",
    mv: 13,
  },
  {
    name: "Sword: Charged Double Slash 1",
    mv: 25,
    charge: true,
  },
  {
    name: "Sword: Charged Double Slash 2",
    mv: 16,
    charge: true,
  },
  {
    name: "Sword: Shield Thrust 1",
    mv: 12,
  },
  {
    name: "Sword: Shield Thrust 2",
    mv: 6,
  },
  {
    name: "Sword: Condensed Elemental Slash",
    mv: 48,
  },
  {
    name: "Sword: Condensed Elemental Slash Impact Phial",
    mv: 23,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Sword: Condensed Elemental Slash Element Phial",
    mv: 0,
    eleMul: 4,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Sword: Morph Slash",
    mv: 54,
    cbAxe: true,
    morph: true,
  },
  {
    name: "Axe: Rising Slash",
    mv: 38,
    cbAxe: true,
  },
  {
    name: "Axe: Overhead Slash",
    mv: 54,
    cbAxe: true,
  },
  {
    name: "Axe: Dash Slam",
    mv: 48,
    cbAxe: true,
  },
  {
    name: "Axe: Lateral Fade Slash / Backstep Slash",
    mv: 42,
    cbAxe: true,
  },
  {
    name: "Axe: Morph Slash / Elemental Roundslash",
    mv: 30,
    morph: true,
  },
  {
    name: "Axe: Elemental Discharge I",
    mv: 53,
    cbAxe: true,
  },
  {
    name: "Axe: Elemental Discharge II 1",
    mv: 35,
    cbAxe: true,
  },
  {
    name: "Axe: Elemental Discharge II 2",
    mv: 58,
    cbAxe: true,
  },
  {
    name: "Axe: Amped Elemental Discharge",
    mv: 65,
    cbAxe: true,
  },
  {
    name: "Axe: Amped Elemental Discharge Follow-up",
    mv: 72,
    cbAxe: true,
  },
  {
    name: "Axe: Super Amped Elemental Discharge 1",
    mv: 12,
    cbAxe: true,
  },
  {
    name: "Axe: Super Amped Elemental Discharge 2",
    mv: 77,
    cbAxe: true,
  },
  {
    name: "Axe: Super Amped Elemental Discharge 3",
    mv: 36,
    cbAxe: true,
  },
  {
    name: "Savage Axe Slash",
    mv: 48,
    cbAxe: true,
  },
  {
    name: "Power Axe Tick",
    mv: 14,
    eleMul: 0.2,
    cbAxe: true,
  },
  {
    name: "Impact Phial (Sword)",
    mv: 5,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Impact Phial (ED)",
    mv: 10,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Overcharged Impact Phial (ED)",
    mv: 14,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Impact Phial (AED)",
    mv: 12,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Overcharged Impact Phial (AED)",
    mv: 16,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Impact Phial (SAED)",
    mv: 23,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Overcharged Impact Phial (SAED)",
    mv: 28,
    eleMul: 0,
    cantCrit: true,
    ignoreSharpness: true,
    ignoreHzv: true,
    cbPhial: true,
    artilleryAmmo: true,
  },
  {
    name: "Element Phial (Sword)",
    mv: 0,
    eleMul: 1.5,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Element Phial (ED)",
    mv: 0,
    eleMul: 2,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Overcharged Element Phial (ED)",
    mv: 0,
    eleMul: 2.2,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Element Phial (AED)",
    mv: 0,
    eleMul: 4,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Overcharged Element Phial (AED)",
    mv: 0,
    eleMul: 5,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Element Phial (SAED)",
    mv: 0,
    eleMul: 8,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Overcharged Element Phial (SAED)",
    mv: 0,
    eleMul: 10,
    cantCrit: true,
    ignoreSharpness: true,
    cbPhial: true,
  },
  {
    name: "Focus Slash: Double Rend",
    mv: 15,
  },
  {
    name: "Focus Strike Savage Axe",
    mv: 50,
    cbAxe: true,
  },
  {
    name: "Focus Strike Savage Axe Ticks",
    mv: 6,
    eleMul: 0.3,
    cbAxe: true,
  },
  {
    name: "Sword Jumping Slash / Axe Jumping Morph Slash",
    mv: 22,
  },
  {
    name: "Axe Jumping Slash / Sword Jumping Morph Slash",
    mv: 46,
    cbAxe: true,
  },
];
