import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="text-gray-700 text-lg">You need to log in to access this page.</Text>
            </View>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
