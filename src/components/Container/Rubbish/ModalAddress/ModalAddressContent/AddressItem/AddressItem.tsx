import React, {FC} from 'react';
import s from './AddressItem.module.scss'

const AddressItem:FC<MyProps> = ({value, handleChange, text, type}) => {
    const change = (value: string) => {
        handleChange(value)
        localStorage.setItem(type, value)
    }
    return (
        <label className={s.label}>
            {text}
            <input className={s.input} onChange={(e) => change(e.target.value)} type='text' value={value} />
        </label>
    );
};

export default AddressItem;

type MyProps = {
    value: string,
    text: string,
    type: string,
    handleChange: (value: string) => void
}