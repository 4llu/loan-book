import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    NativeRouter,
    Route,
} from 'react-router-native';

import ReduxProvider from '../redux';

import Navbar from './navBar';
import HomeScene from './home';
import PeopleScene from './people';
import PersonScene from './person';
import LoansScene from './loans';

export default class LoanBook extends React.Component {
    render() {
        return (
            <ReduxProvider>
                <NativeRouter>
                    <View>
                        <Navbar />
                        <Route exact path="/" component={HomeScene} />
                        <Route exact path="/people" component={PeopleScene} />
                        <Route path="/people/:id" component={PersonScene} />
                        <Route path="/loans" component={LoansScene} />
                    </View>
                </NativeRouter>
            </ReduxProvider>
        );
    }
}
