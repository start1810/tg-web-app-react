import findNearTime from "./findNearTime.js";
import getLevel from "./getLevel.js";
import getTempo from "./getTempo.js";
import secToMin from "./secToMin.js";

const countTempos = (records, type) => {
    const recomendedTimes = {
        easy: 90 * 60,
        threshold: 60 * 60,
        interval: 12 * 60,
        repeat: 4 * 60,
    }
    const nearestTime = findNearTime(records, recomendedTimes[type]);
    const level = getLevel(nearestTime)
    const tempoFast = secToMin(getTempo(level, type));
    const tempoSlow = secToMin(getTempo(level-1, type));
    console.log([type, tempoFast, tempoSlow])
    return {level, tempoFast, tempoSlow};
}

export default countTempos;