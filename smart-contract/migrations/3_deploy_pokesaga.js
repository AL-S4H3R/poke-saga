const Pokesaga = artifacts.require('Pokesaga')

module.exports = deployer => {
  deployer.deploy(Pokesaga)
}
