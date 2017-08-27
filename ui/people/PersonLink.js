import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Link } from 'react-router-native';
import PropTypes from 'prop-types';

import { formatEuro } from '../../utils/format';

const calcLoanedStyles = (loaned) => {
    if (loaned > 0) {
        return styles.positiveLoaned;
    }
    else if (loaned < 0) {
        return styles.negativeLoaned;
    }
    return null;
};

const PersonLink = ({ id, name, loaned }) => (
    <Link to={`/people/${id}`}>
        <View style={styles.linkContainer}>
            <Text style={[styles.linkName, styles.linkText]}>{name}</Text>
            <Text style={[styles.linkLoaned, styles.linkText, calcLoanedStyles(loaned)]}>{formatEuro(loaned)}</Text>
        </View>
    </Link>
);

PersonLink.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    loaned: PropTypes.number.isRequired,
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
    positiveLoaned: {
        color: 'green',
    },
    negativeLoaned: {
        color: 'red',
    },
});

export default PersonLink;
