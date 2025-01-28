import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#6b6b6b",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    agreement: {
        fontSize: 12,
        color: "#6b6b6b",
        marginBottom: 20,
    },
    link: {
        color: "#007BFF",
    },
    primaryButton: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 10,
    },
    secondaryButton: {
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;