import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Turniting = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style = {{
          paddingTop: insets.top, 
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }}>
          <StatusBar style='black'/>
          <Text>Turniting</Text>
    </View>
  )
}

export default Turniting

const styles = StyleSheet.create({})