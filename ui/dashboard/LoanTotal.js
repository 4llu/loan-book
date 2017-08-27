import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const LoanTotal = ({}) => (
    <View style={styles.loanTotalContainer}>
        <Text style={styles.loanTotal}>+150,00€</Text>
    </View>
);

const styles = StyleSheet.create({
    loanTotalContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
    },
    loanTotal: {
        fontSize: 36,
        color: '#2ecc71',
    },
});

export default LoanTotal;
