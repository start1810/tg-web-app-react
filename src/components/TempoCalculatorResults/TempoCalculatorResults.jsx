import React, { useState } from "react";
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
    const [firstZone, setFirstZone] = useState(['hiden','borderTg']);
    const [secondZone, setSecondZone] = useState(['hiden','borderTg']);
    const [thirdZone, setThirdZone] = useState(['hiden','borderTg']);
    const [fourthZone, setFourthZone] = useState(['hiden','borderTg']);
    const onChoicedFirstZone = () => {
        if (firstZone[0]==='hiden') {
            setFirstZone(['','borderActive'])

            setSecondZone(['hiden','borderTg'])
            setThirdZone(['hiden','borderTg'])
            setFourthZone(['hiden','borderTg'])
        } else {
            setFirstZone(['hiden','borderTg'])
        }
    }
    const onChoicedSecondZone = () => {
        if (secondZone[0]==='hiden') {
            setSecondZone(['','borderActive'])

            setFirstZone(['hiden','borderTg'])
            setThirdZone(['hiden','borderTg'])
            setFourthZone(['hiden','borderTg'])
        } else {
            setSecondZone(['hiden','borderTg'])
        }
    }
    const onChoicedThirdZone = () => {
        if (thirdZone[0]==='hiden') {
            setThirdZone(['','borderActive'])

            setFirstZone(['hiden','borderTg'])
            setSecondZone(['hiden','borderTg'])
            setFourthZone(['hiden','borderTg'])
        } else {
            setThirdZone(['hiden','borderTg'])
        }
    }
    const onChoicedFourthZone = () => {
        if (fourthZone[0]==='hiden') {
            setFourthZone(['','borderActive'])

            setFirstZone(['hiden','borderTg'])
            setThirdZone(['hiden','borderTg'])
            setSecondZone(['hiden','borderTg'])
        } else {
            setFourthZone(['hiden','borderTg'])
        }
    }
    const location = useLocation();
    const records = location.state.records;
    const age = location.state.age;

    if (!dataValidation(location.state)) {
        return (
            <div>
                Введены неверные данные
                <div>
                    <Link to="/tempocalculatorform">
                        <Button>Ввести данные снова</Button>
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
                <div className={firstZone[1]} onClick={onChoicedFirstZone}>
                    Базовая зона: 
                    <br />
                    - рекомендуемый темп: {secToMin(easyTempoMax[0])}-{secToMin(easyTempoMin[1])}/км;
                    <br />
                    - рекомендуемый пульс:{HRRzones[0]}-{HRRzones[1]}уд/мин;
                </div>
                <p className={firstZone[0]}>Это ваши обычные пробежки. Большинство километров должно пробегаться именно с этими параметрами.</p>
                <br />
                <div className={secondZone[1]} onClick={onChoicedSecondZone}>
                    Пороговая зона:
                    <br />
                    - рекомендуемый темп: {thresholdRun.tempoFast}-{thresholdRun.tempoSlow}/км;
                    <br />
                    - рекомендуемый пульс:{HRRzones[1]}-{HRRzones[2]}уд/мин;
                </div>
                <p className={secondZone[0]}>Отвечает за способность выводить лактат. Организм способен бежать в этой зоне 50-60 минут. Сильно влияет на результаты забегов от 10 до 21км. Определяется показателем анаэробного порога (<b>АНП</b>) </p>
                <br />
                <div className={thirdZone[1]} onClick={onChoicedThirdZone}>
                    Зона МПК:
                    <br />
                    - рекомендуемый темп: {intervalRun.tempoFast}-{intervalRun.tempoSlow}/км;
                    <br />
                    - рекомендуемый пульс:{HRRzones[2]}-{HRRzones[3]}уд/мин;
                </div>
                <p className={thirdZone[0]}>Эта зона отвечает за способность организма потреблять и превращать в энергию кислород. Проводя интервальные тренировки, направленные на повышение <b>МПК</b> Вы улучшите результаты в забегах длительностью 10-15 минут</p>
                <br />
                <div className={fourthZone[1]} onClick={onChoicedFourthZone}>
                    Зона повторов:
                    <br />
                    - рекомендуемый темп: {repeatRun.tempoFast}-{repeatRun.tempoSlow}/км;
                    <br />
                    - рекомендуемый пульс нет смысла отслеживать.
                    <br />
                </div>
                <p className={fourthZone[0]}>Тренировки в этой зоне повышают мощность и экономичность бега, так же влияют на результаты в гонках длительностью около 5 минут. Определяются показателем <b>МЩН</b></p>
            </div>
        </div> 
    );
};

export default TempoCalculatorResult;