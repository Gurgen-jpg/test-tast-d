import React, {FC} from 'react';
import {FetchingStatusType} from "../../../shared/types/types";
import Picture from "../../../shared/ui/Picture/ui/Picture";
import s from "./Photos.module.scss"

interface Photos {
    state: {
        status: FetchingStatusType,
        message?: string[],
    }
}

const Photos: FC<Photos> = (props) => {
    const {
        status,
        message
    } = props.state;

    return (
        <div className={s.Photos}>
            {message?.map((photo) => {
                return <div key={photo} className={s.photoItem}>
                    <Picture src={photo} alt='god photo' width={430} height={216} radius contain/>
                </div>
            })}
        </div>
    );
};

export default Photos;
