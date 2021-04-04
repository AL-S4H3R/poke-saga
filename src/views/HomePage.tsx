import React from 'react'
import { useHistory } from 'react-router'
import Web3 from 'web3'
import { getPokemonStats } from '../api/pokemon'
import { useWeb3 } from '../context/Web3Context'
import abi from '../contracts/ABI.json'

const HomePage: React.FC = () => {

    const { account, web3Instance } = useWeb3()
    const history = useHistory()
    const [contractInstance, setContractInstance] = React.useState<any>()
    
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

    React.useEffect(() => {
        connectToContract()
    }, [])
    
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