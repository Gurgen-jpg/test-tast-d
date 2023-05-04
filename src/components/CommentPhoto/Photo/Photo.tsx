import React, {FC} from 'react';
import Picture from "../../../shared/ui/Picture/ui/Picture";
import mockImg from '../../../assets/images/img.png';

type PropsType = {
    image: string;
}
const Photo: FC<PropsType> = (props) => {
    const {
        image
    } = props;
    return (
        <>
            {image
                ? <Picture src={image} width={405} height={405} contain alt='picture' radiusMax/>
                : <Picture src={mockImg} width={405} height={405} contain alt='picture' radiusMax/>
            }
        </>
    );
};

export default Photo;
