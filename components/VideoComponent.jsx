import { useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { useVideoPlayer, VideoView } from 'expo-video'

const VideoComponent = ({ videoUri, shouldPlay }) => {
  const player = useVideoPlayer(videoUri, (player) => {
    player.loop = true;
    if (shouldPlay) {
      player.play();
    }
  });

  useEffect(() => {
    if (shouldPlay) {
      player.play();
    } else {
      player.pause();
    }
  }, [shouldPlay]);

  return (
    <View style={styles.container}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
    </View>
  )
}

export default VideoComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: '100%',
  },
})
