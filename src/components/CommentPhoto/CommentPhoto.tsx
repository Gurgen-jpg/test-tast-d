import React, {FC, useState} from 'react';
import Photo from "./Photo/Photo";
import CommentForm from "./CommentForm/CommentForm";
import s from './CommentPhoto.module.scss'
import Button, {ButtonColor} from "../../shared/ui/Button/ui/Button";
import {FetchingStatusType} from "../../shared/types/types";


type PropsType = {
    photo: string;
    closeComment: () => void;
}
const CommentPhoto: FC<PropsType> = (props) => {
    const [status, setStatus] = useState<FetchingStatusType>(FetchingStatusType.IDLE)
    const [text, setText] = useState('')
    const {
        photo,
        closeComment,
    } = props;

    const fetchComment = async () => {
        setStatus(FetchingStatusType.FETCHING)
        let promise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(text)
                setStatus(FetchingStatusType.SUCCESS)
                closeComment();
            }, 2000)
        })
        console.log(promise)
    }

    return (
        <div className={s.CommentPhoto}>
            <Photo image={photo}/>
            <CommentForm value={text} setValue={setText}/>
            <Button
                disabled={status === FetchingStatusType.FETCHING}
                color={ButtonColor.SECONDARY}
                onClick={fetchComment}
            >Save</Button>
        </div>
    );
};

export default CommentPhoto;
