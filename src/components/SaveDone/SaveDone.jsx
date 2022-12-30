import React from 'react';

const SaveDone = ({isShown}) => {
    return (
        <div className={"save-bg"+` ${isShown ? '' : 'hidden'}`}>
            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5833 21.6667L25 12.25L22.5833 9.83333L15.5417 16.875L12.0417 13.375L9.66667 15.75L15.5833 21.6667ZM9.16667 26.6667C6.63889 26.6667 4.47944 25.7917 2.68833 24.0417C0.896111 22.2917 0 20.1528 0 17.625C0 15.4583 0.652778 13.5278 1.95833 11.8333C3.26389 10.1389 4.97222 9.05556 7.08333 8.58333C7.77778 6.02778 9.16667 3.95833 11.25 2.375C13.3333 0.791667 15.6944 0 18.3333 0C21.5833 0 24.34 1.13167 26.6033 3.395C28.8678 5.65944 30 8.41667 30 11.6667C31.9167 11.8889 33.5072 12.715 34.7717 14.145C36.035 15.5761 36.6667 17.25 36.6667 19.1667C36.6667 21.25 35.9378 23.0211 34.48 24.48C33.0211 25.9378 31.25 26.6667 29.1667 26.6667H9.16667ZM9.16667 23.3333H29.1667C30.3333 23.3333 31.3194 22.9306 32.125 22.125C32.9306 21.3194 33.3333 20.3333 33.3333 19.1667C33.3333 18 32.9306 17.0139 32.125 16.2083C31.3194 15.4028 30.3333 15 29.1667 15H26.6667V11.6667C26.6667 9.36111 25.8544 7.39556 24.23 5.77C22.6044 4.14556 20.6389 3.33333 18.3333 3.33333C16.0278 3.33333 14.0628 4.14556 12.4383 5.77C10.8128 7.39556 10 9.36111 10 11.6667H9.16667C7.55555 11.6667 6.18056 12.2361 5.04167 13.375C3.90278 14.5139 3.33333 15.8889 3.33333 17.5C3.33333 19.1111 3.90278 20.4861 5.04167 21.625C6.18056 22.7639 7.55555 23.3333 9.16667 23.3333Z" fill="#0B9108"/>
            </svg>
        </div>
    );
};

export default SaveDone;