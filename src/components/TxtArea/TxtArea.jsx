import React, {useEffect, useState} from 'react';
import {getENG} from '../../modules/getENG.js'
import {getRU} from '../../modules/getRU.js'

const TxtArea = ({setWord, currTrans, updCurrTrans, updErr}) => {
    const [isInputting,setIsInputting] = useState(false)
    const [title, setTitle] = useState('')    // TODO: do refactor on storageWord with object usestate - https://stackoverflow.com/questions/54895883/reset-to-initial-state-with-react-hooks
    const [inputPlacehld, setInputPlacehld] = useState('> input word to translate')
    const [sourceLang, setSourceLang] = useState('eng')
    const [isShortMode, setIsShortMode] = useState(false)
    useEffect(()=>{
        if (isInputting===false)
            sendRequest()
    }, [isInputting])

    function setShortMode() {
        setIsShortMode(true)
        setInputPlacehld('> short mode: input word')
    }
    
    function handleKeyDown(e) {
        if (e.key==='0' && inputW.length===0){
            e.preventDefault();
            setShortMode()
        }
        if (e.key === "Enter") {
            e.preventDefault();
            if (inputW!=='' && inputW.charCodeAt(0)!==10) {
                if (sourceLang === 'eng') {
                    setTitle(inputW);
                    setInputPlacehld(isShortMode ? '> шорт мод: введи перевод' : '> введите контекст слова')
                    setSourceLang('ru')
                } else if (sourceLang === 'ru') {
                    setWord(isShortMode,title, currTrans, inputW)
                    setInputPlacehld('> input word to translate')
                    setSourceLang('eng')
                    updCurrTrans('');
                }
            }
            setInputW('');
        }
    }
    
    function sendRequest(){
        if (inputW !== '' && inputW.charCodeAt(0)!==10 && !isShortMode) {
            if (sourceLang === 'ru') {
                getENG(inputW).then(answer => answer[0] === true ? updCurrTrans(answer[1]) : updErr(answer[1]));
            } else if (sourceLang === 'eng')
                getRU(inputW).then(answer => answer[0] === true ? updCurrTrans(answer[1]) : updErr(answer[1]));
        } else
            updCurrTrans('')
    }
    
    function handleChange(e){
        setInputW(e.target.value);
        if (isInputting===false){
            setIsInputting(true)
            setTimeout(()=> {
                setIsInputting(false)
            }, 1000)
        }
    }
    const [inputW, setInputW] = useState('')
    return (
        <textarea
            className="writing-space font"
            value={inputW}
            placeholder={inputPlacehld}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
        ></textarea>
    );
};

export default TxtArea;