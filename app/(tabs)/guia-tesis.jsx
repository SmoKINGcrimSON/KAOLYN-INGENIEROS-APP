import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const GuiaTesis = () => {
  const insets = useSafeAreaInsets()
  
  return (
    <View style = {{
      paddingTop: insets.top, 
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }}>
      <StatusBar style='black'/>
      <Text>Guía de tesis</Text>
    </View>
  )
}

export default GuiaTesis

const styles = StyleSheet.create({})