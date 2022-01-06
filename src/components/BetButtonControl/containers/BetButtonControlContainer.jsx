import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import { roundTo } from 'round-to';

import BetInfo from '../../BetInfo';
import { BetButtonControlContainerPropType } from '../propTypes';
import { MAX_BET_NUMBER, MIN_BET_NUMBER, MIN_BET_AMOUNT } from '../../../constants/diceGame';


class BetButtonControlContainer extends Component {
  state = {
    chance: null,
    payout: null,
  }

  static getDerivedStateFromProps(props) {
    const { betType, betNumber } = props;
    const chance = betType === 'low' ? betNumber : MAX_BET_NUMBER - betNumber;
    const payout = roundTo(MAX_BET_NUMBER / chance, 2);

    return {
      chance,
      payout,
    };
  }

  handleClick = () => {
    const { betType, makeBets } = this.props;

    makeBets(betType, this.state.payout);
  }

  render() {
    const {
      betType,
      betNumber,
      betAmount,
      balance,
      duringBettingProcess,
    } = this.props;
    const { chance, payout } = this.state;
    const incorrectBetNumber = Number.isNaN(betNumber) || betNumber < MIN_BET_NUMBER || betNumber > MAX_BET_NUMBER;
    const incorrectBetAmount = Number.isNaN(betAmount) || betAmount < MIN_BET_AMOUNT || betAmount > balance;

    return (
      <Col>
        <Button
          color="primary"
          disabled={duringBettingProcess || incorrectBetNumber || incorrectBetAmount}
          onClick={this.handleClick}
          block
        >
          {betType === 'low' ? 'Bet Lo' : 'Bet Hi'}
        </Button>
        { !incorrectBetNumber &&
          <BetInfo
            betNumber={betNumber}
            sign={betType === 'low' ? '<=' : '>='}
            chance={chance}
            payout={payout}
          />
        }
      </Col>
    );
  }
}

BetButtonControlContainer.propTypes = BetButtonControlContainerPropType;

export default BetButtonControlContainer;
