import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


// Screens
import Splash from './src/Splash'
import OnboardingScreen from './src/OnboardingScreen'
import LoginScreen from './src/LoginScreen'


const Stack = createStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false
        }}
      >
        {/* SPLASH SCREEN */}
        <Stack.Screen
          name="Splash" 
          component={Splash}
        />

        {/* ONBOARDING SCREEN */}
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        />

        {/* LOGIN SCREEN */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App