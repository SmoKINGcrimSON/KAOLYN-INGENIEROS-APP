import { FlatList, StyleSheet, View, Dimensions } from 'react-native'
import video1 from "../assets/videos/video-1.mp4"
import video2 from "../assets/videos/video-2.mp4"
import video3 from "../assets/videos/video-3.mp4"
import { useRef, useState } from 'react'
import VideoComponent from '../components/VideoComponent'

const { height, width } = Dimensions.get('window')

const videos = [
  { id: '1', videoUri: video1 },
  { id: '2', videoUri: video2 },
  { id: '3', videoUri: video3 },
]

const Feed = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index)
    }
  }).current

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 60 // tighter scroll detection
  }

  const renderItem = ({ item, index }) => (
    <View style={{ height, width }}>
      <VideoComponent videoUri={item.videoUri} shouldPlay={index === currentIndex} />
    </View>
  )

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToInterval={height}
      decelerationRate="fast"
      disableIntervalMomentum={true} 
      snapToAlignment="start"
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      getItemLayout={(_, index) => ({
        length: height,
        offset: height * index,
        index,
      })}
    />
  )
}

export default Feed
