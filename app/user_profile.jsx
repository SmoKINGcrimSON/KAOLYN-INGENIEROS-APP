import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const UserProfile = () => {
    const insets = useSafeAreaInsets()
    
    return (
        <View style = {{
            paddingTop: insets.top, 
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
          }}>
              <StatusBar style='black'/>
              <Text>User Profile</Text>
          </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({})