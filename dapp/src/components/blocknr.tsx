import { ethers } from 'ethers';
import React from 'react';
import { useEffect } from 'react';

export function BlockNr() {
  const provider = ethers.getDefaultProvider()
  const [blockNr, setBlockNr] = React.useState<number>()

  useEffect(() => { 
    getBlockNr()
  })

  async function getBlockNr() { 
    const nr = await provider.getBlockNumber()
    setBlockNr(nr)
  }
  
  if (!blockNr) return <></>

  return (
    <div>
      <p>
        Current Block # {blockNr} {' '} 
        <button onClick={getBlockNr}>Refresh</button>
      </p>
    </div>
  )
}
