import React, {FC} from 'react';
import s from './LoginError.module.scss'

const LoginError:FC<{text: string}> = ({text}) => {
    return (
        <div className={s.error}>
            {text}
        </div>
    );
};

export default LoginError;