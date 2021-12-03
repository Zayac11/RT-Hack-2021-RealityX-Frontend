import React, {FC, useEffect} from 'react'
import s from './ModalInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCamera} from "../../../../redux/rubbish-reducer";
import {AppStateType} from "../../../../redux/redux-store";
import Modal from "react-png-modal";

const ModalComponent:FC<MyProps> = ({visible, setVisible, uid}) => {
    const dispatch = useDispatch()

    const cameraData = useSelector((state: AppStateType) => state.rubbish.cameraData)

    useEffect(() => {
        if(uid !== null) {
            dispatch(getCurrentCamera(uid))
        }
    }, [uid])

    return (
        <>
            {/*@ts-ignore*/}
            <Modal
                closeModal={() => setVisible(false)}
                open={visible}
                alwaysOpen={false}
                className={s.modal}
                center
            >

                <p>id = {uid}</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
}

export default ModalComponent

type MyProps = {
    visible: boolean,
    setVisible: (value: boolean) => void,
    uid: number | null,
}