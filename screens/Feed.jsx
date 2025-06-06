import { FlatList, StyleSheet, View, Dimensions } from 'react-native'
import { useRef, useState } from 'react'
import VideoComponent from '../components/VideoComponent'
import { videos } from '../assets/data/data'

const { height, width } = Dimensions.get('window')

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
  <View style={styles.itemContainer}>
    <VideoComponent videoid={item.id} videoUri={item.videoUri} shouldPlay={index === currentIndex} />
  </View>
)


  return (
    <FlatList
      contentContainerStyle={{padding: 0, margin: 0, backgroundColor: 'black'}}
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
      extraData={currentIndex}
    />
    
  )
}

export default Feed

const styles = StyleSheet.create({
  itemContainer: {
    height,
    width,
    flex: 1,
    padding: 0,
    margin: 0,
  },
});