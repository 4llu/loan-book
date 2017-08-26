import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {
    Link,
} from 'react-router-native';


const NavBarLink = ({ exact, to, name }) => (
    <Link
        exact={exact}
        to={to}
        style={styles.link}
        activeStyle={styles.linkActive}
        underlayColor="white"
    >
        <Text style={styles.linkText}>{name}</Text>
    </Link>
);

NavBarLink.propTypes = {
    exact: PropTypes.bool,
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

NavBarLink.defaultProps = {
    exact: false,
}

const styles = StyleSheet.create({
    link: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#bdc3c7',
        borderBottomWidth: 2,
    },
    linkActive: {
        borderBottomColor: '#34495e',
        borderBottomWidth: 2,
    },
    linkText: {
        color: '#bdc3c7',
    },
});

export default NavBarLink;
