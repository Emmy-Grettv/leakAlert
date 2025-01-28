import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {createStackNavigator} from "@react-navigation/native/src/__stubs__/createStackNavigator";
import SignupScreen from "@/pages/auth/SignupScreen";
import LoginScreen from "@/pages/auth/LoginScreen";
import ForgotPasswordScreen from "@/pages/auth/ForgotPasswordScreen";
import VerifyEmailScreen from "@/pages/auth/VerifyEmailScreen";
import CreatePasswordScreen from "@/pages/auth/CreatePasswordScreen";
import ProfileScreen from "@/pages/auth/ProfileScreen";

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
                <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
    </NavigationContainer>
);
};

export default AuthNavigator;