const dataValidation = (data) => {
    let result = true;
    const {age, records} = data;
    const {oneKm, threeKm, fiveKm, tenKm, semiMarathon} = records;
    //console.log(data)

    if (!oneKm && !threeKm && !fiveKm && !tenKm && !semiMarathon) {
        result = false;
    }
    return result;
}

export default dataValidation;