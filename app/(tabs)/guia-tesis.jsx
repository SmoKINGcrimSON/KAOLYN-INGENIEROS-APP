import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const GuiaTesis = () => {
  const insets = useSafeAreaInsets()
  
  return (
    <View style = {{
      paddingTop: insets.top, 
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }}>
      <StatusBar style='black'/>
      <View style={{ alignItems: 'center', marginTop: 24 }}>
  {/* Card de asesoría no programada */}
  <View style={{
    marginTop: 30,    
    backgroundColor: '#e5e4e9',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  }}>
    <Text style={{ fontSize: 18, marginRight: 12 }}>📅</Text>
    <Text style={{ fontSize: 16 }}>No tiene asesorías programadas</Text>
  </View>

  {/* Botones verdes */}
  {[
    { icon: '✨', text: 'Introducción' },
    { icon: '🔲', text: 'Metodología' },
    { icon: '🕒', text: 'Resultados' },
    { icon: '💬', text: 'Conclusiones' }
  ].map((item, index) => (
    <View key={index} style={{
      backgroundColor: '#76d128',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 260,
      marginBottom: 14
    }}>
      <Text style={{ fontSize: 18, marginRight: 16 }}>{item.icon}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.text}</Text>
    </View>
  ))}

  {/* Texto del asesor */}
  <Text style={{
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500'
  }}>
    Asesor: Matías Qusquisiban 👨‍🏫
  </Text>
</View>

    </View>
  )
}

export default GuiaTesis

const styles = StyleSheet.create({})