import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import DashboardEntry from './DashboardEntry';
import {
    Link,
} from 'react-router-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoanTotal from '../common/LoanTotal';

const DashboardScene = ({ loanSum, owesMost, mostOwed, mostRecent }) => {

    const showOwesMost = owesMost && owesMost.get('loanSum') > 0;
    const showMostOwed = mostOwed && mostOwed.get('loanSum') < 0;

    return (
        <View>
            <View style={styles.container}>
                <Text style={{fontSize: 24}}>Total:</Text>
            </View>
            <LoanTotal sum={loanSum} />
            <View style={styles.container}>
            {
                showOwesMost && (
                    <DashboardEntry
                    heading='Owes mosts:'
                    name={owesMost.get('name')}
                    sum={owesMost.get('loanSum')}
                    />
                )
            }
            {
                showMostOwed && (
                    <DashboardEntry
                    heading='Most owed:'
                    name={mostOwed.get('name')}
                    sum={mostOwed.get('loanSum')}
                    />
                )
            }
            {
                mostRecent && (
                    <DashboardEntry
                    heading='Most recent:'
                    name={mostRecent.get('name')}
                    sum={mostRecent.get('loanSum')}
                    />
                )
            }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    heading: {
        fontSize: 24,
        marginBottom: 8,
    },
});

DashboardScene.propTypes = {
    loanSum: PropTypes.number.isRequired,
    owesMost: PropTypes.any,
    mostOwed: PropTypes.any,
    mostRecent: PropTypes.any,
}

const mapStateToProps = state => ({
        loanSum: state.getIn(['people', 'peopleList']).reduce((sum, person) => sum + person.get('loanSum'), 0),
        owesMost: state.getIn(['people', 'peopleList']).reduce((a, b) => a.get('loanSum') > b.get('loanSum') ? a : b),
        mostOwed: state.getIn(['people', 'peopleList']).reduce((a, b) => a.get('loanSum') < b.get('loanSum') ? a : b),
        mostRecent: state.getIn(['people', 'peopleList']).find((person) => person.get('id') === state.getIn(['people', 'mostRecent'])),
});

export default connect(
    mapStateToProps,
)(DashboardScene);
