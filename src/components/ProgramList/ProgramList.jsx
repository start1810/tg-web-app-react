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
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {chooseProgram}
        tg.sendData(JSON.stringify(data))
    }, [chooseProgram]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);
    
    const onAdd = (program) => {
        setChooseProgram(program);
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
            {WorkoutPrograms.map((item) => 
                <div>
                    <ProgramElem
                        program={item}
                        onAdd={onAdd}
                        className={`item`}
                    />
                </div>
                )
            }
       </div> 
    )
}

export default ProgramList;