export enum ItemType {
  Ore = 'ore',
  Gem = 'gem',
  TreasureChest = 'treasureChest',
  Weapon = 'weapon',
  Armor = 'armor',
  Tool = 'tool',
  Consumable = 'consumable',
  Misc = 'misc',
  Artifact = 'artifact'
}

export interface Item {
  name: string;
  type: ItemType;
  chance: number;
  value: number;
  icon: string;
  description: string;
}

export interface Items {
  [key: string]: Item;
}

interface modifiers {
  [key: string]: number;
}

type ItemName = keyof typeof items;

/**
 * Represents an item object.
 * @typedef {object} ItemObject
 * @property {number} chance - The chance of finding the item, as a percentage.
 * @property {number} value - The value of the item, in units of currency.
 * @property {string} icon - The URL of the item's icon image.
 * @property {string} description - A description of the item.
 * @property {ItemName} name - The name of the item.
 * @property {ItemType} type - The type of the item.
 */
export const items = {
  copperOre: {
    name: 'Copper Ore',
    type: ItemType.Ore,
    chance: 15,
    value: 8,
    icon: 'ore:copper',
    description: "A rusty old piece of copper ore. Not worth much, but it'll do."
  },
  goldOre: {
    name: 'Gold Ore',
    type: ItemType.Ore,
    chance: 10,
    value: 20,
    icon: 'ore:gold',
    description: "A chunk of shiny gold ore. This one's worth a pretty penny."
  },
  silverOre: {
    name: 'Silver Ore',
    type: ItemType.Ore,
    chance: 10,
    value: 15,
    icon: 'ore:silver',
    description: "A gleaming chunk of silver ore. It's not worth as much as gold, but it'll still fetch a good price."
  },
  coal: {
    name: 'Coal',
    type: ItemType.Ore,
    chance: 20,
    value: 2,
    icon: 'ore:steel',
    description: "A lump of black coal. It's not worth much, but it'll keep you warm on a cold night."
  },
  ironOre: {
    name: 'Iron Ore',
    type: ItemType.Ore,
    chance: 20,
    value: 5,
    icon: 'ore:iron',
    description: "A heavy piece of iron ore. It's not worth a lot, but it's good for making sturdy tools."
  },
  fossil: {
    name: 'Fossil',
    type: ItemType.Misc,
    chance: 10,
    value: 10,
    icon: 'misc:feather_red',
    description: 'A mysterious fossil. Who knows what kind of creature this belonged to?'
  },
  onyx: {
    name: 'Onyx',
    type: ItemType.Gem,
    chance: 10,
    value: 5,
    icon: 'gem:onyx',
    description: "A small, black gemstone. It's not very valuable, but it looks nice."
  },
  amethyst: {
    name: 'Amethyst',
    type: ItemType.Gem,
    chance: 5,
    value: 15,
    icon: 'gem:amethyst',
    description: "A beautiful purple gemstone. This one's worth a decent amount."
  },
  topaz: {
    name: 'Topaz',
    type: ItemType.Gem,
    chance: 5,
    value: 15,
    icon: 'gem:topaz',
    description: 'A bright yellow gemstone. It might not be as valuable as some of the others, but it sure is pretty.'
  },
  diamond: {
    name: 'Diamond',
    type: ItemType.Gem,
    chance: 5,
    value: 100,
    icon: 'gem:diamond',
    description: "A sparkling diamond. This is the real deal, and it's worth a small fortune."
  },
  ruby: {
    name: 'Ruby',
    type: ItemType.Gem,
    chance: 3,
    value: 150,
    icon: 'gem:ruby',
    description: "A deep red gemstone. This one's worth a lot, and it's sure to catch someone's eye."
  },
  emerald: {
    name: 'Emerald',
    type: ItemType.Gem,
    chance: 3,
    value: 150,
    icon: 'gem:emerald',
    description: "A bright green gemstone. This one's worth a pretty penny."
  },
  sapphire: {
    name: 'Sapphire',
    type: ItemType.Gem,
    chance: 3,
    value: 150,
    icon: 'gem:sapphire',
    description: "A bright blue gemstone. This one's worth a decent amount."
  },
  platinum: {
    name: 'Platinum',
    type: ItemType.Ore,
    chance: 5,
    value: 50,
    icon: 'ore:platinum',
    description: "A chunk of platinum. It's not worth as much as gold, but it's still pretty valuable."
  },
  aquamarine: {
    name: 'Aquamarine',
    type: ItemType.Gem,
    chance: 5,
    value: 50,
    icon: 'gem:aquamarine',
    description: "A pale blue gemstone. This one's worth a fair amount."
  },
  garnet: {
    name: 'Garnet',
    type: ItemType.Gem,
    chance: 3,
    value: 100,
    icon: 'gem:garnet',
    description: "A deep red gemstone. This one's worth a good amount."
  },
  morganite: {
    name: 'Morganite',
    type: ItemType.Gem,
    chance: 3,
    value: 100,
    icon: 'gem:morganite',
    description: "A pinkish gemstone. This one's worth a good amount."
  },
  geode: {
    name: 'Geode',
    type: ItemType.Ore,
    chance: 5,
    value: 25,
    icon: 'misc:geode',
    description: "A round rock that's full of crystals. It's not worth much, but it looks cool."
  },
  artifact: {
    name: 'Artifact',
    type: ItemType.Artifact,
    chance: 3,
    value: 75,
    icon: 'misc:dragon_eye',
    description: "An ancient artifact that's covered in strange markings. It's worth a decent amount, and it might be of historical significance."
  },
  treasureChest: {
    name: 'Treasure Chest',
    type: ItemType.TreasureChest,
    chance: 1,
    value: 1000,
    icon: 'misc:treasure_chest',
    description: "A large wooden chest that's filled with gold, gems, and other valuable treasures. This is the jackpot!"
  }
};

