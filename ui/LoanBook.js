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
import DashboardScene from './dashboard';
import PeopleScene from './people';
import PersonScene from './person';

export default class LoanBook extends React.Component {
    render() {
        return (
            <ReduxProvider>
                <NativeRouter>
                    <View>
                        <Navbar />
                        <Route exact path="/" component={DashboardScene} />
                        <Route exact path="/people" component={PeopleScene} />
                        <Route path="/people/:id" component={PersonScene} />
                    </View>
                </NativeRouter>
            </ReduxProvider>
        );
    }
}
