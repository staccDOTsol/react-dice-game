import { roundTo } from 'round-to';

import {
  FINISH_MAKE_BETS,
  START_MAKE_BETS,
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
  SET_NUMBER_OF_BETS,
  SET_AUTO_BET,
  GET_FREE_CREDITS,
  SET_MARTINGALE_STRATEGY,
} from '../actionTypes/diceGame';
import { getBetNumber } from '../utils';

import { PublicKey } from '@solana/web3.js';
import React, {useEffect, useState} from "react";
import {Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";
import {useAnchorWallet} from "@solana/wallet-adapter-react";
import {initializeCoin, mintCoin, revealCoin} from "./dice-instructions";
import {sendTransactionWithRetryWithKeypair} from "./transactions";
import {styled} from '@mui/material/styles';
import {WalletDialogButton} from "@solana/wallet-adapter-material-ui";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Button, FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import axios from "axios";

const ConnectButton = styled(WalletDialogButton)``;
const solConnection = new Connection("https://api.devnet.solana.com");
// @ts-ignore
const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const HOUSE_PROGRAM_ID = new PublicKey("DyLnp87en5buc6epv1s9RrhveqZoNa1n9vN5YpDmGhQh");
export const PREFIX = 'rng_house';
export const FEES = "fees";
export const TREASURY = 'treasury';
export const jare = "4tui4yfA6MNgLhjXmKBATrPvEUGseEeqQrqAyVHintUQ";
export const author = new PublicKey(jare);
export const house = new PublicKey("ASTu9TrWQGpD2MXMHrevCGQ9ygRbhKQFFWydTzn5pSvr8vFRNZkFUkQL693SzAZ2533f871WUP3RxkW9y6nLGP9L");


export function getFreeCredits() {
  return {
    payload: {  },
  };
}

export function setAutoBet(autoBet) {
  return {
    type: SET_AUTO_BET,
    payload: { autoBet },
  };
}

export function setBetAmount(betAmount) {
  return {
    type: SET_BET_AMOUNT,
    payload: { betAmount },
  };
}

export function setBetNumber(betNumber) {
  return {
    type: SET_BET_NUMBER,
    payload: { betNumber },
  };
}

export function setNumberOfBets(numberOfBets) {
  return {
    type: SET_NUMBER_OF_BETS,
    payload: { numberOfBets },
  };
}

export function startMakeBets() {
  return {
    type: START_MAKE_BETS,
  };
}

export function finishMakeBets({
  win, prevResultNumber, resultNumber, balance, history,
}) {
  return {
    type: FINISH_MAKE_BETS,
    payload: {
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
    },
  };
}

export function makeBets(betType, payout) {
  return async function (dispatch, getState) {
    const wallet = useAnchorWallet();
    const [uuid, setUuid] = useState<string | null>(null);
    const [msg, setMsg] = useState<string>("");
    const localUuid = uuidv4().slice(0, 8);
    
    
    const state = getState();
    const {
      betNumber,
      autoBet,
      numberOfBets,
      martingaleStrategy,
    } = state;
    let { betAmount, resultNumber, balance } = state;
    let win;
    let prevResultNumber;
    const realNumberOfBets = autoBet ? numberOfBets : 1;
    const history = [];

    dispatch(startMakeBets());
    if (uuid == null){
      setUuid(localUuid);
      instructions.push(await initializeCoin(wallet, house, localUuid));
      
      }
    for (let i = 0; i < realNumberOfBets; i++) {
      if (betAmount > balance) {
        break;
      }
      let hiorlow = true;
      if (betType == 'low'){
        hiorlow = false;
      }
      instructions.push(await mintCoin(wallet, betAmount, hiorlow, betNumber, localUuid));
      const txn = await sendTransactionWithRetryWithKeypair(solConnection, wallet, instructions, [], 'singleGossip', false);
  
      const resp = await revealCoin(wallet, jare, localUuid)
  
      alert('Rolled a ' + resp.toString() + '!');
      resultNumber = parseInt(resp);
      win = betType === 'low' ? resultNumber <= betNumber : resultNumber >= betNumber;
      balance = win ? balance + (betAmount * (payout - 1)) : balance - betAmount;

      if (autoBet) {
        history.push({
          win,
          betAmount,
          resultNumber,
          betNumber: i + 1,
          balance: roundTo(balance, 2),
        });
      }

      if (!win && autoBet && martingaleStrategy) {
        betAmount *= 2;
      }

      prevResultNumber = resultNumber;
      resultNumber = getBetNumber();
    }

    dispatch(finishMakeBets({
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
    }));
  };
}

export function setMartingaleStrategy(martingaleStrategy) {
  return {
    type: SET_MARTINGALE_STRATEGY,
    payload: { martingaleStrategy },
  };
}
