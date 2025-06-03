import { View } from 'react-native'; //StyleSheet
import "../global.css";
import { Stack } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1">
        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{headerShown: false}}
          />
        </Stack>
    </View>
  );
}