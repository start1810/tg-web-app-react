import React, { useState } from "react";
import ProgramElem from "../ProgramElem/ProgramElem";

const WorkoutPrograms = [
    {id: 1, title: 'Общая', type: 'all', description: 'Программа, направленная на развитие всех качеств'},
    {id: 2, title: 'Скорость', type: '3000', description: 'Программа, направленная на развитие качеств, применяемых в гонках до 12 минут'},
    {id: 3, title: 'МПК', type: '5000', description: 'Программа, направленная на развитие качеств, применяемых в гонках от 15 до 30 минут'},
    {id: 4, title: 'ПАНО', type: '10000', description: 'Программа, направленная на развитие качествб применяемых в гонках от 30 минут'},
]

const ProgramList = () => {
    const [chooseProgram, setChooseProgram] = useState();

    const onAdd = (program) => {
        setChooseProgram(program.type);
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
                <ProgramElem
                    program={item}
                    onAdd={onAdd}
                    className={'item'}
                />)
            }
       </div> 
    )
}

export default ProgramList;