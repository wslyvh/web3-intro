import { ethers } from 'ethers';
import React from 'react';
import { useEffect } from 'react';

export function BlockNr() {
  const provider = ethers.getDefaultProvider()
  const [blockNr, setBlockNr] = React.useState<number>()

  useEffect(() => { 
    async function getBlockNr() { 
      const nr = await provider.getBlockNumber()

      setBlockNr(nr)
    }

    getBlockNr()
  })
  
  if (!blockNr) return <></>

  return (
    <div>
        <p>Current Block # {blockNr}</p>
    </div>
  )
}
