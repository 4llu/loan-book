import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    Link,
} from 'react-router-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoanTotal from '../common/LoanTotal';

const DashboardScene = ({ loanSum }) => (
    <View>
        <LoanTotal sum={loanSum} />
    </View>
);

const styles = StyleSheet.create({

});

DashboardScene.propTypes = {
    loanSum: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
        loanSum: state.getIn(['people', 'peopleList']).reduce((sum, person) => sum + person.get('loanSum'), 0),
});

export default connect(
    mapStateToProps,
)(DashboardScene);
