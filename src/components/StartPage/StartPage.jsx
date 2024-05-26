import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./StartPage.css"

const StartPage = () => {
    return (
        <div className="page">
            <div className="photo1"></div>
            <div className="btn">
                <Link to="/tempocalculatorform">
                    <Button className={"menubtn"}>
                    <table>
                        <tr>
                            <td>
                            <h1>Калькулятор темпов</h1>
                            <p>Подберите оптимальные темпы и сделайте тренировки продуктивнее</p>
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