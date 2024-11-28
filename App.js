import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0)
  const pressCount = () => {
    setCount(count + 1)
  }
  return (
    <SafeAreaView>
      <View>
        <View style={{ alignSelf: 'center' }}>
          <Text>Home Component</Text>
        </View>
        <Text>{`Count: ${count}`}</Text>
        <TouchableOpacity testID='btn1' style={{}} onPress={pressCount}>
          <Text style={{ fontWeight: 'bold' }}>Add Count</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Array.from({ length: 200 }, (_, index) => index)}
        renderItem={({item,index})=>{
          return <Text>List: {item}</Text>
        }}
      />
    </SafeAreaView>
  )
}

export default App
