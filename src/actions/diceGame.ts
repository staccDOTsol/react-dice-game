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
  SET_CUSTOM_STRATEGY,
SET_CUSTOM_STRATEGY_BOOL
} from '../actionTypes/diceGame';

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
import { wallet, getBal } from '../components/Balance/views/BalanceView';
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
export const house = new PublicKey("CUk1bjhnXppSFMHyafjyejhC8TBx8Gbw1PAGGaQwK1mQ");


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
  win, prevResultNumber, resultNumber, balance, history, duringBettingProcess
}) {
  return {
    type: FINISH_MAKE_BETS,
    payload: {
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
      duringBettingProcess
    },
  };
}
let localUuid = null;
export function makeBets(betType, payout) {
  return async function (dispatch, getState) {
    
    
    const state = getState();
    const {
      betNumber,
      autoBet,
      numberOfBets,
      martingaleStrategy,
      customStrategyBool,
      customStrategy
    } = state;
    let { betAmount, resultNumber } = state;
    let ogBet = betAmount;
    let win;
    let prevResultNumber;
    const realNumberOfBets = autoBet ? numberOfBets : 1;
    const history = [];
    let instructions = [];
    dispatch(startMakeBets());
    if (localUuid == null){
      localUuid = uuidv4().slice(0, 8);
      // @ts-ignore
      instructions.push(await initializeCoin(wallet, house, localUuid));
      
      }
let       balance = await getBal();
    for (let i = 0; i < realNumberOfBets; i++) {
      try {
      if (betAmount > balance) {
        alert('Low balance!')
        let duringBettingProcess = false;
    dispatch(finishMakeBets({
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
      duringBettingProcess
    }));
        break;
      }
      let hiorlow = true;
      if (betType == 'low'){
        hiorlow = false;
      }
      // @ts-ignore
      instructions.push(await mintCoin(wallet, betAmount, hiorlow, betNumber, localUuid));
      const txn = await sendTransactionWithRetryWithKeypair(solConnection, wallet, instructions, [], 'singleGossip', false);
      
      
      // @ts-ignore
      const resp =await sendTransactionWithRetryWithKeypair(solConnection, wallet, [await revealCoin(wallet, new PublicKey(jare), localUuid)], [], 'singleGossip', false);
      //console.log(resp.txid);

      const txlog = await solConnection.getParsedConfirmedTransaction(resp.txid, "confirmed")
      //console.log(txlog.meta.logMessages)
      prevResultNumber = resultNumber;
      //alert('Rolled a ' + txlog.meta.logMessages[4].replace("Program log: ", "") + '!');
      // @ts-ignore
      resultNumber = parseInt(txlog.meta.logMessages[4].replace("Program log: ", "")) || parseInt(txlog.meta.logMessages[2].replace("Program log: ", ""));
      win = betType === 'low' ? resultNumber <= betNumber : resultNumber >= betNumber;
      //balance = win ? balance + (betAmount * (payout - 1)) : balance - betAmount;
      balance = await getBal();
      //console.log(balance);
      if (autoBet) {
        history.push({
          // @ts-ignore
          win,
          // @ts-ignore
          betAmount,
          // @ts-ignore
          resultNumber,
          // @ts-ignore
          betNumber: i + 1,
          // @ts-ignore
          balance: balance,
        });
      }

      if (!win && autoBet && martingaleStrategy) {
        betAmount *= 2;
      }
      if (win && autoBet && martingaleStrategy) {
        betAmount = ogBet;
      }
      if (autoBet && customStrategyBool){
        let which = 'lose';
        if (win){
          which = 'win';
        }
        if (customStrategy[which].reset){
          console.log('reset ' + which)
          betAmount = ogBet;
        }
        else {
try{
  // @ts-ignore
        betAmount += parseFloat(customStrategy[which].incn);
}catch(err){

}
try{
  // @ts-ignore
  (parseFloat(customStrategy[which].incp) > 0 && parseFloat(customStrategy[which].incp) < 100) ?  betAmount = betAmount *( 1 + (parseFloat(customStrategy[which].incp) / 100)) : betAmount = betAmount
      }catch(err){
  
      }
      try{
        // @ts-ignore
        betAmount -= parseFloat(customStrategy[which].decn);
      }catch(err){
  
      }
      try{
        // @ts-ignore
        ((parseFloat(customStrategy[which].decp) > 0 && parseFloat(customStrategy[which].decp) < 100)) ? betAmount = betAmount / ( 1 + (parseFloat(customStrategy[which].decp)   / 100)) : betAmount = betAmount
      }catch(err){
  
      } 
      }
      }
      if (betAmount <= 0 || betAmount > balance){
        betAmount = ogBet
      }
      console.log(betAmount)
      if (i < realNumberOfBets - 1){
        let duringBettingProcess = true;
    dispatch(finishMakeBets({
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
      duringBettingProcess
    }));
  }
  else{
    let duringBettingProcess = false;
    dispatch(finishMakeBets({
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
      duringBettingProcess
    }));
  }
    instructions = [];
}
catch (err){
  alert('error! check balance and console logs...')
  let duringBettingProcess = false;
    dispatch(finishMakeBets({
      win,
      prevResultNumber,
      resultNumber,
      balance,
      history,
      duringBettingProcess
    }));
  console.log(err)
  break
}
  }
    
  };
}
export function setCustomStrategyBool(customStrategyBool) {
  return {
    type: SET_CUSTOM_STRATEGY_BOOL,
    payload: { customStrategyBool },
  };
}
export function setCustomStrategy(customStrategy) {
  return {
    type: SET_CUSTOM_STRATEGY,
    payload: { customStrategy },
  };
}

export function setMartingaleStrategy(martingaleStrategy) {
  return {
    type: SET_MARTINGALE_STRATEGY,
    payload: { martingaleStrategy },
  };
}
