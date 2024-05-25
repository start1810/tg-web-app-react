import React from "react";
import { useLocation, Link} from "react-router-dom";
import findNearTime from "../../scripts/tempoCalculator/findNearTime.js";
import getLevel from "../../scripts/tempoCalculator/getLevel.js";
import getTempo from "../../scripts/tempoCalculator/getTempo.js";
import secToMin from "../../scripts/tempoCalculator/secToMin.js";
import Button from "../Button/Button.jsx";
import "./TempoCalculatorResults.css";
import countGeneralParameter from "../../scripts/tempoCalculator/countGeneralParameter.js";
import countTempos from "../../scripts/tempoCalculator/countTempos.js";

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

    const thresholdRun = countTempos(records, 'threshold')

    const intervalRun = countTempos(records, 'interval')

    const repeatRun = countTempos(records, 'repeat')
    const age = records.age;
    const generalLevel = countGeneralParameter(thresholdRun.level, intervalRun.level, repeatRun.level, age)
    const maxLevel = Math.max(thresholdRun.level, intervalRun.level, repeatRun.level)
    const minLevel = Math.min(thresholdRun.level, intervalRun.level, repeatRun.level)
    const easyTempoMax = getTempo(maxLevel, 'easy');
    const easyTempoMin = getTempo(minLevel, 'easy');

    return (
        <div className={"app"}>
            <div className={"runlevels"}>
                <div className={"generalparameter"}>
                    <h1>{generalLevel}</h1>
                    run level
                </div>
                <table className="table">
                    <tr>
                        <th>АНП</th>
                        <th>МПК</th>
                        <th>МЩН</th>
                        <th>ВЗР</th>
                    </tr>
                    <tr>
                        <td>{thresholdRun.level}</td>
                        <td>{intervalRun.level}</td>
                        <td>{repeatRun.level}</td>
                        <td>{age}</td>
                    </tr>
                </table>
            </div>
            <div className={"tempodata"}>
                Легкий темп: {secToMin(easyTempoMax[0])}-{secToMin(easyTempoMin[1])}/км
                <br />
                Пороговый темп: {thresholdRun.tempoFast}-{thresholdRun.tempoSlow}/км
                <br />
                Интервальный темп: {intervalRun.tempoFast}-{intervalRun.tempoSlow}/км
                <br />
                Повторный темп: {repeatRun.tempoFast}-{repeatRun.tempoSlow}/км
            </div>
        </div> 
    );
};

export default TempoCalculatorResult;