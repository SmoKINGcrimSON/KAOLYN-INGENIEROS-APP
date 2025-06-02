import { FlatList, StyleSheet, Text, View } from 'react-native'
import video1 from "../assets/videos/video-1.mp4"
import video2 from "../assets/videos/video-2.mp4"
import video3 from "../assets/videos/video-3.mp4"
import { Dimensions } from 'react-native'
import { useRef, useState } from 'react'
import VideoComponent from '../components/VideoComponent'

const videos = [
    {
        id: '1',
        videoUri: video1
    },
    {
        id: '2',
        videoUri: video2
    },
    {
        id: '3',
        videoUri: video3
    }
]

const {width, height} = Dimensions.get('screen')

const Feed = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
    }
    }).current;


    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }

    const renderItem = ({ item, index }) => {
    return (
        <View style={{ height }}>
            <VideoComponent videoUri={item.videoUri} shouldPlay={index === currentIndex} />
        </View>
        );
    };



    return (
        <FlatList
            data={videos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
        >
        </FlatList>
    )
}

export default Feed

const styles = StyleSheet.create({})