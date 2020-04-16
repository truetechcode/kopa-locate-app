import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native'
import { Button, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ModalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Info</Text>
      <Text style={{ fontSize: 14 }}>Thank you for downloading kopa locate, kopa locate is an app to assist all Coups Members locate their Camp or State Secreteriat, and also read news specific to NYSC.</Text>
      <Text>
        If you find a bug please contact the developer:
      </Text>

      <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={() => Linking.openURL('https://terveraosu.now.sh/contact')}>
        <Text style={{ color: 'blue' }} >terveraosu.now.sh/contact</Text>
      </TouchableOpacity>

      <Button icon danger rounded style={styles.close} onPress={() => navigation.goBack()} >
        <Icon name='close' />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 },
  heading: { fontSize: 20, fontWeight: 'bold' },
  close: { paddingRight: 0, position: 'absolute', top: 30, right: 10, }
})
export default ModalScreen;