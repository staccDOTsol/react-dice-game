import PropTypes from 'prop-types';
export declare const CustomStrategyDetailContainerPropType: {
    autoBet: PropTypes.Requireable<boolean>;
    customStrategyBool: PropTypes.Requireable<boolean>;
    setCustomStrategy: PropTypes.Validator<(...args: any[]) => any>;
    martingaleStrategy: PropTypes.Requireable<boolean>;
    customStrategy: PropTypes.Validator<object>;
};
