import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import VideoFeed from './VideoFeed';

const VideoComponent = ({ profileId, videoUri, shouldPlay }) => {

  const player = useVideoPlayer(videoUri, (player) => {
    player.loop = true;
    if (shouldPlay) {
      player.play();
    }
  });

  // Focus/blur handling
  useFocusEffect(
    useCallback(() => {
      // When screen is focused
      if (shouldPlay) {
        player.play();
      }

      // When screen is unfocused
      return () => {
        player.pause();
      };
    }, [shouldPlay])
  );

  // Handle `shouldPlay` prop change
  useEffect(() => {
    if (shouldPlay) {
      player.replay();
    } else {
      player.pause();
    }
  }, [shouldPlay]);

  return (
    <View style={styles.container}>
      {/*The video itself*/}
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      {/*Video Feed*/}
      <VideoFeed id={profileId}/>
    </View>
  );
};

export default VideoComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative'
  },
  video: {
    width: '100%',
    height: '85%',
  },
});
