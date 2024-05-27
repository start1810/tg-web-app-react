import { levels } from "./runPowerLevels.js";
const maxLevel = 56;

const getLevel = (nearestTimeObj) => {
    const {distance, time} = nearestTimeObj;
    const levelsData = JSON.parse(JSON.stringify(levels))
    let level = 'Нет данных в базе по этой дистанции'
    if (levelsData[distance]) {
    levelsData[distance].push(time);
    levelsData[distance].sort((a,b) => b - a);
    level = levelsData[distance].findIndex((elem) => elem === time);
    }
    if (level === maxLevel) {
        level = maxLevel-1;
    }
    /*
    console.log(levelsData);
    */
    console.log(level);
    
    return level;
}

export default getLevel;