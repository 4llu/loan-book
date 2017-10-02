import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import LoanSum from '../common/LoanSum';
import { PropTypes } from 'prop-types';

const CopyButton = ({ heading, name, sum }) => (
    <View>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.row}>
            <Text style={styles.name}>{name}</Text>
            <LoanSum sum={sum}  additionalStyles={styles.name} />
        </View>
    </View>
);

CopyButton.propTypes = {
    heading: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        marginBottom: 8,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    name: {
        fontSize: 18,
    },
});

export default CopyButton;
