import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import user from '../assets/data/user.json'

const profileData = {
  username: user.username,
  bio: 'Just vibing 🎵',
  profilePic: user.profilePic
}

const TikTokProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profileData.profilePic }} style={styles.profileImage} />
      <Text style={styles.username}>@{profileData.username}</Text>
      <Text style={styles.bio}>{profileData.bio}</Text>
    </View>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fdf6ff',
    height: '100%',
  },
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    borderWidth: 4,
    borderColor: '#ff6ec7',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
})

export default TikTokProfile
