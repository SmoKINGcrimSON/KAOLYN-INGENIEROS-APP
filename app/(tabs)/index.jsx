import { StyleSheet, Text, View } from 'react-native'
import Feed from '../../screens/Feed';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView>
      <Feed/>
    </SafeAreaView>
  );
}

export default Index

const styles = StyleSheet.create({})