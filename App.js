import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0)
  const pressCount = () => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }
  return (
    <SafeAreaView>
      <View>
        <View style={{ alignSelf: 'center' }}>
          <Text>Home Component</Text>
        </View>

        <Text>{`Count: ${count}`}</Text>
        <TouchableOpacity testID='btn1' style={{ width: 100, height: 100, backgroundColor: 'red' }} onPress={pressCount}>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App
