import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import "tailwindcss/tailwind.css";

type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

const CreatePasswordScreen: React.FC<Props> = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View className="flex-1 justify-center bg-white p-5">
            <Text className="text-2xl font-bold mb-3">Create a Password</Text>
            <Text className="text-base text-gray-600 mb-5">Choose a new password</Text>

            <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-4"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2 text-base mb-4"
                placeholder="Confirm password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <Text className="text-xs text-gray-600 mb-5">
                By selecting login, you agree to our <Text className="text-blue-500">Terms of Service</Text> and
                <Text className="text-blue-500"> Privacy Policy</Text>.
            </Text>

            <TouchableOpacity
                className="bg-blue-500 rounded-lg py-3 items-center"
                onPress={() => navigation.navigate("Login")}
            >
                <Text className="text-white text-base font-bold">Set Password</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreatePasswordScreen;
