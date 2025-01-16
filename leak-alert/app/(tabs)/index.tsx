import HomeScreen from "../../pages/HomeScreen"
import OnBoarding from "../../pages/OnBoarding";
import { useEffect, useState } from "react"
import { ScrollView, StyleSheet } from "react-native"

const App = () => {
  const [showHomeScreen , setShowHomeScreen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomeScreen(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return(
    <ScrollView contentContainerStyle={styles.container}>
      {showHomeScreen ? <HomeScreen /> : <OnBoarding />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
})

export default App;