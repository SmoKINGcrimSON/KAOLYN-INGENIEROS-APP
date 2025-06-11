import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import { asesores } from '../../assets/data/data'

const Asesores = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style = {{
          paddingTop: insets.top, 
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }}>
          <StatusBar style='black'/>
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Icon name="search" size={18} color="gray" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Buscar un Asesor"
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Ciudad</Text>
            <Icon name="chevron-down" size={14} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Profesión</Text>
            <Icon name="chevron-down" size={14} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{}}>
        <FlatList
        data={asesores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 16,
      padding: 12,
      marginHorizontal: 16,
      marginVertical: 6,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4
    }}
  >
    <Image
      source={item.profilePic}
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#3fa935',
        marginRight: 12
      }}
    />
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#a7db66',
        padding: 8,
        borderRadius: 50
      }}
    >
      <Icon name="comment" size={16} color="black" />
    </TouchableOpacity>
  </View>
)}

        />
      </View>
    </View>
  )
}

export default Asesores

const styles = StyleSheet.create({
  searchSection: {
    padding: 16
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#3fa935',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a7db66',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 8,
  },
  filterText: {
    fontSize: 16,
    marginRight: 6,
    color: 'black',
  },
})