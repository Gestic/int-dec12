var setup = new Creep.Setup('miner');
setup.minControllerLevel = 3;
setup.multiBody = [WORK];
setup.fixedBody = [WORK, CARRY, MOVE];
setup.minAbsEnergyAvailable = 200;
setup.maxMulti = function(room){ return 4; };
setup.sortedParts = false;
setup.minEnergyAvailable = function(spawn){
    return 0.3;
};
setup.maxCount = function(spawn){
    let max = spawn.room.sources.length;
    if( spawn.room.storage ) {
        let add = mineral => {
            if(mineral.mineralAmount > 0 && 
                (!spawn.room.storage.store[mineral.mineralType] || spawn.room.storage.store[mineral.mineralType] < MAX_STORAGE_MINERAL ))
                 max++;
        };
        spawn.room.minerals.forEach(add);
    }
    return max;
};
setup.maxWeight = function(spawn){
    return null;
};
module.exports = setup;