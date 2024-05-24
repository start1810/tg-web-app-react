import React from "react";
import { useLocation, Link} from "react-router-dom";
import findNearTime from "../../scripts/tempoCalculator/findNearTime.js";
import getLevel from "../../scripts/tempoCalculator/getLevel.js";
import getTempo from "../../scripts/tempoCalculator/getTempo.js";
import secToMin from "../../scripts/tempoCalculator/secToMin.js";
import Button from "../Button/Button.jsx";
import "./TempoCalculatorResults.css";
import countGeneralParameter from "../../scripts/tempoCalculator/countGeneralParameter.js";

const recomendedTimes = {
    easy: 90 * 60,
    threshold: 60 * 60,
    interval: 12 * 60,
    repeat: 4 * 60,
}

const TempoCalculatorResult = () => {
    const location = useLocation();
    const records = location.state;
    if (!(records.oneKm || records.threeKm || records.fiveKm || records.tenKm || records.semiMarathon)) {
        return (
            <div>
                Введены неверные данные
                <div>
                    <Link to="/tempocalculatorform">
                        <Button>Открыть калькулятор темпов</Button>
                    </Link>
                </div>
            </div>
        )
    }
    
    const age = records.age;
    const nearestTimeEasy = findNearTime(records, recomendedTimes.easy);
    const levelEasy = getLevel(nearestTimeEasy);
    const tempoEasy = getTempo(levelEasy, 'easy');

    const nearestTimeThreshold = findNearTime(records, recomendedTimes.threshold);
    const levelThreshold = getLevel(nearestTimeThreshold);
    const tempoThreshold = getTempo(levelThreshold, 'threshold')

    const nearestTimeInterval = findNearTime(records, recomendedTimes.interval);
    const levelInterval = getLevel(nearestTimeInterval);
    const tempoInterval = getTempo(levelInterval, 'interval')

    const nearestTimeRepeat = findNearTime(records, recomendedTimes.repeat);
    const levelRepeat = getLevel(nearestTimeRepeat);
    const tempoRepeat = getTempo(levelRepeat, 'repeat')

    const generalParameter = countGeneralParameter(levelThreshold, levelInterval, levelRepeat, age)
    //console.log(nearestTimeEasy)
    //console.log(nearestTimeThreshold)
    //console.log(nearestTimeInterval)
    //console.log(nearestTimeRepeat)
    return (
        <div>
            <div>
                <div className={"generalparameter"}>
                    <h1>{generalParameter}</h1>
                </div>
                <table className="table">
                    <tr>
                        <th>АНП</th>
                        <th>МПК</th>
                        <th>МЩН</th>
                        <th>ВЗР</th>
                    </tr>
                    <tr>
                        <td>{levelThreshold}</td>
                        <td>{levelInterval}</td>
                        <td>{levelRepeat}</td>
                        <td>{age}</td>
                    </tr>
                </table>
            </div>
            <div className={"tempodata"}>
                Легкий темп: {secToMin(tempoEasy[0])}-{secToMin(tempoEasy[1])}/км
                <br />
                Пороговый темп: {secToMin(tempoThreshold)}/км
                <br />
                Интервальный темп: {secToMin(tempoInterval)}/км
                <br />
                Повторный темп: {secToMin(tempoRepeat)}/км
            </div>
        </div> 
    );
};

export default TempoCalculatorResult;