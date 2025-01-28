import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

const VerifyEmailScreen: React.FC<Props> = ({ navigation }) => {
    const [code, setCode] = useState("");

    return (
        <View className="flex-1 justify-center p-5 bg-white">
            <Text className="text-2xl font-bold mb-2">Verify Email</Text>
            <Text className="text-sm text-gray-600 mb-5">
                We sent you a verification code to your email. Enter it to continue.
            </Text>
            <TextInput
                className="border border-gray-300 rounded-lg p-3 mb-4 text-lg"
                placeholder="Verification code"
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
            />
            <TouchableOpacity className="self-end mb-5">
                <Text className="text-blue-600 text-sm">Resend code</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="bg-blue-600 py-4 rounded-lg items-center"
                onPress={() => navigation.navigate("CreatePassword")}
            >
                <Text className="text-white text-lg font-bold">Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VerifyEmailScreen;
