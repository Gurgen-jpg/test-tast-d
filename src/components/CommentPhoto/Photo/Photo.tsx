import React, {FC} from 'react';
import Picture from "../../../shared/ui/Picture/ui/Picture";
import mockImg from '../../../assets/images/img.png';
import s from './Photo.module.scss';

type PropsType = {
    image: string;
}
const Photo: FC<PropsType> = (props) => {
    const {
        image
    } = props;
    return (
        <div className={s.Photo}>
            {image
                ? <Picture src={image} width={405} height={405} contain alt='picture' radiusMax/>
                : <Picture src={mockImg} width={405} height={405} contain alt='picture' radiusMax/>
            }
        </div>
    );
};

export default Photo;
