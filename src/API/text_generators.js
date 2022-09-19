import axios from "axios"

const RUS_ENDPOINT = 'https://fish-text.ru/get';
const ENG_ENDPOINT = 'https://baconipsum.com/api/';

export function strToLines(text, lettersInLine) {
    let charArray = text.split('')
    let arrayOfLines = []
    for (let i = 0; i < charArray.length;){
        if (i+lettersInLine > charArray.length){
            arrayOfLines.push(charArray.slice(i, charArray.length))
            break
        }
        else{
            let lastSpaceInLine = charArray.lastIndexOf(' ', i+lettersInLine)
            arrayOfLines.push(charArray.slice(i, lastSpaceInLine + 1))
            i = lastSpaceInLine + 1
        }
    }
    return arrayOfLines
}

export async function getSomeRussianText(){
    const { data } = await axios.get(RUS_ENDPOINT, {params: {
        type: 'paragraph',
        number: 1,
        format: 'text'
        }
    })
    data.lines = strToLines(data.text, 79)
    return data
}

export async function getSomeEnglishText(){
    const { data } = await axios.get(ENG_ENDPOINT, {params: {
            type: 'meat-and-filter',
            paras: 1,
            format: 'text'
        }
    })
    const obj = {}
    obj.text = data
    obj.lines = strToLines(data, 92)
    return obj
}