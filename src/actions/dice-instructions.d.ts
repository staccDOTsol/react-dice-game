import { AnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
export declare const initializeCoin: (walletKeyPair: AnchorWallet, house: PublicKey, uuid: string) => Promise<TransactionInstruction>;
export declare const revealCoin: (walletKeyPair: AnchorWallet, jare: PublicKey, uuid: string) => Promise<TransactionInstruction>;
export declare const mintCoin: (walletKeyPair: AnchorWallet, bet: number, bethigh: boolean, thenum: number, uuid: string) => Promise<TransactionInstruction>;
