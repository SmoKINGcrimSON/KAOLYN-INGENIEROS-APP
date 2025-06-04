import { Dimensions, FlatList, Pressable, StyleSheet, View, Text} from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { useContext } from 'react'
import { CommentModalContext } from './VideoComponent'
import Comment from './Comment'
import jake from '../assets/photos/jake.jpg'

const comments = [
    {
        id: 1,
        usename: 'Fernando',
        comment: 'what a nice video!',
        pp: jake
    },
    {
        id: 2,
        usename: 'Fernando',
        comment: 'wow what\'s that!!',
        pp: jake
    },
    {
        id: 3,
        usename: 'Fernando',
        comment: 'stop uploading videos to the platform please asdasdasdsadsadasdsadasd asdas dasdasdasdasdasd asdasd',
        pp: jake
    },
    {
        id: 4,
        usename: 'Fernando',
        comment: 'the hell!!!!!',
        pp: jake
    },
    {
        id: 5,
        usename: 'Fernando',
        comment: 'great!!!!!!',
        pp: jake
    }, 
    {
        id: 6,
        usename: 'Fernando',
        comment: 'what a nice video!',
        pp: jake
    },
    {
        id: 7,
        usename: 'Fernando',
        comment: 'wow what\'s that!!',
        pp: jake
    },
    {
        id: 8,
        usename: 'Fernando',
        comment: 'stop uploading videos to the platform please asdasdasdsadsadasdsadasd asdas dasdasdasdasdasd asdasd',
        pp: jake
    },
    {
        id: 9,
        usename: 'Fernando',
        comment: 'the hell!!!!!',
        pp: jake
    },
    {
        id: 10,
        usename: 'Fernando',
        comment: 'great!!!!!!',
        pp: jake
    }
]

const ModalComment = () => {
    const {width, height} = Dimensions.get('window')
    const {isVisible, setIsVisible } = useContext(CommentModalContext);

    const hideCommentsModal = () => {
        setIsVisible(false)
    }
    return (
        <ReactNativeModal 
            isVisible={isVisible}
            animationInTiming={10}
            animationOutTiming={300}
            style={{
                justifyContent: 'flex-end',
                margin: 0
            }}
            >
            <View style={{
                position: 'absolute', 
                backgroundColor: 'white', 
                bottom: '0%', 
                width: width, 
                height: height * 3/4,
                padding: 20, 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start',
                borderTopRightRadius: 10, 
                borderTopLeftRadius: 10,
            }}>
                <Pressable onPress={hideCommentsModal} style={{
                    alignSelf: 'flex-end',
                    position: 'relative',
                    backgroundColor: 'red',
                    borderRadius: 25,
                    width: 50, 
                    height: 50}}>
                    <Text style={{fontSize: 15, color: 'white',
                        position: 'absolute', top: '28%', left: '12%',
                        fontWeight: '900'
                    }}>Close</Text>
                </Pressable>
                <FlatList
                    data={comments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({item}) => 
                            <Comment 
                                pp={item.pp}
                                comment={item.comment}
                                username={item.usename}
                            />
                    }
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={{paddingBottom: 40}}
                />
            </View>
        </ReactNativeModal>
    )
}

export default ModalComment

const styles = StyleSheet.create({})