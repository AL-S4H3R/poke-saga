import React from 'react'
import { useHistory } from 'react-router'
import { getPokemonStats } from '../api/pokemon'
import { useWeb3 } from '../context/Web3Context'

const HomePage: React.FC = () => {

    const { account } = useWeb3()
    const history = useHistory()

    if(!account){
        history.push('/')    
    }
    
    return(
        <div style={{paddingLeft:"6rem"}}>
            <h3>Welcome , {account}</h3>
            <div>
                <p>Generate a Random Gen 1 Pokemon NFT</p>
                <button onClick={() => {getPokemonStats()}}>Generate</button>
            </div>
        </div>
    )
}

export default HomePage