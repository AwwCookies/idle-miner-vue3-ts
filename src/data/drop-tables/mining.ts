import { getItemByName, getItemsByName } from "@/items/items";

export const common = getItemsByName([
    "Copper Ore",
    "Gold Ore",
    "Silver Ore",
    "Coal",
    "Iron Ore"
])

export const uncommon = getItemsByName([
    "Fossil",
    "Onyx",
    "Amethyst",
    "Topaz"
])

export const rare = getItemsByName([
    "Diamond",
    "Ruby",
    "Emerald",
    "Sapphire",
    "Platinum",
    "Aquamarine",
    "Garnet",
    "Morganite",
    "Geode",
    "Artifact"
])

export const legendary = [
    getItemByName("Treasure Chest")
]
