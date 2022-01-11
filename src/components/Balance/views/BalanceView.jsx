import React, { FC, useState, useEffect} from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { web3 } from '@project-serum/anchor';
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST || "https://solana--mainnet.datahub.figment.io/apikey/36eb346d92b67d8fd9046b02347b13f1";
const connection = new web3.Connection(rpcHost);

export let balance;
export let wallet;

export const getBal = async () => {
  if (wallet) {
    // @ts-ignore
  const balance = await connection.getBalance(wallet.publicKey);
  return balance / 10 ** 9;
}
}
export const BalanceView = () => {
  let [balance, setBalance] = useState();
  wallet = useAnchorWallet();
  //const connection = useConnection();
  useEffect(() => {
    (async () => {
      setInterval(async function(){
      if (wallet) {
          // @ts-ignore
        const balance = await connection.getBalance(wallet.publicKey);
      //  console.log(balance / LAMPORTS_PER_SOL);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    }, Math.random() * 2666);
    })();
  }, [wallet, connection]);
  return (
    <FormGroup row>
    <Label style={{"textAlign": "right"}} sm="5" md="5">Balance</Label>
    <Col>
        {wallet && <h4>{(balance || "Loading...").toLocaleString()} SOL</h4>
   
    }
    </Col>
  </FormGroup>         
  );
}

export default BalanceView;
