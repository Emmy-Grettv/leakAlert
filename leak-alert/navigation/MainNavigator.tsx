import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "@/pages/HomeScreen";
import OnBoarding from "@/pages/OnBoarding";
import AuthNavigator from "@/navigation/AuthNavigator";
import ProfileScreen from "@/pages/auth/ProfileScreen";
import ProtectedRoute from "@/components/ProtectedRoute";

const RootStack = createStackNavigator();

const MainNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {/* Onboarding Screen */}
    <RootStack.Screen name="OnBoarding" component={OnBoarding} />

    {/* Auth Navigator */}
    <RootStack.Screen name="Auth" component={AuthNavigator} />

    {/* Home Screen (Protected) */}
    <RootStack.Screen
        name="Home"
    component={() => (
        <ProtectedRoute>
            <HomeScreen />
        </ProtectedRoute>
    )}
    />

    {/* Profile Screen (Protected) */}
    <RootStack.Screen
        name="Profile"
    component={() => (
        <ProtectedRoute>
            <ProfileScreen />
        </ProtectedRoute>
    )}
    />
    </RootStack.Navigator>
    </NavigationContainer>
);
};

export default MainNavigator;
