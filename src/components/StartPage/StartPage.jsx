import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const StartPage = () => {
    return (
        <div>
            <div>
                <Link to="/tempocalculatorform">
                    <Button>Калькулятор темпов</Button>
                </Link>
            </div>
            <div>
                <Link to="/runnerprogram">
                    <Button>Редактировать тренировочный план</Button>
                </Link>
            </div>
            
        </div>
    )
}

export default StartPage;