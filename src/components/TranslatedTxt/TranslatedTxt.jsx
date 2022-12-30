import React from 'react';

const TranslatedTxt = ({text}) => {
    return (
        <div className={"message translated font"}>
            <span>></span> {text}
        </div>
    );
};

export default TranslatedTxt;