import React from "react";
import Button from "../Button/Button";

const ProgramElem = ({program, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(program);
    }

    return (
        <div>
            <Button className={`add-btn item image${program.id} `} onClick={onAddHandler}>
                <div>{program.title}</div>
                <div>{program.description}</div>
            </Button>
        </div>
    )
}

export default ProgramElem;