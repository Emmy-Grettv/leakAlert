import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };

    return (
        <View className="flex-1 justify-center bg-white p-5">
            <Text className="text-2xl font-bold mb-3 text-gray-900">Login</Text>
            <Text className="text-base text-gray-600 mb-5">
                Enter your credentials to continue
            </Text>
            <TextInput
                className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
                placeholder="Email"
                value={form.email}
                onChangeText={(value) => handleChange("email", value)}
            />
            <TextInput
                className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
                placeholder="Password"
                secureTextEntry
                value={form.password}
                onChangeText={(value) => handleChange("password", value)}
            />
            <Text className="text-xs text-gray-600 mb-4">
                By selecting login, you agree to our{" "}
                <Text className="text-blue-500">Terms of Service</Text> and{" "}
                <Text className="text-blue-500">Privacy Policy</Text>.
            </Text>
            <TouchableOpacity className="bg-blue-500 rounded-lg p-4 mb-3">
                <Text className="text-white text-base font-bold text-center">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}
                className="bg-gray-100 rounded-lg p-4"
            >
                <Text className="text-blue-500 text-base font-bold text-center">
                    I don’t have an account
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
