import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {
    withRouter,
    Link,
} from 'react-router-native';

const isActive = (ownPath, currentPath) => (
    ownPath.substring(1) === currentPath.split('/')[1]
);

const calcLinkStyles = (active) => ([
    styles.link,
    active && styles.linkActive,
]);

const NavBarLink = ({ exact, to, name, location }) => {
    const active = isActive(to, location.pathname);

    return (
        <Link
            exact={exact}
            to={to}
            style={calcLinkStyles(active)}
            underlayColor="white"
        >
            <Text style={styles.linkText}>{name}</Text>
        </Link>
    )
};

NavBarLink.propTypes = {
    exact: PropTypes.bool,
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.any.isRequired,
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

export default withRouter(NavBarLink);
