import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import {classNames} from "../../../lib/classNames";
import s from "./Button.module.scss";

export enum ButtonSize {
    MEDIUM = 'medium',
    LARGE = 'large',
}

export enum ButtonColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
    size?: ButtonSize,
    color?: ButtonColor,
    children?: ReactNode,
    disabled?: boolean,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        size = ButtonSize.MEDIUM,
        color = ButtonColor.PRIMARY,
        children,
        disabled,
        ...otherProps
    } = props;

    const mods = {
        [s[size]]: true,
        [s[color]]: true,
    }

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(s.Button, {...mods}, [])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
