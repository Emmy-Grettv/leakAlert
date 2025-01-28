import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "../../pages/HomeScreen";
import OnBoarding from "../../pages/OnBoarding";
import MainNavigator from "@/navigation/MainNavigator";
import { AuthProvider } from "@/context/AuthContext";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnBoarding, setShowOnBoarding] = useState(false);

  useEffect(() => {
    // Simulate a splash screen delay
    const timer = setTimeout(() => {
      setShowSplash(false);
      // Set this to false if onboarding is skipped after the first time
      setShowOnBoarding(true);
    }, 5000); // 5 seconds delay for the splash screen

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    // Display splash screen (or HomeScreen as in your original code)
    return (
        <View style={styles.splashContainer}>
          <HomeScreen />
        </View>
    );
  }

  if (showOnBoarding) {
    return <OnBoarding />;
  }

  // Once splash and onboarding are complete, navigate to the main app
  return (
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
