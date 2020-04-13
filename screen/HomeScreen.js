import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Content, Button, Left, Body, Icon, Text, Item, List, ListItem } from 'native-base';

import CommonContainer from '../components/CommonContainer'
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeTab = props => (
  <List style={styles.list}>
    <ListItem noIndent icon button onPress={() => props.navigation.navigate(props.target, { category: props.category })} style={styles.listItem}>
      <Left>
        <Button style={{ backgroundColor: "green" }}>
          <Icon name={props.iconName} />
        </Button>
      </Left>
      <Body style={styles.listItemBody}>
        <Text style={styles.text}>{props.mainText}</Text>
        <Text note style={styles.note}>{props.supportText}</Text>
      </Body>
    </ListItem>
  </List >
)


const HomeScreen = ({ navigation }) => {

  return (
    <CommonContainer navigation={navigation}>
      <Content>
        <TouchableOpacity onPress={() => navigation.navigate('Address', { category: 'camp' })}>
          <View style={{ borderColor: 'green', borderWidth: 1, width: '98%', borderRadius: 10, alignSelf: 'center', marginTop: 2 }}>
            <Item style={{ justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 5 }}>
              <Icon name="search" />
              <Text style={{ flex: 2, color: '#ccc' }}>Search for Camp</Text>
            </Item>
          </View>
        </TouchableOpacity>
        <HomeTab navigation={navigation} target='Address' category='camp' iconName='map' mainText='Locate Camp' supportText='Find the address of your Orientation Camp here.' />
        <HomeTab navigation={navigation} target='Address' category='state' iconName='map' mainText='Locate State Secreteriat' supportText='Find the address of your state secreteriat here.' />
        <HomeTab navigation={navigation} target='News' iconName='book' mainText='NYSC News' supportText='Get all the latest NYSC news here.' />
      </Content>
    </CommonContainer>

  );
}

const styles = StyleSheet.create({
  list: { alignItems: 'center' },
  listItem: { height: 80, width: '98%', backgroundColor: 'green', borderRadius: 10, marginVertical: 2 },
  listItemBody: { display: 'flex', flexDirection: 'column', borderBottomWidth: 0 },
  text: { color: 'white', fontWeight: 'bold' },
  note: { color: 'white', width: '100%' },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10,
    height: '100%'
  },
})

export default HomeScreen;