import React from 'react'
import { useHistory } from 'react-router'
import Web3 from 'web3'
import { getPokemonStats } from '../api/pokemon'
import { useWeb3 } from '../context/Web3Context'
import abi from '../contracts/ABI.json'

//@ts-ignore
import { SkynetClient } from 'skynet-js'

const portal = 'https://poke-saga.netlify.app/';
const sia = 'https://siasky.net/'
// Initiate the SkynetClient
const client = new SkynetClient(sia);

const HomePage: React.FC = () => {

    const { account, web3Instance } = useWeb3()
    const history = useHistory()
    
    const [contractInstance, setContractInstance] = React.useState<any>()
    const [pokemon, setPokemon] = React.useState<any>()
    
    if(!account){
        history.push('/')    
    }

    const connectToContract = async () => {
        if(web3Instance){
            // @ts-ignore
            var contract = new web3Instance.eth.Contract(abi, '0x951664149B0a5d3b4d7E5203107867126B753476')
            setContractInstance(contract)
            console.log(contract)
        }
    }

    const createPokemon = async () => {
        var pokemon = await getPokemonStats()
        setPokemon(pokemon)
        // const stats = {
        //     xp: pokemon.base_experience,
        //     hp: pokemon.stats[0].base_stat,
        //     attack: pokemon.stats[0]
        // }
        const stats = {
            "name": "Some Pokemon",
            "image": pokemon.sprites.front_default,
            "description": "Hey, I'm a pokemon"
        }

        const { skylink } = await client.uploadFile(stats);
        const skylinkUrl = client.getSkylinkUrl(skylink);

        console.log('File Uploaded:', skylinkUrl);

        await contractInstance.methods.createCollectible(skylinkUrl).send({
            from: account
        })
        var res = await contractInstance.methods.createCollectible(skylinkUrl).call({
            from: account
        })
        console.log(res)
    }

    React.useEffect(() => {
        connectToContract()
    }, [])

    return(
        <div style={{paddingLeft:"6rem"}}>
            <h3>Welcome , {account}</h3>
            <div>
                <p>Generate a Random Gen 1 Pokemon NFT</p>
                <button onClick={createPokemon}>
                    Create Pokemon
                </button>
            </div>
            <div>
                <img src={pokemon?.sprites.front_default} alt="" style={{height:"16rem", width:"16rem"}}/>
                <h1>{pokemon?.name}</h1>
            </div>
        </div>
    )
}

export default HomePage