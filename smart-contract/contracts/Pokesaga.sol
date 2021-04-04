pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/0.6/VRFConsumerBase.sol";

//POLYGON_VRF_COORDINATOR = '0x3d2341ADb2D31f1c5530cDC622016af293177AE0'
//POLYGON_LINK_TOKEN = '0xb0897686c545045aFc77CF20eC7A532E3120E0F1'
//POLYGON_KEY_HASH = '0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da'

contract Pokesaga is ERC721, VRFConsumerBase {
    constructor() public
    VRFConsumerBase(_VRFCoordinator, _LinkToken)
    ERC721("Pokesaga", "PKS") public {}

}

