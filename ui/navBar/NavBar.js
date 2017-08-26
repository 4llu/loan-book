import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import NavBarLink from './NavBarLink';

const NavBar = ({}) => (
    <View style={styles.header}>
        <NavBarLink
            exact={true}
            to="/"
            name="Home"
        />
        <NavBarLink
            exact={true}
            to="/people"
            name="People"
        />
        <NavBarLink
            exact={true}
            to="/loans"
            name="Loans"
        />
    </View>
);

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default NavBar;
