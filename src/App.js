import './App.scss';
import {useState} from "react";
import TxtArea from "./components/TxtArea/TxtArea";
import ErrMess from "./components/ErrMess/ErrMess";
import TranslatedTxt from "./components/TranslatedTxt/TranslatedTxt";
import useLocalStorage from "./hooks/useLocalStorage";
import Btn from "./components/Btn/Btn";

function App() {
    const [currTranslate,setCurrTranslate] = useState('')
    const [errMess,setErrMess] = useState('')
    const [storageWords,setStorageWords] = useLocalStorage("storageWords",[])
    const updateCurrTranslate = (val) =>{
        setCurrTranslate(val)
    }
    const updateErrMess = (val) => {
        setErrMess(val)
    }
    const setStorageWord = (title,context,translate) =>{
        setStorageWords([...storageWords,{
            "title" : `${title}: ${context}`,
            "translate": translate
        }])
        console.log('ok');
    }
  return (
      <div className="engDict-to-html-convert">
          <Btn storage={storageWords} />
          <div className="writing-space_shade"></div>
          <div className="writing-space_shadow"></div>
          <TxtArea currTrans={currTranslate} setWord={setStorageWord} updCurrTrans={updateCurrTranslate} updErr={updateErrMess}/>
          {currTranslate && <TranslatedTxt text={currTranslate}/>}
          {errMess && <ErrMess mess={errMess}/>}
      </div>
  );
}

export default App;
