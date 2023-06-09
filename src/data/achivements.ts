// achivements.ts
export interface Achievement {
    name: string;
    description: string;
    check: () => boolean;
    progress: () => string;
}
// Description: This file contains the list of all achivements in the game.
//TODO: replace any with the correct type
export function getAchivements({ inventory, stats, talents, gold }: any) {
    const achivements: Array<Achievement> = [
        {
            name: "Example Achievement",
            description: "Example description",
            check: () => gold.get() >= 10,
            progress: function () {
                return `${this.check() ? "Completed" : `Not Completed: ${gold.get()}/10`}`;
            },
        },
        {
            name: "Miner's Delight",
            description: "Collect 1000 pieces of ore.",
            check: () => inventory.getTotalOfType("Ore") >= 1000,
            progress: function () { 
                return `${this.check() ? "Completed" : `Not Completed: ${inventory.getTotalOfType("Ore")}/1000`}"}`;
            },
        },
        {
            name: "Gem Hunter",
            description: "Collect 500 gems.",
            check: () => inventory.getTotalOfType("Gem") >= 500,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Precious Metals",
            description: "Collect 100 pieces of precious metals.",
            check: () => inventory.getItemCount("Precious Metal") >= 100,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Coal Collector",
            description: "Collect 1000 pieces of coal.",
            check: () => inventory.getItemCount("Coal") >= 1000,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Fossil Finder",
            description: "Collect 50 fossils.",
            check: () => inventory.getItemCount("Fossil") >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Mineral Maven",
            description: "Collect 100 minerals.",
            check: () => inventory.getItemCount("Mineral") >= 100,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Rare Earths",
            description: "Collect 50 rare earth metals.",
            check: () => inventory.getItemCount("Rare Earth Metal") >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Geode Gatherer",
            description: "Collect 25 geodes.",
            check: () => inventory.getItemCount("Geode") >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Artifacts Galore",
            description: "Collect 10 artifacts.",
            check: () => inventory.getTotalOfType("Artifact") >= 10,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Treasure Trove",
            description: "Find 5 hidden treasure chests.",
            check: () => stats.treasureChestsFound >= 5,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Mining Novice",
            description: "Reach level 10 in mining efficiency talent.",
            check: () => talents.getMiningEfficiencyLevel() >= 10,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Mining Apprentice",
            description: "Reach level 25 in mining efficiency talent.",
            check: () => talents.getMiningEfficiencyLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Mining Master",
            description: "Reach level 50 in mining efficiency talent.",
            check: () => talents.getMiningEfficiencyLevel() >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Fast Miner",
            description: "Reach level 25 in speed mining talent.",
            check: () => talents.getSpeedMiningLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Pickaxe Pro",
            description: "Reach level 25 in pickaxe durability talent.",
            check: () => talents.getPickaxeDurabilityLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Geode Genius",
            description: "Reach level 25 in geode mastery talent.",
            check: () => talents.getGeodeMasteryLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Treasure Hunter Extraordinaire",
            description: "Reach level 25 in treasure hunter talent.",
            check: () => talents.getTreasureHunterLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Fossil Fanatic",
            description: "Reach level 25 in fossil expertise talent.",
            check: () => talents.getFossilExpertiseLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Gem Guru",
            description: "Reach level 25 in gemology talent.",
            check: () => talents.getGemologyLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Archaeology Ace",
            description: "Reach level 25 in archaeology talent.",
            check: () => talents.getArchaeologyLevel() >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Wealth Accumulator",
            description: "Reach a total wealth of 10,000 coins.",
            check: () => gold.get() >= 10000,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Expert Crafter",
            description: "Craft 50 items from the materials collected in the mine.",
            check: () => stats.itemsCrafted >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Mining Tycoon",
            description: "Reach a total wealth of 100,000 coins.",
            check: () => gold.get() >= 100000,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Geology Genius",
            description: "Collect at least one of every type of mineral.",
            check: () => inventory.hasAllMinerals(),
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Rare Earth Expert",
            description: "Collect at least one of every type of rare earth metal.",
            check: () => inventory.hasAllRareEarthMetals(),
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Gem Collector",
            description: "Collect at least one of every type of gem.",
            check: () => inventory.hasAllGems(),
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Artifact Aficionado",
            description: "Collect at least one of every type of artifact.",
            check: () => inventory.hasAllArtifacts(),
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Treasure Hunter Supreme",
            description: "Find 25 hidden treasure chests.",
            check: () => stats.treasureChestsFound >= 25,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Pickaxe Perfection",
            description: "Reach level 50 in pickaxe durability talent.",
            check: () => talents.getPickaxeDurabilityLevel() >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Super Speed Miner",
            description: "Reach level 50 in speed mining talent.",
            check: () => talents.getSpeedMiningLevel() >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Geode Guru",
            description: "Reach level 50 in geode mastery talent.",
            check: () => talents.getGeodeMasteryLevel() >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Treasure Hunter Champion",
            description: "Reach level 50 in treasure hunter talent.",
            check: () => talents.getTreasureHunterLevel() >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Fossil Fan",
            description: "Collect 100 fossils.",
            check: () => inventory.getItemCount("Fossil") >= 100,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Mineral Master",
            description: "Collect 500 minerals.",
            check: () => inventory.getItemCount("Mineral") >= 500,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Gemologist Extraordinaire",
            description: "Reach level 50 in gemology talent.",
            check: () => talents.getGemologyLevel() >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Archaeology Expert",
            description: "Collect 50 artifacts.",
            check: () => inventory.getItemCount("Artifact") >= 50,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Precious Metals Pro",
            description: "Collect 500 pieces of precious metals.",
            check: () => inventory.getItemCount("Precious Metal") >= 500,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Coal Connoisseur",
            description: "Collect 10,000 pieces of coal.",
            check: () => inventory.getItemCount("Coal") >= 10000,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Wealthy Baron",
            description: "Reach a total wealth of 1,000,000 coins.",
            check: () => gold.get() >= 1000000,
            progress: function () { return `Not Implemented` },
        },
        {
            name: "Mining Legend",
            description: "Reach the maximum level in all talents.",
            check: () => talents.isMaxLevel(),
            progress: function () { return `Not Implemented` },
        }
    ]

    // for (let i = 0; i < 100; i++) {
    //     achivements.push({
    //         name: "Placeholder",
    //         description: "Placeholder",
    //         check: () => true,
    //         progress: function () { return `Not Implemented` },
    //     })
    // }
    return achivements;
}