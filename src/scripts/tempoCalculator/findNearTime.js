const findNearTime = (records, checkedTime) => {
    let distance = '';
    let nearestTime = 0;
    for (let prop in records) {
        if (nearestTime === 0) {
            distance = prop;
            nearestTime = records[prop];
        }
        if (records[prop] !== 0 && ((nearestTime - checkedTime)**2 > (records[prop] - checkedTime)**2)) {
            distance = prop;
            nearestTime = records[prop];
        }
    }
    return {distance, time: nearestTime};
}

export default findNearTime;