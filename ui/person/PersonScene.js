import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import ActionButton from '../common/ActionButton';
import CopyButton from './CopyButton';
import { ImmutableVirtualizedList } from 'react-native-immutable-list-view';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import LoanTotal from '../common/LoanTotal';

const PersonScene = ({ name, loanSum, infos }) => (
    <ActionButton to="/people">
        <View style={{flex: 1}}>
            <Text style={styles.name}>{name}</Text>
            <LoanTotal sum={loanSum} />
            <View style={styles.container}>
                <Text style={styles.infoHeading}>Info:</Text>
                <ImmutableVirtualizedList
                    immutableData={infos}
                    renderItem={({item}) =>
                        <View style={styles.infoContainer}>
                            <CopyButton text={item} />
                            <Text style={styles.info}>{item}</Text>
                        </View>
                    }
                    keyExtractor={(item, index) => item}
                />
            </View>
        </View>
    </ActionButton>
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
    infoHeading: {
        fontSize: 24,
        marginBottom: 8,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    info: {
        fontSize: 18,
        marginBottom: 4,
    }
});

const mapStateToProps = (state, ownProps) => {
    const person = state.getIn(['people', 'peopleList']).find(person => String(person.get('id')) === ownProps.match.params.id);
    return {
        name: person.get('name'),
        loanSum: person.get('loanSum'),
        infos: person.get('infos'),
    }
};

export default connect(
    mapStateToProps,
)(PersonScene);
