import React from 'react';
import s from './ButtonsBlock.module.scss';
import Button from "../../../../shared/ui/Button/ui/Button";
import Icon from "../../../../shared/ui/Icon/ui/Icon";
import Phone from "../../../../assets/icons/Phone.svg";
import Mail from "../../../../assets/icons/Mail.svg"



const ButtonsBlock = () => {

    return (
        <div className={s.ButtonBlock}>
            <Button><Icon Svg={Mail} title='Message'/></Button>
            <Button
            ><Icon Svg={Phone} title='Call'/></Button>
        </div>
    );
};

export default ButtonsBlock;
