import React from 'react';
import s from './Main.module.scss'

import Header from "../../components/Header/Header";

const Main = () => {
    return (
        <div className={s.Main}>
            <Header/>
        </div>
    );
};

export default Main;
