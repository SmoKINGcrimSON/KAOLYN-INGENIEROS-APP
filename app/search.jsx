import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Search = () => {
    const insets = useSafeAreaInsets()

    return (
        <View style = {{
          paddingTop: insets.top, 
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }}>
            <StatusBar style='black'/>
            <Text>Search component</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})