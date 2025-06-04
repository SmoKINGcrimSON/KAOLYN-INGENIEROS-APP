import { View } from 'react-native'; //StyleSheet
import "../global.css";
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <StatusBar style='black'/>
        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{headerShown: false}}
          />
          
          <Stack.Screen
            name="search"
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="user_profile"
            options={{headerShown: false}}
          />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}