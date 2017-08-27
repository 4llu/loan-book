import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { formatEuro } from '../../utils/formatting';

const calcLoanSumStyles = (sum) => {
    const res = [styles.loanSum];

    if (sum > 0) {
        res.push(styles.positiveLoanSum);
    }
    else if (sum < 0) {
        res.push(styles.negativeLoanSum);
    }
    return res;
};

const LoanSum = ({ sum, additionalStyles }) => (
    <View>
        <Text style={[...calcLoanSumStyles(sum), ...additionalStyles]}>{formatEuro(sum)}</Text>
    </View>
);

LoanSum.propTypes = {
    sum: PropTypes.number.isRequired,
    additionalStyles: PropTypes.any,
}

const styles = StyleSheet.create({
    loanSum: {
    },
    positiveLoanSum: {
        color: 'green',
    },
    negativeLoanSum: {
        color: 'red',
    },
});

export default LoanSum;
