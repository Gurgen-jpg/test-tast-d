import React, {ChangeEvent, FC, useState} from 'react';
import s from './Name.module.scss';

type NamePropsType = {
    setValue: (value: string) => void;
    value: string;
}

const Name: FC<NamePropsType> = (props) => {
    const {
        value,
        setValue
    } = props;
    const [tempName, setTempName] = useState(value);
    const [name, setName] = useState(value);
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTempName(event.target.value);
    }

    const onBlur = () => {
        if (tempName.length) {
            setValue(tempName);
            setName(tempName);
        } else {
            setValue(value);
            setName(value);
            setTempName(value);
        }
    }

    const onClickHandler = () => {
        setName('');
    }


    return (
        <div>
            {
                name
                    ? <div
                        className={s.Name}
                        onClick={onClickHandler}
                    >
                        {name}
                    </div>
                    : <input
                        placeholder='введте имя'
                        value={tempName}
                        onChange={onChangeHandler}
                        onBlur={onBlur}
                    />
            }
        </div>
    );
};

export default Name;
