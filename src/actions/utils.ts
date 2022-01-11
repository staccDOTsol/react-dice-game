// @ts-nocheck

import {AnchorWallet} from "@solana/wallet-adapter-react";
import {Connection, PublicKey} from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import {FEES, HOUSE_PROGRAM_ID, PREFIX, TREASURY} from "./constants";

export async function loadHouseProgram(walletWrapper: AnchorWallet) {
  const solConnection = new Connection("https://https://solana--mainnet.datahub.figment.io/apikey/36eb346d92b67d8fd9046b02347b13f1");
  const provider = new anchor.Provider(solConnection, walletWrapper, {
    preflightCommitment: 'confirmed', commitment: 'confirmed'
  });
  const idl = await anchor.Program.fetchIdl(
      HOUSE_PROGRAM_ID,
      provider,
  );

  // const idl = await anchor.Program.fetchIdl(HOUSE_PROGRAM_ID, provider);

  return new anchor.Program(idl, HOUSE_PROGRAM_ID, provider);
}

export async function getHouse(author: PublicKey, operator: PublicKey) {
  // #[account(init, seeds=[PREFIX.as_bytes(), author.key().as_ref(), operator.key().as_ref()], bump=house_bump, space=HOUSE_SIZE, payer=author)]
  // house: Account<'info, House>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(PREFIX),
        author.toBuffer(),
        operator.toBuffer()],
      HOUSE_PROGRAM_ID,
  );
}


export async function getAuthorFeeAccount(house: PublicKey, author: PublicKey, operator: PublicKey) {
  // #[account(mut, seeds=[PREFIX.as_bytes(), FEES.as_bytes(), house.key().as_ref(), author.key.as_ref(), operator.key.as_ref()], bump=author_fee_bump)]
  // author_fee_account: UncheckedAccount<'info>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(PREFIX),
        Buffer.from(FEES),
        house.toBuffer(),
        author.toBuffer(),
        operator.toBuffer(),
      ],
      HOUSE_PROGRAM_ID,
  );
}


export async function getOperatorTreasuryAccount(house: PublicKey, author: PublicKey, operator: PublicKey) {
  // #[account(mut, seeds=[PREFIX.as_bytes(), TREASURY.as_bytes(), house.key().as_ref(), author.key.as_ref(), operator.key.as_ref()], bump=operator_treasury_bump)]
  // operator_treasury: UncheckedAccount<'info>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(PREFIX),
        Buffer.from(TREASURY),
        house.toBuffer(),
        author.toBuffer(),
        operator.toBuffer(),
      ],
      HOUSE_PROGRAM_ID,
  );
}

export async function getOperatorFeeAccount(house: PublicKey, author: PublicKey, operator: PublicKey) {
  // #[account(mut, seeds=[PREFIX.as_bytes(), FEES.as_bytes(), house.key().as_ref(), author.key.as_ref(), operator.key.as_ref()], bump=operator_fee_bump)]
  // operator_fee_account: UncheckedAccount<'info>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(PREFIX),
        Buffer.from(FEES),
        house.toBuffer(),
        author.toBuffer(),
        operator.toBuffer(),
      ],
      HOUSE_PROGRAM_ID,
  );
}

export async function getPlayerAccount(walletKeyPair: AnchorWallet, house: PublicKey, uuid: string) {
  return await anchor.web3.PublicKey.findProgramAddress(
      // @ts-ignore
      [Buffer.from("rng_house"),
        walletKeyPair.publicKey.toBuffer(),
        house.toBuffer(),
        Buffer.from(uuid)],
      HOUSE_PROGRAM_ID
  );
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getUnixTs = () => {
  return new Date().getTime() / 1000;
};