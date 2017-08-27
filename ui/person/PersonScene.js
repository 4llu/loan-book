import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import LoanTotal from '../common/LoanTotal';

const PersonScene = ({ name, loanSum }) => (
    <View>
        <Text style={styles.name}>{name}</Text>
        <LoanTotal sum={loanSum} />
        <View style={styles.container}>
            <Text style={styles.text}>Account number:</Text>
            <Text style={styles.text}>FI26 1234 2345 34</Text>
        </View>
    </View>
);

PersonScene.propTypes = {
    name: PropTypes.string.isRequired,
    loanSum: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        textAlign: 'center',
        margin: 8,
    },
    container: {
        margin: 16,
    },
    text: {
        fontSize: 24,
    }
});

const mapStateToProps = (state, ownProps) => {
    const person = state.getIn(['people', 'peopleList']).find(person => String(person.get('id')) === ownProps.match.params.id);
    return {
        name: person.get('name'),
        loanSum: person.get('loanSum'),
    }
};

export default connect(
    mapStateToProps,
)(PersonScene);
