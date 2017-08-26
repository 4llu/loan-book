import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    NativeRouter,
    Route,
} from 'react-router-native';

import Navbar from './navBar';
import HomeScene from './home';
import PeopleScene from './people';
import LoansScene from './loans';

export default class LoanBook extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View>
                    <Navbar />

                    <Route exact path="/" component={HomeScene} />
                    <Route path="/people" component={PeopleScene} />
                    <Route path="/loans" component={LoansScene} />
                </View>
            </NativeRouter>
        );
    }
}
