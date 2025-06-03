import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import pp1 from '../assets/photos/carlos.jpeg'
import pp2 from '../assets/photos/edwin.jpeg'
import pp3 from '../assets/photos/jake.jpg'
import { useMemo } from 'react';

const profilePictures = [
  { id: '1', videoUri: pp1 },
  { id: '2', videoUri: pp2 },
  { id: '3', videoUri: pp3 },
];

const VideoFeed = ({ id }) => {
  const profilePic = useMemo(() => {
    return profilePictures.find((p) => p.id === id)?.videoUri || pp1;
  }, [id]);

  return (
    <View style={styles.container}>
      {/* Profile Picture + Add */}
      <Pressable style={{ alignItems: 'center', position: 'relative' }}>
        <Image 
          source={profilePic} 
          style={styles.profileImage}
        />
        <View style={styles.addIconContainer}>
          <Ionicons name="add" size={14} color="white" />
        </View>
      </Pressable>

      {/* Heart */}
      <Pressable style={styles.actionButton}>
        <FontAwesome name="heart" size={24} color="white" />
        <Text style={styles.counter}>1K</Text>
      </Pressable>

      {/* Comments */}
      <Pressable style={styles.actionButton}>
        <FontAwesome name="wechat" size={24} color="white" />
        <Text style={styles.counter}>546</Text>
      </Pressable>
    </View>
  );
};

export default VideoFeed;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    right: '5%',
    gap: 20,
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: -5,
    alignSelf: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  actionButton: {
    flex: 1,
    gap: 5,
    alignItems: 'center',
  },
  counter: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  }
});
