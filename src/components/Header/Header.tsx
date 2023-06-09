import React, {memo} from 'react';
import Picture from "../../shared/ui/Picture/ui/Picture";
import s from "./Header.module.scss";
import Avatar from "./Content/Avatar/Avatar";
import ButtonsBlock from "./Content/ButtonsBlock/ButtonsBlock";

const Header = () => {
    return (
        <div className={s.Header}>
            <Picture
                src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'}
                width="100%"
                height="200px"

            />
            <div className={s.content}>
                <Avatar/>
                <ButtonsBlock/>
            </div>
        </div>
    );
};

export default memo(Header);
