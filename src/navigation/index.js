import React from 'react';
//navigation import
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
//screens import
import Splash from '../screens/splash';
import Pyramid from '../screens/pyramid';
import Circle from '../screens/circle';

const Stack = createNativeStackNavigator();
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: true, gestureEnabled: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Pyramid" component={Pyramid} />
        <Stack.Screen name="Circle" component={Circle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
