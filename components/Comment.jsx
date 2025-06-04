import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'

const Comment = ({pp, username, comment}) => {
    const {width} = Dimensions.get('window')

    return (
        <View style={{
            width: width,
            flex: 1, 
            alignItems: 'flex-start', 
            flexDirection: 'row',
            gap: 10,
            marginBottom: 15}}>
            <Image source={pp} style={{
                width: 50, height: 50, borderRadius: 25
            }}/>
            <View style={{flex: 1}}>
                <Text style={{
                    fontWeight: '600', 
                    fontSize: 15, 
                    color: 'gray'}}>{username}</Text>
                <Text style={{paddingRight: 5}}>{comment}</Text>
            </View>
        </View>
  )
}

export default Comment

const styles = StyleSheet.create({})