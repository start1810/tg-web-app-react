import React from "react";
import Button from "../Button/Button";

const ProgramElem = ({program, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(program);
    }

    return (
        <div>
            <div>{program.title}</div>
            <div>{program.description}</div>
            <Button className={"add-btn"} onClick={onAddHandler}>
                Выбрать план
            </Button>
        </div>
    )
}

export default ProgramElem;