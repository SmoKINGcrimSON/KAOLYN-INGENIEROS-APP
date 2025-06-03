import { StyleSheet, View } from 'react-native'
import Feed from '../../screens/Feed';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <View style={{flex: 1}}>
      <Feed/>
    </View>
  );
}

export default Index

const styles = StyleSheet.create({})