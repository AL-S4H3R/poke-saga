import axios from 'axios'

const pokeUrl = 'https://pokeapi.co/api/v2'

const getRandomId = (min = 1, max = 151) => {
    let num = Math.random() * (max - min) + min
    return Math.round(num)
};

export const getPokemonStats = async () => {
    const id = getRandomId()
    var res = await axios.get(`${pokeUrl}/pokemon/${id}`)
    console.log(res.data)
    return res.data
}