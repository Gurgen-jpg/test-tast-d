import React, {useState} from 'react';
import Picture from "../../../../shared/ui/Picture/ui/Picture";
import s from "./Avatar.module.scss";
import Name from "../Name/Name";


const Avatar = () => {

    const [value, setValue] = useState<string>('Fake Name');

    return (
        <div className={s.Avatar}>
            <div className={s.avatarPicture}>
                <Picture
                    src={'https://media.istockphoto.com/id/1361586559/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%81%D0%B5%D0%BD%D1%8C-%D0%B2-%D0%BB%D0%B5%D1%81%D1%83-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5.jpg?s=1024x1024&w=is&k=20&c=N4jNVe4n6VbCW50nUuPCVxRuL3LcQYv59qjZ8fsfM7Q='}
                    width={128}
                    height={128}
                    round
                />
            </div>

            <Name setValue={setValue} value={value}/>
        </div>
    );
};

export default Avatar;
