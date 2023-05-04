import React, {useEffect, useState} from 'react';
import s from './Main.module.scss'
import Header from "../../components/Header/Header";
import appApi from "../../shared/api/instance";
import Categories from "../../components/Categories/Categories";
import Photos from "../../components/Photos/ui/Photoes";
import {FetchingStatusType} from "../../shared/types/types";
import {Modal} from "../../shared/ui/Modal";
import Photo from "../../components/CommentPhoto/Photo/Photo";
import CommentPhoto from "../../components/CommentPhoto/CommentPhoto";

export type MainState = {
    message?: string[],
    status: FetchingStatusType,
}

export type PhotoState = {
    message?: string[],
    status: FetchingStatusType,
}

const Main = () => {

    const [open, setOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState('');
    const [state, setState] = useState<MainState>({status: FetchingStatusType.IDLE,})
    const [photosState, setPhotosState] = useState<PhotoState>({
        status: FetchingStatusType.IDLE
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await appApi.fetchCategories();
                setState({message: response?.message, status: response?.status})
            } catch (err) {
                console.error(err)
            }
        };
        fetchData();
    }, [])

    const openComment = (photo: string) => {
        setCurrentPhoto(photo);
        setOpen(true);
    }

    const closeComment = () => {
      setOpen(false);
    }

    return (
        <div className={s.Main}>
            <Modal isOpen={open}>
                <CommentPhoto photo={currentPhoto} closeComment={closeComment}/>
            </Modal>
            <Header/>
            <Categories categories={state?.message} setPhotos={setPhotosState} />
            <Photos state={photosState} setCurrentPhoto={openComment}/>
        </div>
    );
};

export default Main;
