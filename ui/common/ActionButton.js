import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
} from 'react-native';
import {
    withRouter,
    Link,
} from 'react-router-native';
import PropTypes from 'prop-types';

const ActionButton = ({ to, children }) => (
    <View style={styles.wrapper}>
        <ScrollView>
            {children}
        </ScrollView>
        <Link
            to={to}
            style={styles.link}
            underlayColor="white"
        >
            <View style={styles.button}>
                <Image
                    style={styles.image}
                    source={require('../../resources/icons/add.png')}
                />
            </View>
        </Link>
    </View>
);

ActionButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
}

ActionButton.defaultProps = {
    children: <View />,
}

const buttonSize = 60;
const buttonMargin = 24;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    link: {
        position: 'absolute',
        right: buttonMargin,
        bottom: buttonMargin,
    },
    button: {
        width: buttonSize,
        height: buttonSize,
        padding: 8,
        borderRadius: buttonSize / 2,
        backgroundColor: '#F22613',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default withRouter(ActionButton);
