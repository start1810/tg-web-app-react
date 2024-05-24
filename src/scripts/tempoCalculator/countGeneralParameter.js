const countGeneralParameter = (thresholdLevel, intervalLevel, repeatLevel, age = 18) => {
    let ageCoef = 1;
    if (age <= 30) {
        ageCoef = 1;
    } else if (age <= 35 ){
        ageCoef = 0.99;
    } else if (age <= 40 ){
        ageCoef = 0.97;
    } else if (age <= 45){
        ageCoef = 0.93;
    } else if (age <= 50){
        ageCoef = 0.89;
    } else if (age <= 55){
        ageCoef = 0.85;
    } else if (age <= 60){
        ageCoef = 0.81;
    } else if (age <= 65){
        ageCoef = 0.76;
    } else if (age <= 70){
        ageCoef = 0.71;
    } else if (age <= 75){
        ageCoef = 0.66;
    } else if (age <= 80){
        ageCoef = 0.6;
    } else if (age <= 85){
        ageCoef = 0.51;
    } else if (age <= 90){
        ageCoef = 0.38;
    } 
    const generalParameter = Math.round((thresholdLevel + intervalLevel + repeatLevel) / 3 / ageCoef);

    return generalParameter;
}

export default countGeneralParameter;