import './Header.css';
import React from "react";
import Button from "../Button/Button"
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
    const {onClose, user} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <div className="logo"></div>
            {/*<span className={"username"}>
                {user?.username}
            </span>*/}
        </div>
    );
};

export default Header;