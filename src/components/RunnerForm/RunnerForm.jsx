import React, { useCallback, useEffect, useState } from "react";
import "./RunnerForm.css";
import { useTelegram } from "../../hooks/useTelegram";

const RunnerForm = () => {
    const [trPerWeek, setTrPerWeek] = useState();
    const [kmPerWeekAvg, setKmPerWeekAvg] = useState();
    const [oneKm, setOneKm] = useState();
    const [threeKm, setThreeKm] = useState();
    const [fiveKm, setFiveKm] = useState();
    const [tenKm, setTenKm] = useState();
    const [semiMarathon, setSemiMarathon] = useState();
    const [marathon, setMarathon] = useState();
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
            trPerWeek,
            kmPerWeekAvg,
            oneKm,
            threeKm,
            fiveKm,
            tenKm,
            semiMarathon,
            marathon,
            mon,
            tue,
            wed,
            thu,
            fri,
            sat,
            sun
        }
        tg.sendData(JSON.stringify(data))
    }, [trPerWeek, kmPerWeekAvg, oneKm, threeKm, fiveKm, tenKm, semiMarathon, marathon, mon, tue, wed, thu, fri, sat, sun]);

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
    const onChangeOneKm = (e) => {
        setOneKm(e.target.value)
    }
    const onChangeThreeKm = (e) => {
        setThreeKm(e.target.value)
    }
    const onChangeFiveKm = (e) => {
        setFiveKm(e.target.value)
    }
    const onChangeTenKm = (e) => {
        setTenKm(e.target.value)
    }
    const onChangeSemiMarathon = (e) => {
        setSemiMarathon(e.target.value)
    }
    const onChangeMarathon = (e) => {
        setMarathon(e.target.value)
    }
    const onChangeMon = (e) => {
        setMon(e.target.value)
    }
    const onChangeTue = (e) => {
        setTue(e.target.value)
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
            <input 
                className={'input'}
                type="time" 
                //placeholder={'1 км'}
                step={"2"}
                value={oneKm}
                onChange={onChangeOneKm}
            />
            <input 
                className={'input'}
                type="time" 
                //placeholder={'3 км'}
                step={"2"}
                value={threeKm}
                onChange={onChangeThreeKm}
            />
            <input 
                className={'input'}
                type="time" 
                //placeholder={'5 км'}
                step={"2"}
                value={fiveKm}
                onChange={onChangeFiveKm}
            />
            <input 
                className={'input'}
                type="time" 
                //placeholder={'10 км'}
                step={"2"}
                value={tenKm}
                onChange={onChangeTenKm}
            />
            <input 
                className={'input'}
                type="time" 
                //placeholder={'Полумарафон'}
                step={"2"}
                value={semiMarathon}
                onChange={onChangeSemiMarathon}
            />
            <input 
                className={'input'}
                type="time" 
                //placeholder={'Марафон'}
                step={"2"}
                value={marathon}
                onChange={onChangeMarathon}
            />
            </div>
        </div>
     );
}

export default RunnerForm;