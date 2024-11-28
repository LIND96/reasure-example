import { useMemo, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0)
  const pressCount = () => {
    setCount(count + 1)
  }
  const listData = useMemo(() => {
    return <FlatList
      data={Array.from({ length: 200 }, (_, index) => index)}
      renderItem={({ item, index }) => {
        return <Text>List: {item}</Text>
      }}
    />
  }, [])
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
      {listData}

    </SafeAreaView>
  )
}

export default App
