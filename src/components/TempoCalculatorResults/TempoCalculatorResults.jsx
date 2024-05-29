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
import dataValidation from "../../scripts/tempoCalculator/dataValidation.js";
import countHRRzones from "../../scripts/tempoCalculator/countHRRzones.js";

const TempoCalculatorResult = () => {
    const location = useLocation();
    const records = location.state.records;
    const age = location.state.age;

    if (!dataValidation(location.state)) {
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
    const generalLevel = countGeneralParameter(thresholdRun.level, intervalRun.level, repeatRun.level, age)
    const maxLevel = Math.max(thresholdRun.level, intervalRun.level, repeatRun.level)
    const minLevel = Math.min(thresholdRun.level, intervalRun.level, repeatRun.level)
    const easyTempoMax = getTempo(maxLevel, 'easy');
    const easyTempoMin = getTempo(minLevel, 'easy');
    const HRRzones = countHRRzones(age);

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
                Базовая зона: 
                <br />
                - рекомендуемый темп: {secToMin(easyTempoMax[0])}-{secToMin(easyTempoMin[1])}/км;
                <br />
                - рекомендуемый пульс:{HRRzones[0]}-{HRRzones[1]}уд/мин;
                <br /> <br />

                Пороговая зона:
                <br />
                - рекомендуемый темп: {thresholdRun.tempoFast}-{thresholdRun.tempoSlow}/км;
                <br />
                - рекомендуемый пульс:{HRRzones[1]}-{HRRzones[2]}уд/мин;
                <br /> <br />

                Зона МПК:
                <br />
                - рекомендуемый темп: {intervalRun.tempoFast}-{intervalRun.tempoSlow}/км;
                <br />
                - рекомендуемый пульс:{HRRzones[2]}-{HRRzones[3]}уд/мин;
                <br /> <br />

                Зона повторов:
                <br />
                - рекомендуемый темп: {repeatRun.tempoFast}-{repeatRun.tempoSlow}/км;
                <br />
                - рекомендуемый пульс нет смысла отслеживать.
                <br />
            </div>
        </div> 
    );
};

export default TempoCalculatorResult;