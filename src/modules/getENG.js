export async function getENG(word) {
    let sourceLang = 'ru';
    let targetLang = 'eng';
    let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(word);
    let answer = await fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                return ([true, result[0][0][0]]);
            },
            (error) => {
                return [false, error.message];
            })
    return (answer);
}