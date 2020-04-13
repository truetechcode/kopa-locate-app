import React from 'react';
import { StyleSheet, Image, ImageBackground, Share, Linking } from 'react-native';
import { GOOGLE_API_KEY } from 'react-native-dotenv'
import { Content, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';

import stateCamps from '../common/stateCamps'
import stateSecretariats from '../common/stateSecretariats'

const AddressCard = props => {
  const { id, state_name, address, phone, email } = props.route.category === 'camp' ? stateCamps[props.route.state] : stateSecretariats[props.route.state]
  const state = `${state_name} STATE`,
    source = 'share',
    time = 'get direction on map',
    place = props.route.category === 'camp' ? 'orientation+camp' : 'secreteriat';

  const placeMapImage = `https://maps.googleapis.com/maps/api/staticmap?center=nysc+${place}+${state_name}&zoom=15&size=600x300&maptype=roadmap&key=${GOOGLE_API_KEY}`
  const placeUri = `https://www.google.com/maps/search/nysc+${place}+${state_name}`

  let ShareMessage = () => {
    //Here is the Share API 
    Share.share({
      message: `${state} ${props.route.category === 'camp' ? 'ORIENTATION CAMP ADDRESS' : 'SECRETERIAT ADDRESS'}: ${address}`,
      title: state
    })
    //after successful share return result
    // .then(result => console.log(result))
    //If any thing goes wrong it comes here
    // .catch(errorMsg => console.log(errorMsg));
  };

  return (
    <Content>
      <Card>
        <CardItem bordered>
          <Left>
            <Body>
              <Text style={styles.featuredTitleStyle}>{state}</Text>
              <Text note>{props.route.category === 'camp' ? 'ORIENTATION CAMP ADDRESS' : 'SECRETERIAT ADDRESS'}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Body>
            <ImageBackground source={require('../assets/mapimage.jpeg')} style={{ height: 200, width: '100%', flex: 1 }} >
              <Image source={{ uri: placeMapImage }} style={{ height: 200, width: '100%', flex: 1 }} />
            </ImageBackground>
            <Text style={{ marginVertical: 10 }}>
              {address ? <Icon style={{ fontSize: 16 }} name="pin" /> : ''} {address}
            </Text>
            <Text style={{ display: 'flex' }}>{phone ? <Icon style={{ fontSize: 16 }} active name="md-phone-portrait" /> : ''} {phone || ''}</Text>
            <Text>{email ? <Icon style={{ fontSize: 16 }} name="mail" /> : ''} {email || ''}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={ShareMessage}>
              <Icon name="share" />
              <Text style={styles.noteStyle}>{source.toUpperCase()}</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={() => Linking.openURL(placeUri)}>
              <Icon name="map" />
              <Text style={styles.noteStyle}>{time.toUpperCase()}</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
}

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    textShadowColor: '#00000f',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  }
});

export default AddressCard;