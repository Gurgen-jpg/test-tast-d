import React, {FC} from 'react';
import s from './Categories.module.scss';
import Button from "../../shared/ui/Button/ui/Button";
import appApi from "../../shared/api/instance";
import {FetchingStatusType} from "../../shared/types/types";
import {PhotoState} from "../../pages/Main/Main";

type PropsType = {
    categories?: string[]
    setPhotos: (arg: PhotoState) => void
}
const Categories: FC<PropsType> = (props) => {
    const {
        categories,
        setPhotos
    } = props;

    const onClickHandler = async (category: string) => {
        try {
            setPhotos({status: FetchingStatusType.FETCHING})
            let response = await appApi.fetchPhotos(category);
            setPhotos({status: FetchingStatusType.SUCCESS, message: response.message});
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className={s.Categories}>
            {
                categories && categories.map((category) => {
                    return <Button
                        key={category}
                        onClick={() => onClickHandler(category)}
                    >{category}</Button>
                })
            }


        </div>
    );
};

export default Categories;
