import './App.scss';
import {useState} from "react";
import TxtArea from "./components/TxtArea/TxtArea";
import ErrMess from "./components/ErrMess/ErrMess";
import TranslatedTxt from "./components/TranslatedTxt/TranslatedTxt";
import useLocalStorage from "./hooks/useLocalStorage";
import Btn from "./components/Btn/Btn";
import SaveDone from "./components/SaveDone/SaveDone";

function App() {
    const [currTranslate,setCurrTranslate] = useState('')
    const [errMess,setErrMess] = useState('')
    const [storageWords,setStorageWords] = useLocalStorage("storageWords",[])
    const [isAlertShown,setIsAlertShown] = useLocalStorage("isAlertShown",false)
    const [isIconShown, setIsIconShown] = useState(false)
    
    const showLocalStorDelAlert = () =>{
        if (isAlertShown)
            return
        alert("При скачивании html новые слова будут вносится в новый html файл")
        setIsAlertShown(true)
    }
    const updateCurrTranslate = (val) =>{
        setCurrTranslate(val)
        updateErrMess('')
    }
    const updateErrMess = (val) => {
        setErrMess(val)
    }
    const clearStorageWords = () => {
        setStorageWords([])
    }
    const showIcon = () => {
        setIsIconShown(true);
        setTimeout(()=> {
            setIsIconShown(false)
        }, 500);
    }
    const setStorageWord = (title,context,translate) =>{
        setStorageWords([...storageWords,{
            "title" : `${title}: ${context}`,
            "translate": translate
        }])
        showIcon();
    }
  return (
      <div className="engDict-to-html-convert">
          <Btn storage={storageWords} clearStorage={clearStorageWords} alert={showLocalStorDelAlert} />
          <SaveDone isShown={isIconShown}/>
          <div className="writing-space_shade"></div>
          <div className="writing-space_shadow"></div>
          <TxtArea currTrans={currTranslate} setWord={setStorageWord} updCurrTrans={updateCurrTranslate} updErr={updateErrMess}/>
          {currTranslate && <TranslatedTxt text={currTranslate}/>}
          {errMess && <ErrMess mess={errMess}/>}
      </div>
  );
}

export default App;
