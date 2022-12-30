import React from 'react';
import { saveAs } from 'file-saver';

const Btn = ({storage,alert}) => {
    function getListItem({title,translate}) {
        return `<ul class="toggle"><li><details><summary>${title}</summary><p class="">${translate}</p></details></li></ul>` //TODO: future - add english voiceover words here. source ?
    }
    function generateHtml(){
        let list = []
        storage.forEach(item=>list.push(getListItem(item)))
        return '<html lang="en"><head><title>English words</title></head><body><article class="page sans"><header> <h1 class="page-title">Anki eng dict</h1> </header> <div class="page-body">' + list.join("") + '</div></article></body></html>'
    }
    function downloadFile(htmlData){
        alert()
        let blob = new Blob([htmlData], {type: "text/plain;charset=utf-8"});
        saveAs(blob, `${storage[0].title.substring(0, 5)}-etc.html`);
        //TODO: future - make html generation on the server on the node js and send the file to telegram. source: 1 - https://www.youtube.com/watch?v=UaoRx_EmD70&ab_channel=UlbiTV  |  2 - https://www.youtube.com/watch?v=RviYQrNdDok&t=1221s&ab_channel=AVISTV
    }

    return (
        <button onClick={()=>downloadFile(generateHtml())} disabled={!storage.length} className={"btnHtml"}><img src={"./img/btnHtml.svg"} alt="btn to download html" /></button>
    );
};

export default Btn;