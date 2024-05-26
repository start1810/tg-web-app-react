import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./StartPage.css"

const StartPage = () => {
    return (
        <div className="page">
            <div>
                <Link to="/tempocalculatorform">
                    <Button className={"menubtn"}>Калькулятор темпов</Button>
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