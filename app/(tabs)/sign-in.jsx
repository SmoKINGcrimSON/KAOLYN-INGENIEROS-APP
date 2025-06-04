import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SignIn = () => {
  const insets = useSafeAreaInsets()
  
  return (
    <View style = {{
      paddingTop: insets.top, 
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }}>
      <StatusBar style='black'/>
      <Text>Sign-in</Text>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})