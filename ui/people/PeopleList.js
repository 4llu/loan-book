import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes'
import { ImmutableVirtualizedList } from 'react-native-immutable-list-view';

import PersonLink from './PersonLink';

const PeopleList = ({ people }) => (
    <ImmutableVirtualizedList
        immutableData={people}
        renderItem={({item}) =>
            <PersonLink
                id={item.get('id')}
                name={item.get('name')}
                loanSum={item.get('loanSum')}
            />
        }
        keyExtractor={(item, index) => item.get('id')}
    />
);


PeopleList.propTypes = {
    people: ImmutablePropTypes.list.isRequired,
};

export default PeopleList;
