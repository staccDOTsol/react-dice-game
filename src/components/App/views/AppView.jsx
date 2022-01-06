import React, { FC, useMemo } from 'react';
import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Balance from '../../Balance';
import BetAmount from '../../BetAmount';
import BetNumber from '../../BetNumber';
import ButtonsPanel from '../../ButtonsPanel';
import ProbablyFairHash from '../../ProbablyFairHash';
import ResultArea from '../../ResultArea';
import NumberOfBets from '../../NumberOfBets';
import Table from '../../Table';

import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
export const AppView = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter(),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            new SolletWalletAdapter({ network }),
            new SolletExtensionWalletAdapter({ network }),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <Container>
                        <Balance />
                        <BetAmount />
                        <BetNumber />
                        <NumberOfBets />
                        <ButtonsPanel />
                        <ProbablyFairHash />
                        <ResultArea />
                        <div>Hi :) This is a work-in-progress that demonstrates the iterative possibilities on our closed-source Random Number Generator (RND). 
                        < br /> The RNG is different than some others you might see on Solana, as it relies on truly random data which is verified as a system account, and a commit (along with your bet) and reveal mechanism,
                        < br /> which is actually wrapped up by magic into a single-txn experience for the user. Note that our original coinflip POC at https://fair3d.me 
                        < br /> is still functional - but here on $SOLRoll you'll see the RNG pick a random result 100-side die "_" 
                        < br /> The OGs will understand the implication of mix-and-match strategies, but we'll start with a handy Martingale strat :)
                        < br /> Anyways, at preset my rust program is facing some signer/writer privilege woes, but I thought y'all might like this sneak peek...
                        < br /> Signed, 
                        < br /> @STACCart
                    </div>
                        <Table />

                        </Container>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default AppView;