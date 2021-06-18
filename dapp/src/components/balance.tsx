import { ethers } from 'ethers';
import React, { FormEvent } from 'react';

export function Balance() {
  const provider = ethers.getDefaultProvider()
  const [address, setAddress] = React.useState('')
  const [balance, setBalance] = React.useState('')

  async function getBalance(event: FormEvent) {
    event.preventDefault()

    const balance = await provider.getBalance(address)
    setBalance(ethers.utils.formatEther(balance))
  }

  return (
    <div>
        <form onSubmit={getBalance}>
            <label>
              Name:
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>

            <input type="submit" value="Submit" />
        </form>

        {balance && <p>Balance: {balance}</p>}
    </div>
  );
}
