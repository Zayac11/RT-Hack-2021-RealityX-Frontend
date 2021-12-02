import React, {FC, useEffect} from 'react'
import { Modal } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCamera} from "../../../../redux/rubbish-reducer";
import {AppStateType} from "../../../../redux/redux-store";

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
            <Modal
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
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