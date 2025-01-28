import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../styles/styles";

type Props = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

const SignupScreen: React.FC<Props> = ({ navigation }) => {
    const [form, setForm] = useState({ email: "", phone: "", password: "", confirmPassword: "" });

    const handleChange = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>Set up your account</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={form.email}
                onChangeText={(value) => handleChange("email", value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={form.phone}
                onChangeText={(value) => handleChange("phone", value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={form.password}
                onChangeText={(value) => handleChange("password", value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                secureTextEntry
                value={form.confirmPassword}
                onChangeText={(value) => handleChange("confirmPassword", value)}
            />
            <Text style={styles.agreement}>
                By selecting Agree and continue, I agree to our <Text style={styles.link}>Terms of Service</Text> and
                <Text style={styles.link}> Privacy Policy</Text>.
            </Text>
            <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.secondaryButton}>
                <Text style={styles.buttonText}>I already have an account</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SignupScreen;