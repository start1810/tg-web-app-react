import React, { useEffect, useState } from "react";
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState();
    const [birth, setBirth] = useState();
    const [gender, setGender] = useState();
    const {tg} = useTelegram

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!name || !birth) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.visible();
        }
    }, [name, birth])

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeBirth = (e) => {
        setBirth(e.target.value)
    }
    const onChangeGender = (e) => {
        setGender(e.target.value)
    }

    return (
       <div className={"form"}>
        <h3>Введите Ваши данные</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={'Имя'}
            value={name}
            onChange={onChangeName}
        />
        <input 
            className={'input'}
            type="text" 
            placeholder={'Год рождения'}
            value={birth}
            onChange={onChangeBirth}    
        />
        <select value={gender} onChange={onChangeGender} className={'select'}>
            <option value={'men'}>Мужчина</option>
            <option value={'women'}>Женщина</option>
        </select>
       </div>
    );
};

export default Form;