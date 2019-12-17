import Axios from 'axios';

let instance = Axios.create({
    baseURL: 'https://www.moogleapi.com/api/v1/',
})

export const getCharacter = async (userName) => {
    let res = await instance.get(`characters/search?name=${userName}`);
    return res.data;
}

export const getAllCharacters = async () => {
    let res = await instance.get('characters');
    return res.data;
}

export const getRandomCharacter = async () => {
    let res = await instance.get('characters/random');
    return res.data;
}

export const getMonster = async (monsterName) => {
    let res = await instance.get(`monsters/search?name=${monsterName}`);
    return res.data;
} 

export const getAllMonsters = async () => {
    let res = await instance.get('monsters');
    return res.data;
}

export const getGames = async () => {
    let res = await instance.get('games');
    return res.data;
}