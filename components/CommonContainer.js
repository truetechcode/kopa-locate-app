import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const HeaderNav = props => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Left>
    <Body></Body>
    <Right>
      <Button transparent>
        <Icon name="person" />
      </Button>
    </Right>
  </Header>
)

const FooterNav = ({ navigation }) => (

  <Footer>
    <FooterTab style={styles.footer}>
      <Button
        vertical
        onPress={() => navigation.popToTop()}
      >
        <Icon style={styles.tabs} active name="apps" />
        <Text style={styles.tabs}>Home</Text>
      </Button>
      <Button
        vertical
        onPress={() => navigation.push('News')}
      >
        <Icon style={styles.tabs} name="paper" />
        <Text style={styles.tabs}>News</Text>
      </Button>
    </FooterTab>
  </Footer>
)

const CommonContainer = props => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setLoading(false)
  }, []);

  if (loading) { }
  return (
    <Container style={{}}>
      {props.children}
      <FooterNav navigation={navigation} />
    </Container>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#00aa00',
  },
  tabs: {
    color: 'white'
  }
})
export default CommonContainer
