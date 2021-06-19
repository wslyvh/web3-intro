import { ethers } from 'ethers';
import React, { FormEvent } from 'react';

export function Balance() {
  const provider = ethers.getDefaultProvider()
  const [address, setAddress] = React.useState('')
  const [error, setError] = React.useState('')
  const [balance, setBalance] = React.useState('')

  async function getBalance(event: FormEvent) {
    event.preventDefault()

    try { 
      const balance = await provider.getBalance(address)
      setBalance(ethers.utils.formatEther(balance))
      setError('')
    }
    catch (er) {
      console.error(er)
      setBalance('')
      setError('Unable to fetch account balance..')
    }
  }

  return (
    <div>
        <form onSubmit={getBalance}>
            <label>
              Enter your Ethereum address: {' '} 
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Ethereum address..' />
            </label>

            <input type="submit" value="Submit" />
        </form>

        {error && <p>{error}</p>}

        {balance && <p>Balance: {balance}</p>}
        <br/>
    </div>
  );
}
