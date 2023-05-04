import React, {ChangeEvent, FC} from 'react';
import s from './CommentForm.module.scss';


type PropsType = {
    value: string;
    setValue: (value: string) => void;
}
const CommentForm: FC<PropsType> = (props) => {
    const {
        value,
        setValue
    } = props

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>Comment</div>
            <textarea
                className={s.textArea}
                value={value}
                onChange={onChangeHandler}
            />
            <div
                className={s.footer}
            >
                Write a few sentences about the photo</div>
        </div>

    );
};

export default CommentForm;
