import { levels } from "./runPowerLevels.js";

const getLevel = (nearestTimeObj) => {
    const {distance, time} = nearestTimeObj;
    const levelsData = JSON.parse(JSON.stringify(levels))
    let level = 'Нет данных в базе по этой дистанции'
    if (levelsData[distance]) {
    levelsData[distance].push(time);
    levelsData[distance].sort((a,b) => b - a);
    level = levelsData[distance].findIndex((elem) => elem === time); //- 1 + 30;
    }
    console.log(levelsData)
    
    return level;
}

export default getLevel;