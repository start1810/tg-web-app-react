import React, { useCallback, useEffect, useState } from "react";
import "./RunnerForm.css";
import { useTelegram } from "../../hooks/useTelegram";
const isEmpty = (data) => {
    return data ? data : 0;
}
const RunnerForm = () => {
    const [kmPerWeekAvg, setKmPerWeekAvg] = useState('');
    const [oneKmMin, setOneKmMin] = useState('');
    const [oneKmSec, setOneKmSec] = useState('');

    const [threeKmMin, setThreeKmMin] = useState('');
    const [threeKmSec, setThreeKmSec] = useState('');

    const [fiveKmMin, setFiveKmMin] = useState('');
    const [fiveKmSec, setFiveKmSec] = useState('');

    const [tenKmMin, setTenKmMin] = useState('');
    const [tenKmSec, setTenKmSec] = useState('');
    const [tenKmH, setTenKmH] = useState('');
    
    const [semiMarathonMin, setSemiMarathonMin] = useState('');
    const [semiMarathonSec, setSemiMarathonSec] = useState('');
    const [semiMarathonH, setSemiMarathonH] = useState('');

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
            trPerWeek: [
                mon?mon:false,
                tue?tue:false,
                wed?wed:false,
                thu?thu:false,
                fri?fri:false,
                sat?sat:false,
                sun?sun:false
            ],
            kmPerWeekAvg,
            records: {
                oneKm: +isEmpty(oneKmMin) * 60 + +isEmpty(oneKmSec),
                threeKm: +isEmpty(threeKmMin) * 60 + +isEmpty(threeKmSec),
                fiveKm: +isEmpty(fiveKmMin) * 60 + +isEmpty(fiveKmSec),
                tenKm: +isEmpty(tenKmH) * 60 * 60 + +isEmpty(tenKmMin) * 60 + +isEmpty(tenKmSec),
                semiMarathon: +isEmpty(semiMarathonH) * 60 * 60 + +isEmpty(semiMarathonMin) * 60 + +isEmpty(semiMarathonSec),
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
        setThreeKmMin(e.target.value)
    }
    const onChangeThreeKmSec = (e) => {
        setThreeKmSec(e.target.value)
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
        setMon(e.currentTarget.checked)
    }
    const onChangeTue = (e) => {
        setTue(e.currentTarget.checked)
    }
    const onChangeWed = (e) => {
        setWed(e.currentTarget.checked)
    }
    const onChangeThu = (e) => {
        setThu(e.currentTarget.checked)
    }
    const onChangeFri = (e) => {
        setFri(e.currentTarget.checked)
    }
    const onChangeSat = (e) => {
        setSat(e.currentTarget.checked)
    }
    const onChangeSun = (e) => {
        setSun(e.currentTarget.checked)
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
                className={'input time'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={oneKmMin}
                onChange={onChangeOneKmMin}
            />
            <input 
                className={'input time'}
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
                className={'input time'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={threeKmMin}
                onChange={onChangeThreeKmMin}
            />
            <input 
                className={'input time'}
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
                className={'input time'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={fiveKmMin}
                onChange={onChangeFiveKmMin}
            />
            <input 
                className={'input time'}
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
                className={'input time'}
                type="number"
                max={"2"}
                min={"0"} 
                placeholder={'ЧЧ'}
                value={tenKmH}
                onChange={onChangeTenKmH}
            />
            <input 
                className={'input time'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={tenKmMin}
                onChange={onChangeTenKmMin}
            />
            <input 
                className={'input time'}
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
                className={'input time'}
                type="number"
                max={"4"}
                min={"0"} 
                placeholder={'ЧЧ'}
                value={semiMarathonH}
                onChange={onChangeSemiMarathonH}
            />
            <input 
                className={'input time'}
                type="number"
                max={"60"}
                min={"0"} 
                placeholder={'ММ'}
                value={semiMarathonMin}
                onChange={onChangeSemiMarathonMin}
            />
            <input 
                className={'input time'}
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