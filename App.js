import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'; //StyleSheet
import "./global.css";
import Feed from './screens/Feed';

export default function App() {
  return (
    <View className="flex-1">
      <Feed/>
      <StatusBar style="auto"/>
    </View>
  );
}