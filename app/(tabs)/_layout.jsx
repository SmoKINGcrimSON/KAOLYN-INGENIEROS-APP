import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Link, Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            headerTitle: "",
            headerLeft: () => (
              <View style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center',
                gap: 3
              }}>
                <Image
                  source={require('../../assets/KaolynSAC-icon.png')}
                  style={{ width: 30, height: 30, marginRight: 8 }}
                />
                <Text 
                  style={{ color: 'black', fontSize: 16, fontWeight: '600'}}>
                  KAOLYN
                </Text>
              </View>
            ),
            headerRight: () => (
              <Link asChild href={'/search'}>
                <Pressable style={{paddingRight: 10}}>
                  <FontAwesome name="search" size={24} color="black" />
                </Pressable>
              </Link>
            )
          }}
    >
        <Tabs.Screen
            name="index"
            options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" size={24} color="black" />
            ),
        }}
        />

        <Tabs.Screen
            name="asesores"
            options={{
            title: "Asesores",
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="smile-o" size={24} color="black" />
            ),
            headerShown: false
        }}
        />

        <Tabs.Screen
            name="turniting"
            options={{
            title: "Turniting",
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="copyright" size={24} color="black" />
            ),
            headerShown: false
        }}
        />

        <Tabs.Screen
            name="guia-tesis"
            options={{
            title: "Guías de Tesis",
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="lightbulb-o" size={24} color="black" />
            ),
            headerShown: false
        }}
        />

        <Tabs.Screen
            name="sign-in"
            options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" size={24} color="black" />
            ),
            headerShown: false
        }}
        />

    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})