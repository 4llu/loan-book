import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const PersonScene = ({ name }) => (
    <View>
        <Text style={styles.name}>{name}</Text>
    </View>
);

PersonScene.propTypes = {
    name: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        textAlign: 'center',
        margin: 8,
    }
});

const mapStateToProps = (state, ownProps) => {
    const person = state.getIn(['people', 'peopleList']).find(person => String(person.get('id')) === ownProps.match.params.id);
    return {
        name: person.get('name'),
    }
};

export default connect(
    mapStateToProps,
)(PersonScene);
