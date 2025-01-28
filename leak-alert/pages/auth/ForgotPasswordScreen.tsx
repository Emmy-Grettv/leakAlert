import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState("");

    return (
        <View className="flex-1 justify-center bg-white p-5">
            <Text className="text-2xl font-bold mb-3 text-gray-900">Forgot Password</Text>
            <Text className="text-base text-gray-600 mb-5">Set up a new password</Text>
            <TextInput
                className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Text className="text-xs text-gray-600 mb-4">
                By selecting login, you agree to our{" "}
                <Text className="text-blue-500">Terms of Service</Text> and{" "}
                <Text className="text-blue-500">Privacy Policy</Text>.
            </Text>
            <TouchableOpacity
                className="bg-blue-500 rounded-lg p-4"
                onPress={() => navigation.navigate("VerifyEmail")}
            >
                <Text className="text-white text-base font-bold text-center">Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPasswordScreen;
