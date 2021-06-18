import { Balance } from './components/balance';
import { BlockNr } from './components/blocknr';

export function App() {
  return (
    <div>
      <header>
        <h1>Introduction to Web3</h1>
      </header>
      <div>
        <p>Building on the blockchain</p>
      </div>

      <div>
        <BlockNr />
      </div>

      <div>
        <Balance />
      </div>
    </div>
  );
}
