import {classNames} from "../../../lib/classNames";
import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import style from "./Modal.module.scss"
import {Portal} from "./Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    lazy?: boolean;
    bg?: boolean;
    contentHeight?: number;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
        bg = true,
        contentHeight
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    // Новые ссылки!!!
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isMounted, isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods = {
        [style.opened]: isOpen,
        [style.isClosing]: isClosing,
    };
    const contentClasses = {
        [style.contentOpened]: isOpen,
        [style.isClosingContent]: isClosing
    }
    const overLayStyle = {
        [style.overlayBg]: bg
    }
    // if (lazy && !isMounted) {
    //     return null;
    // }
    return (
        <Portal>
            <div className={classNames(style.Modal, mods, [])}>
                <div className={classNames(style.overlay, overLayStyle, []) } onClick={closeHandler}>
                    <div
                        style={{maxHeight: `${contentHeight}px`}}
                        className={classNames(style.content, contentClasses, [])}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
