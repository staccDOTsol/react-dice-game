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
    const network = WalletAdapterNetwork.Mainnet;

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
                 <h1>  We're growers not showers <br />

We test in prod </h1>
<h3>
1. choose a number
<br />2. select whether u think the provably fair entirely onchain number rolled will be higher or lower than ur lucky number
<br />3. automate
<br />4. may the odds be ever in your favor </h3><p>
<br /><br />this is a proof-of-concept and work-in-progress, some powerhouse projects are working on much prettier implementations - choosing a custom fee to charge (by default there's 0 house edge) then the dev takes 1/15 of whatever that fee is
<br />
coinflp devnet: https://fair3d.me </p>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <Container>
                        <Balance />
                        <BetAmount />
                        <BetNumber />
                        <NumberOfBets />
                        <ResultArea />
                        <Table />
                        <ButtonsPanel />
                        <ProbablyFairHash />

                        </Container>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default AppView;