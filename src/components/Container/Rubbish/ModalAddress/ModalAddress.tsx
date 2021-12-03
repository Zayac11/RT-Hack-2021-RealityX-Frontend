import React, {FC} from 'react';
import s from './ModalAddress.module.scss'
import Modal from "react-png-modal";
import ModalAddressContent from './ModalAddressContent/ModalAddressContent';

const ModalAddress:FC<MyProps> = ({visible, setVisible}) => {
    return (
        //@ts-ignore
        <Modal
            className={s.modal}
            open={visible}
            center
            alwaysOpen={false}
            closeModal={() => setVisible(false)}
        >
            <ModalAddressContent setVisible={setVisible} />
        </Modal>
    );
};

export default ModalAddress;

type MyProps = {
    visible: boolean,
    setVisible: (isVisible: boolean) => void
}