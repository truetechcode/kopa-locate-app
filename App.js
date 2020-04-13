import { decode, encode } from 'base-64'

if (!global.btoa) { global.btoa = encode }

if (!global.atob) { global.atob = decode }

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screen/HomeScreen'
import NewsApp from './screen/NewsScreen'
import ResultScreen from './screen/ResultScreen'
import AddressScreen from './screen/AddressScreen'
import ModalScreen from './screen/ModalScreen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Handbugger = ({ navigation }) => (
  < View style={styles.handbugger}>
    <Ionicons
      onPress={() => navigation.openDrawer()}
      name="md-menu"
      style={styles.handbuggerIcon}
    />
  </View >
)

const Root = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: 'Kopa Locate',
        headerLeft: () => <Handbugger navigation={navigation} />,
        headerStyle: styles.headerStyles,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
      })} />
    <Stack.Screen
      name="News"
      component={NewsApp}
      options={{
        title: 'Kopa News',
        headerStyle: styles.headerStyles,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
      }} />

    <Stack.Screen
      name="Address"
      component={ResultScreen}
      options={{
        title: 'Choose State',
        headerStyle: styles.headerStyles,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
      }} />

    <Stack.Screen
      name="Details"
      component={AddressScreen}
      options={({ route }) => ({
        title: `${route.params.category[0].toUpperCase() + route.params.category.slice(1, route.params.category.length)} Address`,
        headerStyle: styles.headerStyles,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitle,
      })} />
  </Stack.Navigator>
)

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="slide" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Root}
          options={{
            drawerIcon: ({ focused = true, color = 'blue', size = 12 }) => <Ionicons color={color} size={size} name='md-apps' />
          }}
        />
        <Drawer.Screen
          name="Info"
          component={ModalScreen}
          options={{
            drawerIcon: ({ focused = true, color = 'blue', size = 12 }) => <Ionicons color={color} size={size} name='md-information-circle' />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  handbugger: { flexDirection: 'row' },
  handbuggerIcon: { color: 'white', marginHorizontal: 15, fontSize: 25 },
  headerStyles: {
    backgroundColor: '#00aa00',
  },
  headerTitle: {
    fontWeight: 'bold',
    textAlign: "center",
    flex: 1
  }
})

export default App;