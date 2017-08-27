import React from 'react';
import {
    Text,
} from 'react-native';
import { connect } from 'react-redux';

import PeopleList from './PeopleList';

const PeopleScene = ({ people }) => (
    <PeopleList people={people} />
);

const mapStateToProps = state => ({
    people: state.getIn(['people', 'peopleList']),
})

const PeopleListContainer = connect(
    mapStateToProps,
)(PeopleList);

export default connect(
    mapStateToProps,
)(PeopleScene);
