import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    Link,
} from 'react-router-native';

import LoanTotal from './LoanTotal';

export default class HomeScene extends React.Component {
    render() {
        return (
            <View>
                <LoanTotal />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
