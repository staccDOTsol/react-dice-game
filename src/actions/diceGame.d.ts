import { PublicKey } from '@solana/web3.js';
export declare const HOUSE_PROGRAM_ID: PublicKey;
export declare const PREFIX = "rng_house";
export declare const FEES = "fees";
export declare const TREASURY = "treasury";
export declare const jare = "4tui4yfA6MNgLhjXmKBATrPvEUGseEeqQrqAyVHintUQ";
export declare const author: PublicKey;
export declare const house: PublicKey;
export declare function getFreeCredits(): {
    payload: {};
};
export declare function setAutoBet(autoBet: any): {
    type: string;
    payload: {
        autoBet: any;
    };
};
export declare function setBetAmount(betAmount: any): {
    type: string;
    payload: {
        betAmount: any;
    };
};
export declare function setBetNumber(betNumber: any): {
    type: string;
    payload: {
        betNumber: any;
    };
};
export declare function setNumberOfBets(numberOfBets: any): {
    type: string;
    payload: {
        numberOfBets: any;
    };
};
export declare function startMakeBets(): {
    type: string;
};
export declare function finishMakeBets({ win, prevResultNumber, resultNumber, balance, history, duringBettingProcess }: {
    win: any;
    prevResultNumber: any;
    resultNumber: any;
    balance: any;
    history: any;
    duringBettingProcess: any;
}): {
    type: string;
    payload: {
        win: any;
        prevResultNumber: any;
        resultNumber: any;
        balance: any;
        history: any;
        duringBettingProcess: any;
    };
};
export declare function makeBets(betType: any, payout: any): (dispatch: any, getState: any) => Promise<void>;
export declare function setCustomStrategyBool(customStrategyBool: any): {
    type: string;
    payload: {
        customStrategyBool: any;
    };
};
export declare function setCustomStrategy(customStrategy: any): {
    type: string;
    payload: {
        customStrategy: any;
    };
};
export declare function setMartingaleStrategy(martingaleStrategy: any): {
    type: string;
    payload: {
        martingaleStrategy: any;
    };
};
