import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text>Hello world!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:"red"
  },
});

export default App;