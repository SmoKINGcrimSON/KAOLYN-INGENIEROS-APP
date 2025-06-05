import { Dimensions, FlatList, Pressable, StyleSheet, View, Text} from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { useContext, useEffect, useState } from 'react'
import { CommentModalContext } from './VideoComponent'
import Comment from './Comment'
import { defaultUserIcon, videos } from '../assets/data/data'
import { users } from '../assets/data/data'

const ModalComment = ({videoid}) => {
    const [formattedComments, setFormattedComments] = useState([])

    useEffect(() => {
        const rawComments = videos.find(v => v.id == videoid)?.comments || [];

        const commentsFormatted = rawComments.map(comment => {
            const user = users.find(u => u.id === comment.userid);
            return {
                id: comment.id,
                username: user?.username || 'Unknown',
                pp: user?.profilePic || defaultUserIcon,
                comment: comment.comment
            };
        });

        setFormattedComments(commentsFormatted);
    }, [videoid])

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
                    data={formattedComments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({item}) => 
                            <Comment 
                                pp={item.pp}
                                comment={item.comment}
                                username={item.username}
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