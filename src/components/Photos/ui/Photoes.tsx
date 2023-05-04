import React, {FC} from 'react';
import {FetchingStatusType} from "../../../shared/types/types";
import Picture from "../../../shared/ui/Picture/ui/Picture";
import s from "./Photos.module.scss"


interface Photos {
    state: {
        status: FetchingStatusType,
        message?: string[],
    },
    setCurrentPhoto:(photo: string) => void;
}

const Photos: FC<Photos> = (props) => {
    const {
        status,
        message
    } = props.state;
    const {
        setCurrentPhoto
    } = props;


    return (
        <div className={s.Photos}>
            {message ? message?.map((photo) => {
                return <div key={photo} className={s.photoItem} onClick={()=>setCurrentPhoto(photo)}>
                    <Picture src={photo} alt='god photo' width={430} height={216} radius contain bg/>
                </div>
            })
            : <span>Chose category, please</span>
            }
        </div>
    );
};

export default Photos;
