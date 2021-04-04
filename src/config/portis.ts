import Portis from '@portis/web3'

const dappId = process.env.REACT_APP_PORTIS_DAPP_ID
//@ts-ignore
export const portis = new Portis(dappId, 'maticMumbai')