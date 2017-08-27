import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { withRouter } from 'react-router-native';

import NavBarLink from './NavBarLink';

const NavBar = () => {
    return (
        <View style={styles.header}>
            <NavBarLink
                exact={true}
                to="/"
                name="Dashboard"
            />
            <NavBarLink
                exact={true}
                to="/people"
                name="People"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
});

export default withRouter(NavBar);
