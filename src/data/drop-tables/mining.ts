import { getItemByName, getItemsByName } from "@/items/items";

export const common = getItemsByName([
    "copperOre",
    "goldOre",
    "silverOre",
    "coal",
    "ironOre"
])

export const uncommon = getItemsByName([
    "fossil",
    "onyx",
    "amethyst",
    "topaz",
])

export const rare = getItemsByName([
    "diamond",
    "ruby",
    "emerald",
    "sapphire",
    "platinum",
    "aquamarine",
    "garnet",
    "morganite",
    "geode",
    "artifact",
])

export const legendary = [
    getItemByName("treasureChest")
]
