import React, {FC} from 'react';
import {classNames} from "../../../lib/classNames";
import s from "./Picture.module.scss";

type PicturePropsType = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    radius?: boolean;
    border?: boolean;
}

const Picture: FC<PicturePropsType> = (props) => {
    const {
        src,
        alt = 'picture',
        width,
        height,
        radius,

    } = props;

    const mods = {
        [s['radius']] : radius
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={classNames(s.Picture, mods, [])}
        />
    );
};

export default Picture;
