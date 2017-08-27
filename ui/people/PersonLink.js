import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Link } from 'react-router-native';
import PropTypes from 'prop-types';

import LoanSum from '../common/LoanSum';

import { formatEuro } from '../../utils/formatting';

const PersonLink = ({ id, name, loanSum }) => (
    <Link
        to={`/people/${id}`}
        underlayColor="#ecf0f1"
    >
        <View style={styles.linkContainer}>
            <Text style={[styles.linkName, styles.linkText]}>{name}</Text>
            <LoanSum sum={loanSum} additionalStyles={[styles.linkText]} />
        </View>
    </Link>
);

PersonLink.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    loanSum: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    linkText: {
        fontSize: 18,
    },
    linkName: {
        flex: 1,
    },
});

export default PersonLink;
