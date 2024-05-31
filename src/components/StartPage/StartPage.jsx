import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./StartPage.css"

const StartPage = () => {
    const [color1, setColor1] = useState('');

    const onChangeColorBlue1 = () => {
        setColor1('colorblue')
    }
    const onChangeColorTg1 = () => {
        setColor1('colorTg')
    }

    const [color2, setColor2] = useState('');

    const onChangeColorBlue2 = () => {
        setColor2('colorblue')
    }
    const onChangeColorTg2 = () => {
        setColor2('colorTg')
    }
    return (
        <div className="page">
            <div className="photo1"></div>
            <div className="btn"
                    onMouseEnter={onChangeColorBlue1}
                    onMouseLeave={onChangeColorTg1}
                    onTouchStart={onChangeColorBlue1}
                    onTouchEnd={onChangeColorTg1}
                    >
                <Link to="/tempocalculatorform">
                    <Button 
                        className={`menubtn ${color1}`} 
                        >
                        <table className="btntable">
                            <tr>
                                <td>
                                <h1>Тренировочные зоны</h1>
                                <p>Подберите оптимальные темпы и пульс тренировок, чтобы сделать тренировки продуктивнее</p>
                                </td>
                                <td className="symbolgo">
                                    {'>'}
                                </td>
                            </tr>
                        </table>
                    </Button>
                </Link>
            </div>
            <div className="btn"
                    onMouseEnter={onChangeColorBlue2}
                    onMouseLeave={onChangeColorTg2}
                    onTouchStart={onChangeColorBlue2}
                    onTouchEnd={onChangeColorTg2}
                    >
                <Link to="/sneakerssizeform">
                    <Button 
                        className={`menubtn ${color2}`} 
                        >
                        <table className="btntable">
                            <tr>
                                <td>
                                <h1>Размер обуви</h1>
                                <p>Подберите оптимальные темпы и пульс тренировок, чтобы сделать тренировки продуктивнее</p>
                                </td>
                                <td className="symbolgo">
                                    {'>'}
                                </td>
                            </tr>
                        </table>
                    </Button>
                </Link>
            </div>
            <div className="photo2"></div>
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