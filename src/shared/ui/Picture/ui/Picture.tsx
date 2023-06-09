import React, {FC} from 'react';
import {classNames} from "../../../lib/classNames";
import s from "./Picture.module.scss";



type PicturePropsType = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    round?: boolean;
    border?: boolean;
    contain?: boolean;
    radiusMax?:boolean;
    bg?: boolean;
}

const Picture: FC<PicturePropsType> = (props) => {
    const {
        src,
        alt = 'picture',
        width,
        height,
        radius,
        round,
        contain,
        radiusMax,
        bg,

    } = props;

    const mods = {
        [s['round']] : round,
        [s['radius']] : radius,
        [s['radiusMax']] : radiusMax,
        [s['contain']] : contain,
        [s['bg']] : bg
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={classNames(s.Picture, {...mods}, [])}
        />
    );
};

export default Picture;
