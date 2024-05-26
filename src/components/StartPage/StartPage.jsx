import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./StartPage.css"

const StartPage = () => {
    const [color, setColor] = useState('');

    const onChangeColorBlue = () => {
        setColor('colorblue')
    }
    const onChangeColorTg = () => {
        setColor('colorTg')
    }
    return (
        <div className="page">
            <div className="photo1"></div>
            <div className="btn"
                    onMouseEnter={onChangeColorBlue}
                    onMouseLeave={onChangeColorTg}
                    >
                <Link to="/tempocalculatorform">
                    <Button 
                        className={`menubtn ${color}`} 
                        
                        >
                        <table className="btntable">
                            <tr>
                                <td>
                                <h1>Калькулятор темпов</h1>
                                <p>Ответьте на вопросы, подберите оптимальные темпы и сделайте тренировки продуктивнее</p>
                                </td>
                                <td className="symbolgo">
                                    {'>'}
                                </td>
                            </tr>
                        </table>
                    </Button>
                </Link>
            </div>
            {/*
            <div>
                <Link to="/runnerprogram">
                    <Button>Редактировать тренировочный план</Button>
                </Link>
            </div>
            */}
            
        </div>
    )
}

export default StartPage;