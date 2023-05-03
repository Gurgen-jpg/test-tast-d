import React, {FC} from 'react';
import s from './Icon.module.scss';
import {classNames} from "../../../lib/classNames";

export enum TitleColor {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    title?: string;
    titleColor?: TitleColor;
}

const Icon: FC<IconProps> = (props) => {
    const {
        Svg,
        title,
        titleColor = TitleColor.PRIMARY
    } = props;

    const mods = {
        [s[titleColor]]: true,
    }
    return (
        <div className={s.wrapper}>
            <Svg className={classNames(s.Icon, {}, [])}/>
            {title && <span className={classNames('', {...mods}, [])}>{title}</span>}
        </div>
    )
};

export default Icon;
