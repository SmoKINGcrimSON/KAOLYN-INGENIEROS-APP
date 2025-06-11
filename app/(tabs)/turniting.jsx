import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Turniting = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: '#F4F8F1',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <StatusBar style='dark' />

      {/* Document Thumbnail */}
      <View style={{
        borderWidth: 4,
        borderColor: '#0C3C0C',
        borderRadius: 12,
        padding: 6,
        backgroundColor: '#ffffff',
        marginBottom: 20
      }}>
        <Image
          source={require("../../assets/photos/tesis.jpg")}
          style={{ width: 160, height: 230, resizeMode: 'contain' }}
        />
      </View>

      {/* Plagiarism Percentage */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
      }}>
        <Text style={{
          backgroundColor: '#D9E4C7',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          fontSize: 14,
          fontWeight: 'bold'
        }}>
          Porcentaje de plagio
        </Text>
        <View style={{
          backgroundColor: '#D1D7BD',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#0C3C0C'
          }}>
            100%
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity style={{
        backgroundColor: '#C8DDB3',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginBottom: 10
      }}>
        <Text style={{
          fontWeight: '600',
          color: '#000',
          fontSize: 14
        }}>
          Descargar informes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor: '#C8DDB3',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10
      }}>
        <Text style={{
          fontWeight: '600',
          color: '#000',
          fontSize: 14
        }}>
          Subir nuevo documento
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Turniting
