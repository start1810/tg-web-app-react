const countHRRzones = ( age ) => {
    let checkedAge = age < 90? age : 90;
    if (checkedAge === 0) {
        checkedAge = 33;
    }
    const maxHRR = 220 - checkedAge;
    const recoveryHRR = Math.round(0.65 * maxHRR);
    const aerobicHRR = Math.round(0.8 * maxHRR);
    const anaerobicHRR = Math.round(0.9 * maxHRR);
    const pickHRR = Math.round(0.95 * maxHRR);

    const zones = [ recoveryHRR, aerobicHRR, anaerobicHRR, pickHRR, maxHRR ];

    return zones
}

export default countHRRzones;
