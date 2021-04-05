import React from 'react'
import { useHistory } from 'react-router'
import { useWeb3 } from '../context/Web3Context'

const Dashboard: React.FC = () => {

    const { getAccount } = useWeb3()
    const history = useHistory()

    const gotoHome = async () => {
        await getAccount()
        history.push('/home')
    }

    return(
        <div style={{paddingLeft:"6rem", paddingRight:"6rem"}}>
            <h1>Welcome to Poke-saga</h1>
            <div>
                <p>
                    Poke Saga is a platform that allows you to mint rare pokemon cards and then trade them anywhere you like.
                </p>
                <p>
                    To login, connect with any of the below web3 wallets:
                </p>
            </div>
            <div>
                <button onClick={gotoHome}>Connect to Portis</button>
            </div>
        </div>
    )
}

export default Dashboard