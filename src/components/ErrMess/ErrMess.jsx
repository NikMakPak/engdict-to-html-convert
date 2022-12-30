import React from 'react';

const ErrMess = ({mess}) => {
    return (
        <div className={'message error font'}>
            <span>></span> {mess} <br/> can`t translate text <br/> ..you are offline..
        </div>
    );
};

export default ErrMess;