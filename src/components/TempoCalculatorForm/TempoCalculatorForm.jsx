import React, { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Link } from "react-router-dom";
import "./TempoCalculatorForm.css";

import Button from "../Button/Button";
const isEmpty = (data) => {
    return data ? data : 0;
}
const TempoCalculatorForm = () => {
    const [age, setAge] = useState('');

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

    const {tg} = useTelegram();

    const onChangeAge = (e) => {
        setAge(e.target.value);
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


    return (
        <div className={"form"}>
            <h4>Ваш возраст</h4>
            <input 
                className={'input'}
                type="text"
                placeholder={'сколько Вам лет'}
                value={age}
                onChange={onChangeAge}
            />
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
            <div>
                <Link to="/tempocalculatorresult" state={{
                    age: age,
                    oneKm: +isEmpty(oneKmMin) * 60 + +isEmpty(oneKmSec),
                    threeKm: +isEmpty(threeKmMin) * 60 + +isEmpty(threeKmSec),
                    fiveKm: +isEmpty(fiveKmMin) * 60 + +isEmpty(fiveKmSec),
                    tenKm: +isEmpty(tenKmH) * 60 * 60 + +isEmpty(tenKmMin) * 60 + +isEmpty(tenKmSec),
                    semiMarathon: +isEmpty(semiMarathonH) * 60 * 60 + +isEmpty(semiMarathonMin) * 60 + +isEmpty(semiMarathonSec),
                }}>
                    <Button>Отправить данные</Button>
                </Link>
            </div>
        </div>
     );
}

export default TempoCalculatorForm;