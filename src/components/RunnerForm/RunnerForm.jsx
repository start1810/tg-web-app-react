import React, { useCallback, useEffect, useState } from "react";
import "./RunnerForm.css";
import { useTelegram } from "../../hooks/useTelegram";

const RunnerForm = () => {
    const [kmPerWeekAvg, setKmPerWeekAvg] = useState();
    const [oneKmMin, setOneKmMin] = useState();
    const [oneKmSec, setOneKmSec] = useState();

    const [threeKmMin, setThreeKmMin] = useState();
    const [threeKmSec, setThreeKmSec] = useState();

    const [fiveKmMin, setFiveKmMin] = useState();
    const [fiveKmSec, setFiveKmSec] = useState();

    const [tenKmMin, setTenKmMin] = useState();
    const [tenKmSec, setTenKmSec] = useState();
    const [tenKmH, setTenKmH] = useState();
    
    const [semiMarathonMin, setSemiMarathonMin] = useState();
    const [semiMarathonSec, setSemiMarathonSec] = useState();
    const [semiMarathonH, setSemiMarathonH] = useState();

    const [mon, setMon] = useState();
    const [tue, setTue] = useState();
    const [wed, setWed] = useState();
    const [thu, setThu] = useState();
    const [fri, setFri] = useState();
    const [sat, setSat] = useState();
    const [sun, setSun] = useState();


    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            trPerWeek: {mon, tue, wed, thu, fri, sat, sun},
            kmPerWeekAvg,
            records: {
                oneKm: [oneKmMin, oneKmSec],
                threeKm: [threeKmMin, threeKmSec],
                fiveKm: [fiveKmMin, fiveKmSec],
                tenKm: [tenKmH, tenKmMin, tenKmSec],
                semiMarathon: [semiMarathonH, semiMarathonMin, semiMarathonSec],
            }
            
        }
        tg.sendData(JSON.stringify(data))
    }, [kmPerWeekAvg, oneKmMin, oneKmSec, threeKmMin, threeKmSec
        , fiveKmMin, fiveKmSec, tenKmH, tenKmMin, tenKmSec,
         semiMarathonH, semiMarathonMin, semiMarathonSec,
          mon, tue, wed, thu, fri, sat, sun]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);

    /*
    useEffect(() => {
        if (!kmPerWeekAvg) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [kmPerWeekAvg])
    */

    tg.MainButton.show();

    

    const onChangeKmPerWeekAvg = (e) => {
        setKmPerWeekAvg(e.target.value)
    }
    const onChangeOneKmMin = (e) => {
        setOneKmMin(e.target.value)
    }
    const onChangeOneKmSec = (e) => {
        setOneKmSec(e.target.value)
    }

    const onChangeThreeKmMin = (e) => {
        setThreeKmMin(e.currentTarget.checked)
    }
    const onChangeThreeKmSec = (e) => {
        setThreeKmSec(e.currentTarget.checked)
    }

    const onChangeFiveKmMin = (e) => {
        setFiveKmMin(e.target.value)
    }
    const onChangeFiveKmSec = (e) => {
        setFiveKmSec(e.target.value)
    }

    const onChangeTenKmH = (e) => {
        setTenKmH(e.target.value)
    }
    const onChangeTenKmMin = (e) => {
        setTenKmMin(e.target.value)
    }
    const onChangeTenKmSec = (e) => {
        setTenKmSec(e.target.value)
    }

    const onChangeSemiMarathonH = (e) => {
        setSemiMarathonH(e.target.value)
    }
    const onChangeSemiMarathonMin = (e) => {
        setSemiMarathonMin(e.target.value)
    }
    const onChangeSemiMarathonSec = (e) => {
        setSemiMarathonSec(e.target.value)
    }
    
    const onChangeMon = (e) => {
        setMon(e.target)
    }
    const onChangeTue = (e) => {
        setTue(e.target)
    }
    const onChangeWed = (e) => {
        setWed(e.target.value)
    }
    const onChangeThu = (e) => {
        setThu(e.target.value)
    }
    const onChangeFri = (e) => {
        setFri(e.target.value)
    }
    const onChangeSat = (e) => {
        setSat(e.target.value)
    }
    const onChangeSun = (e) => {
        setSun(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите Ваши данные</h3>
            <div>
                <h4>Дни тренировок</h4>
                <table>
                    <tr>
                        <td>
                        <label className={"light"} for={"mon"}>Пн</label>
                        </td>
                        <td>
                        <label className={"light"} for={"tue"}>Вт</label>
                        </td>
                        <td>
                        <label className={"light"} for={"wed"}>Ср</label>
                        </td>
                        <td>
                        <label className={"light"} for={"thu"}>Чт</label>    
                        </td>
                        <td>
                        <label className={"light"} for={"fri"}>Пт</label>    
                        </td>
                        <td>
                        <label className={"light"} for={"sat"}>Сб</label>    
                        </td>
                        <td>
                        <label className={"light"} for={"sun"}>Вс</label>   
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input 
                            type="checkbox" 
                            id = "mon" 
                            value={mon} 
                            name="trPerWeek"
                            onChange={onChangeMon}
                        />    
                        </td>
                        <td>
                        <input 
                            type="checkbox" 
                            id = "tue" 
                            value={tue} 
                            name="trPerWeek"
                            onChange={onChangeTue}
                            /> 
                        </td>
                        <td>
                        <input 
                            type="checkbox" 
                            id = "wed" 
                            value={wed} 
                            name="trPerWeek"
                            onChange={onChangeWed}
                            />
                        </td>
                        <td>
                        <input 
                            type="checkbox" 
                            id = "thu" 
                            value={thu} 
                            name="trPerWeek"
                            onChange={onChangeThu}
                            />
                        </td>
                        <td>
                        <input 
                            type="checkbox" 
                            id = "fri" 
                            value={fri} 
                            name="trPerWeek"
                            onChange={onChangeFri}
                            />  
                        </td>
                        <td>
                        <input 
                            type="checkbox" 
                            id = "sat" 
                            value={sat} 
                            name="trPerWeek"
                            onChange={onChangeSat}
                            /> 
                        </td>
                        <td>
                        <input 
                            type="checkbox" 
                            id = "sun" 
                            value={sun} 
                            name="trPerWeek"
                            onChange={onChangeSun}
                            />
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h4>Сколько км в неделю вы пробегаете в среднем?</h4>
                <input 
                    className={'input'}
                    type="text" 
                    placeholder={'Километраж'}
                    value={kmPerWeekAvg}
                    onChange={onChangeKmPerWeekAvg}
                />
            </div>

            <div>
            <h4>Введите свои лучшие результаты на этих дистанциях за последние 6 недель</h4>
            <div>
            <h5>1 километр</h5>
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={oneKmMin}
                onChange={onChangeOneKmMin}
            />
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"}
                placeholder={'СС'}
                value={oneKmSec}
                onChange={onChangeOneKmSec}
            />
            </div>
            <div>
            <h5>3 километра</h5>
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={threeKmMin}
                onChange={onChangeThreeKmMin}
            />
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"}
                placeholder={'СС'}
                value={threeKmSec}
                onChange={onChangeThreeKmSec}
            />
            </div>
            <div>
            <h5>5 километров</h5>
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={fiveKmMin}
                onChange={onChangeFiveKmMin}
            />
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"}
                placeholder={'СС'}
                value={fiveKmSec}
                onChange={onChangeFiveKmSec}
            />
            </div>
            <div>
            <h5>10 километров</h5>
            <input 
                className={'input'}
                type="number"
                max={"2"}
                min={"0"} 
                placeholder={'ЧЧ'}
                value={tenKmH}
                onChange={onChangeTenKmH}
            />
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={tenKmMin}
                onChange={onChangeTenKmMin}
            />
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"}
                placeholder={'СС'}
                value={tenKmSec}
                onChange={onChangeTenKmSec}
            />
            </div>
            <div>
            <h5>Полумарафон</h5>
            <input 
                className={'input'}
                type="number"
                max={"4"}
                min={"0"} 
                placeholder={'ЧЧ'}
                value={semiMarathonH}
                onChange={onChangeSemiMarathonH}
            />
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={semiMarathonMin}
                onChange={onChangeSemiMarathonMin}
            />
            <input 
                className={'input'}
                type="number"
                max={"60"}
                min={"0"}
                placeholder={'СС'}
                value={semiMarathonSec}
                onChange={onChangeSemiMarathonSec}
            />
            </div>
            </div>
        </div>
     );
}

export default RunnerForm;