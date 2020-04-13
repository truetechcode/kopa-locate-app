import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Left, Right, Icon, Text, Form, Item, Input } from 'native-base';

import CommonContainer from '../components/CommonContainer'
import stateCamps from '../common/stateCamps'
import { TouchableOpacity } from 'react-native-gesture-handler';

function ItemList({ category, title, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { state: title, category: category })}
    >
      <View style={styles.item}>
        <Left>
          <Text style={styles.title}>{title.replace('_', ' ').toUpperCase()}</Text>
        </Left>
        <Right>
          <Icon name="ios-arrow-forward" />
        </Right>
      </View>
    </TouchableOpacity>
  );
}

function ResultScreen(props) {
  const STATE = [...Object.keys(stateCamps)]
  let filteredStates = STATE

  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(filteredStates);

  const filterStates = queryText => {
    setFiltered(STATE.filter(value => value.includes(queryText.toLowerCase())))
  }

  const changeText = queryText => {
    setQuery(queryText)
    filterStates(queryText)
  }

  return (
    <CommonContainer>
      <View style={{ height: 600 }}>
        <Form style={styles.form}>
          <Item style={{ width: '90%' }}>
            <Input placeholder="Search..." autoFocus={true} style={styles.input} value={query} onChangeText={text => changeText(text)} />
          </Item>
        </Form>

        <FlatList
          data={filtered}
          renderItem={({ item }) => <ItemList category={props.route.params.category} title={item} navigation={props.navigation} />}
          keyExtractor={item => item}
        />
      </View>
    </CommonContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input: {
    borderColor: 'green',
    borderBottomWidth: 2,
  }
});

export default ResultScreen