// used for type checking

/**
 * Returns the item object that matches the specified name, regardless of case.
 * @param {ItemName} name - The name of the item to look up.
 * @returns {Item} - The item object that matches the specified name.
 * @throws {Error} - If no item with the specified name is found.
 */
export function getItemByName(name: ItemName): Item {
  if (!items[name]) {
    throw new Error(`Item '${name}' not found.`);
  }
  return items[name];
}

/**
 * Returns an array of item objects that match the specified names, regardless of case.
 * @param {string[]} names - An array of names of the items to look up.
 * @returns {ItemObject[]} - An array of item objects that match the specified names.
 * @throws {Error} - If no items with the specified names are found.
 */

export function getItemsByName(names: Array<ItemName>): Array<Item> {
  const items: Item[] = []
  names.forEach((name) => {
    const item: Item = getItemByName(name);
    if (!item) {
      throw new Error(`Item '${name}' not found.`);
    }
    items.push(item);
  });
  return items;
}
/**
 * Returns an array of item objects that match the specified type, regardless of case.
 * @param {string} type - The type of the items to look up.
 * @returns {ItemObject[]} - An array of item objects that match the specified type, or an empty array if no matches are found.
 */
export function getItemsByType(type: ItemType): Array<Item> {
  const matchingItems = Object.values(items).filter(
    item => item.type.toLowerCase().replace(/ |-/g, '_') === type.toLowerCase().replace(/ |-/g, '_')
  );
  return matchingItems;
}


/**
 * Applies the specified modifiers to the item object and returns a new item object with the modifiers applied.
 * @param {ItemObject} item - The item object to apply the modifiers to.
 * @param {object} modifiers - An object containing the modifiers to apply to the item.
 * @returns {ItemObject} - The modified item object.
 */
function applyModifiers(item: Item, modifiers: modifiers): Item {
  const modifiedItem = { ...item };
  if (modifiers.value) {
    modifiedItem.value += modifiers.value;
  }
  // Add more modifier logic here for other properties as needed.
  return modifiedItem;
}

/**
 * Removes the specified modifiers from the item object and returns a new item object with the modifiers removed.
 * @param {ItemObject} item - The item object to remove the modifiers from.
 * @param {object} modifiers - An object containing the modifiers to remove from the item.
 * @returns {ItemObject} - The modified item object.
 */
function removeModifiers(item: Item, modifiers: modifiers): Item {
  const modifiedItem = { ...item };
  if (modifiers.value) {
    modifiedItem.value -= modifiers.value;
  }
  // Add more modifier logic here for other properties as needed.
  return modifiedItem;
}

// function replaceIconData(items) {
//     const newItems = {};
//     for (const key in items) {
//       if (Object.hasOwnProperty.call(items, key)) {
//         const item = items[key];
//         const newIcon = item.icon.replace(/\/imgs\/(.*)\/(.*).png/g, '$1:$2');
//         newItems[key] = { ...item, icon: newIcon };
//       }
//     }
//     console.log(newItems);
//   }

// replaceIconData(items);