// useMining.js
import { ref, computed, watch } from 'vue'
import { common, uncommon, rare, legendary } from '../data/drop-tables/mining'
import useInventory from './useInventory';
import { useGold } from './useGold';
import { useStats } from './useStats';
import { useLogs } from './useLogs';

const { add, remove } = useInventory()
const gold = useGold()
const { stats, addStat, addNode, updateStat, getStat } = useStats()
const logs = useLogs()

// code to inject mining stats into the stats object
function injectMiningStats() {
    addNode('mining', {
        prospecting: 0,
        fortune: 0,
        luck: 0,
    })
}
injectMiningStats()

export default function useMining() {
    // Define a function that will simulate mining and generate random drops
    const mine = () => {
        // Define an object containing the drop tables for each rarity level
        const dropTables = {
            common: common,
            uncommon: uncommon,
            rare: rare,
            legendary: legendary
        }
        // Generate a random number of drops to simulate the mining process
        const dropCount = Math.floor(Math.random() * 3) + 1

        // For each drop, randomly select a drop table based on the rarity of the items
        for (let i = 0; i < dropCount; i++) {
            const dropTable = Math.random() < 0.01 ? dropTables.legendary :  // 1% chance of getting a legendary item
                Math.random() < 0.1 ? dropTables.rare :        // 10% chance of getting a rare item
                    Math.random() < 0.4 ? dropTables.uncommon :    // 40% chance of getting an uncommon item
                        dropTables.common                              // 49% chance of getting a common item

            // Select a random item from the current drop table, based on the item's drop chance and the player's luck
            const drop = dropTable.find((item) => Math.random() < item.chance * (getStat('general', 'luck') + 1) / 100)

            // If a drop is found, add it to the player's inventory and log a message
            if (drop) {
                logs.add(`You found a ${drop.icon} ${drop.name} worth 🪙${drop.value} gold!`)
                // inventory.add(drop)
                add(drop)
            }
        }

        // Increment the player's gold by the base amount plus their gold per second rate
        gold.add(1)
    }

    return {
        mine
    }
}