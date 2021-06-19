import { ethers } from 'ethers';
import React, { FormEvent } from 'react';
import TokenArtifact from "../assets/contracts/Token.json";

interface Token {
  name: string
  symbol: string
  supply: string
  owner: string
}

export function TokenView() {
  const provider = ethers.getDefaultProvider('rinkeby')
  const [address, setAddress] = React.useState('')
  const [error, setError] = React.useState('')
  const [token, setToken] = React.useState<Token>()

  async function getToken(event: FormEvent) {
    event.preventDefault()

    const tokenContract = new ethers.Contract(address, TokenArtifact.abi, provider)
    try {
      const name = await tokenContract.name()
      const symbol = await tokenContract.symbol()
      const supply = await tokenContract.totalSupply()
      const owner = await tokenContract.owner()

      setToken({ 
        name,
        symbol,
        supply: supply.toString(),
        owner
      })
      setError('')
    }
    catch (er) {
      console.error(er)
      setToken(undefined)
      setError('Unable to fetch token info..')
    }
  }

  return (
    <div>
        <form onSubmit={getToken}>
            <label>
              Enter a Token contract address: {' '} 
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Token contract address..'  />
            </label>

            <input type="submit" value="Submit" />
        </form>

        {error && <p>{error}</p>}

        {token && <div>
            <p>Name: {token.name}</p>
            <p>Symbol: {token.symbol}</p>
            <p>Supply: {token.supply}</p>
            <p>Owner: {token.owner}</p>
          </div>
        }
        <br/>
    </div>
  );
}
