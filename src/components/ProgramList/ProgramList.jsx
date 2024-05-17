import React, { useState, useCallback, useEffect } from "react";
import ProgramElem from "../ProgramElem/ProgramElem";
import { useTelegram } from "../../hooks/useTelegram";
import './ProgramList.css';

const WorkoutPrograms = [
    {id: 1, title: 'Общая', type: 'all', description: 'Программа, направленная на развитие всех качеств'},
    {id: 2, title: 'Скорость', type: '3000', description: 'Программа, направленная на развитие качеств, применяемых в гонках до 12 минут'},
    {id: 3, title: 'МПК', type: '5000', description: 'Программа, направленная на развитие качеств, применяемых в гонках от 15 до 30 минут'},
    {id: 4, title: 'ПАНО', type: '10000', description: 'Программа, направленная на развитие качествб применяемых в гонках от 30 минут'},
]

const ProgramList = () => {
    const [chooseProgram, setChooseProgram] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {chooseProgram, startDate, endDate}
        tg.sendData(JSON.stringify(data))
    }, [chooseProgram, startDate, endDate]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);
    
    const onAdd = (program) => {
        setChooseProgram(program);
    }

    const onChangeStartDate = (e) => {
        setStartDate(e.elem.value);
    }

    const onChangeEndDate = (e) => {
        setEndDate(e.elem.value);
    }

    if (!chooseProgram) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `Выбрать: план -  ${chooseProgram.title}`
        })
    }
    return (
       <div>
            <div>
            <h4>Выберите дату начала тренировок</h4>
                <input 
                    className={'input'}
                    type="date" 
                    //placeholder={'Километраж'}
                    value={startDate}
                    onChange={onChangeStartDate}
                />
            </div>
            <div>
            <h4>Выберите дату конца тренировок</h4>
                <input 
                    className={'input'}
                    type="date" 
                    //placeholder={'Километраж'}
                    value={endDate}
                    onChange={onChangeEndDate}
                />   
            </div>
            {WorkoutPrograms.map((item) => 
                <div>
                    <ProgramElem
                        program={item}
                        onAdd={onAdd}
                        className={'image' + item.id + (item.id !== chooseProgram?.id ? " grey" : '')}
                    />
                </div>
                )
            }
       </div> 
    )
}

export default ProgramList;