import axios from "axios"

const RUS_ENDPOINT = 'https://fish-text.ru/get';
const ENG_ENDPOINT = 'https://baconipsum.com/api/';

export async function getSomeRussianText(){
    const { data } = await axios.get(RUS_ENDPOINT, {params: {
        type: 'sentence',
        number: 3,
        format: 'json'
        }
    })
    return data.text
}

export async function getSomeEnglishText(){
    const { data } = await axios.get(ENG_ENDPOINT, {params: {
            type: 'meat-and-filter',
            sentences: 3,
            format: 'text'
        }
    })
    return data
}