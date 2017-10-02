import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    Clipboard,
} from 'react-native';
import { PropTypes } from 'prop-types';

const CopyButton = ({ text }) => (
    <TouchableHighlight
        onPress={() => Clipboard.setString(text)}
        activeOpacity={0.2}
        underlayColor={'white'}
    >
        <Image style={styles.image} source={require('../../resources/icons/copy.png')} />
    </TouchableHighlight>
);

CopyButton.propTypes = {
    text: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    image: {
        height: 22,
        width: 22,
        marginRight: 12,
    }
});

export default CopyButton;
