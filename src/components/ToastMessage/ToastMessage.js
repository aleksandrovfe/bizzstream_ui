import {useEffect} from "react";
import './ToastMessage.css'

export const ToastMessage = ({message, handler}) => {
    useEffect(() => {
        let timer = setTimeout(() => {
            handler()
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [message])

    return message ? <div className={`toast ${message}`}>{message}</div> : ''
}