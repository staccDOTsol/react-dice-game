// @ts-nocheck

import {AnchorWallet} from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import {PublicKey, SystemProgram, TransactionInstruction, Connection} from "@solana/web3.js";
import {getPlayerAccount, loadHouseProgram, sleep} from "./utils";
import {house, jare } from "./constants";

export const initializeCoin = async (walletKeyPair: AnchorWallet, house: PublicKey, uuid: string): Promise<TransactionInstruction> => {
  const puppetMaster = await loadHouseProgram(walletKeyPair);
  const [newPuppetAccount, newPuppetAccountBump] = await getPlayerAccount(walletKeyPair, house, uuid);
 
 let accounts = {
  puppet: newPuppetAccount,
  user: walletKeyPair.publicKey,
  systemProgram: SystemProgram.programId,
  recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
  house: house,
}
 
for (var a in accounts){
  try{ 
  // @ts-ignore
//  console.log(a + ': ' + accounts[a].toBase58())
  }
  catch (err){
    
  }
}

 
  return puppetMaster.instruction.initialize(
      newPuppetAccountBump,
      uuid, {
    accounts: {
      puppet: newPuppetAccount,
      user: walletKeyPair.publicKey,
      systemProgram: SystemProgram.programId,
      recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
      house: house,
    },
    signers: [],
  });
};

export const revealCoin = async (walletKeyPair: AnchorWallet, jare: PublicKey, uuid: string): Promise<TransactionInstruction> => {
  const [newPuppetAccount, newPuppetAccountBump] = await getPlayerAccount(walletKeyPair, house, uuid!);
  let puppetMaster = await loadHouseProgram(walletKeyPair);
  const houseObj = await puppetMaster.account.house.fetch(house);
  
  let accounts =  {
    // @ts-ignore
    author: houseObj.author,
    // @ts-ignore
    authorFeeAccount: houseObj.authorFeeAccount,
    // @ts-ignore
    operator: houseObj.operator,
    // @ts-ignore
    authorFeeAccount: houseObj.authorFeeAccount,
    // @ts-ignore
    operatorFeeAccount: houseObj.operatorFeeAccount,
    house: house,
    puppet: newPuppetAccount,
    // @ts-ignore
    operatorTreasury: houseObj.operatorTreasury,
    recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
    jare: jare,
    user: walletKeyPair.publicKey,
    systemProgram: SystemProgram.programId,
  }
 
for (var a in accounts){
  try{ 
    // @ts-ignore
   // console.log(a + ': ' + accounts[a].toBase58())
    }
    catch (err){
      
    }
}

 
  
 return puppetMaster.instruction.uncover({
          accounts: {
            // @ts-ignore
            author: houseObj.author,
            // @ts-ignore
            authorFeeAccount: houseObj.authorFeeAccount,
            // @ts-ignore
            operator: houseObj.operator,
            // @ts-ignore
            authorFeeAccount: houseObj.authorFeeAccount,
            // @ts-ignore
            operatorFeeAccount: houseObj.operatorFeeAccount,
            house: house,
            puppet: newPuppetAccount,
            // @ts-ignore
            operatorTreasury: houseObj.operatorTreasury,
            recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
            jare: jare,
            user: walletKeyPair.publicKey,
            systemProgram: SystemProgram.programId,
          }, remainingAccounts: [
            {
              // @ts-ignore
              pubkey: houseObj.operatorTreasury,
              isSigner: false,
              isWritable: true,
            }
          ],
          signers: [],

        },
    );
    
}

export const mintCoin = async (walletKeyPair: AnchorWallet, bet: number, bethigh: boolean, thenum: number, uuid: string): Promise<TransactionInstruction> => {
  const [newPuppetAccount, newPuppetAccountBump] = await getPlayerAccount(walletKeyPair, house, uuid!);
  const puppetMaster = await loadHouseProgram(walletKeyPair);
  const houseObj = await puppetMaster.account.house.fetch(house);
 
 let accounts = {
  // @ts-ignore
  author: houseObj.author,
  // @ts-ignore
  authorFeeAccount: houseObj.authorFeeAccount,
  // @ts-ignore
  operator: houseObj.operator,
  // @ts-ignore
  authorFeeAccount: houseObj.authorFeeAccount,
  // @ts-ignore
  operatorFeeAccount: houseObj.operatorFeeAccount,
  // @ts-ignore
  house: house,
  // @ts-ignore
  puppet: newPuppetAccount,
  // @ts-ignore
  operatorTreasury: houseObj.operatorTreasury,
  recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
  jare: jare,
  // @ts-ignore
  user: walletKeyPair.publicKey,
  systemProgram: SystemProgram.programId,
}
for (var a in accounts){
  try{ 
  // @ts-ignore
//  console.log(a + ': ' + accounts[a].toBase58())
  }
  catch (err){
    
  }
}


  return puppetMaster.instruction.pullStrings(new anchor.BN(bet * 10 ** 9), new anchor.BN(1), bethigh, new anchor.BN(thenum),{
        accounts: {
          // @ts-ignore
          author: houseObj.author,
          // @ts-ignore
          authorFeeAccount: houseObj.authorFeeAccount,
          // @ts-ignore
          operator: houseObj.operator,
          // @ts-ignore
          authorFeeAccount: houseObj.authorFeeAccount,
          // @ts-ignore
          operatorFeeAccount: houseObj.operatorFeeAccount,
          // @ts-ignore
          house: house,
          // @ts-ignore
          puppet: newPuppetAccount,
          // @ts-ignore
          operatorTreasury: houseObj.operatorTreasury,
          recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
          jare: jare,
          // @ts-ignore
          user: walletKeyPair.publicKey,
          systemProgram: SystemProgram.programId,
        }, remainingAccounts: [
          {
            // @ts-ignore
            pubkey: houseObj.operatorTreasury,
            isSigner: false,
            isWritable: true,
          }
        ],
        signers: [],
      },
  );
}