import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import LoanSum from './LoanSum';
import { formatEuro } from '../../utils/formatting';

const LoanTotal = ({ sum }) => (
    <View style={styles.loanTotalContainer}>
        <LoanSum sum={sum} additionalStyles={[styles.loanSum]} />
    </View>
);

const styles = StyleSheet.create({
    loanTotalContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
    },
    loanSum: {
        fontSize: 36,
    },
});

export default LoanTotal;
