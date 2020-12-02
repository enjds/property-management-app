import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Client, PropertyList, Expenses, Payments } from '../screens';

const Stack = createStackNavigator();
const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="PropertyList" headerMode="none">
            <Stack.Screen name="PropertyList" component={PropertyList}></Stack.Screen>
            <Stack.Screen name="Expenses" component={Expenses}></Stack.Screen>
            <Stack.Screen name="Payments" component={Payments}></Stack.Screen>
            <Stack.Screen name="Client" options={{headerBackTitleVisible: false}} component={Client}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;