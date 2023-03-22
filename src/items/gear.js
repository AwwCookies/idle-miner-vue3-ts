/**
 * Represents an item object.
 * @typedef {object} ItemObject
 * @property {number} chance - The chance of finding the item, as a percentage.
 * @property {number} value - The value of the item, in units of currency.
 * @property {string} icon - The URL of the item's icon image.
 * @property {string} description - A description of the item.
 * @property {string} name - The name of the item.
 * @property {string} type - The type of the item.
 * @property {number} stats - The stats value of the item.
 * @property {number} durability - The durability of the item.
 */
export const gear = {
    "Copper Helmet": {
      "name": "Copper Helmet",
      "chance": 10,
      "value": 10,
      "icon": "gear:copper_helmet",
      "description": "A simple copper helmet. It's not very protective, but it'll keep your head warm.",
      "type": "helmet",
      "stats": {},
      "durability": 10
    },
    "Copper Chestplate": {
      "name": "Copper Chestplate",
      "chance": 10,
      "value": 10,
      "icon": "gear:copper_chestplate",
      "description": "A simple copper chestplate. It's not very protective, but it'll keep your chest warm.",
      "type": "chestplate",
      "stats": {},
      "durability": 10
    },
    "Copper Leggings": {
      "name": "Copper Leggings",
      "chance": 10,
      "value": 10,
      "icon": "gear:copper_leggings",
      "description": "A simple pair of copper leggings. They're not very protective, but they'll keep your legs warm.",
      "type": "leggings",
      "stats": {},
      "durability": 10
    },
    "Copper Boots": {
      "name": "Copper Boots",
      "chance": 10,
      "value": 10,
      "icon": "gear:copper_boots",
      "description": "A simple pair of copper boots. They're not very protective, but they'll keep your feet warm.",
      "type": "boots",
      "stats": {},
      "durability": 10
    },
    "Copper Sword": {
      "name": "Copper Sword",
      "chance": 10,
      "value": 10,
      "icon": "gear:copper_sword",
      "description": "A simple copper sword. It's not very sharp, but it'll do the job.",
      "type": "sword",
      "stats": {},
      "durability": 10
    },
    "Copper Pickaxe": {
      "name": "Copper Pickaxe",
      "chance": 10,
      "value": 10,
      "icon": "gear:copper_pickaxe",
      "description": "A simple copper pickaxe. It's not very sharp, but it'll do the job.",
      "type": "pickaxe",
      "stats": {},
      "durability": 10
    },
    "Copper Axe": {
      "name": "Copper Axe",
      "chance": 10,
      "value": 10,
      "icon": "gear:copper_axe",
      "description": "A simple copper axe. It's not very sharp, but it'll do the job.",
      "type": "axe",
      "stats": {},
      "durability": 10
    }
  }

/**
 * Returns the gear object that matches the specified name, regardless of case.
 * @param {string} name - The name of the gear to look up.
 * @returns {GearObject} - The gear object that matches the specified name.
 * @throws {Error} - If no gear with the specified name is found.
 */
export function getGearByName(name) {
    const key = Object.keys(items).find(
        k => k.toLowerCase() === name.toLowerCase()
    );
    if (!key) {
        throw new Error(`Gear '${name}' not found.`);
    }
    return items[key];
}