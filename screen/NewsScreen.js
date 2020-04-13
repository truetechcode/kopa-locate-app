import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, useWindowDimensions, StyleSheet } from 'react-native';

import newsRef from '../services/firestore'
import NewsCard from '../components/NewsCard'
import CommonContainer from '../components/CommonContainer'

const NewsScreen = () => {
  const [articles, setArticles] = useState([])
  const [refreshing, setRefreshing] = useState(true)
  const [failed, setFailed] = useState(false)

  const dimensions = useWindowDimensions();
  let art = []

  useEffect(() => {
    fetchNews(articles);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true)
    return fetchNews(articles)
  }

  const fetchNews = (art) => {

    newsRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          art.push(doc.data())
        });
        setArticles(art)
        setRefreshing(false)
        setFailed(false)
      })
      .catch(err => {
        console.log('Error getting documents', err);
        setRefreshing(false);
        setFailed(true);
        return false;
      });
  }

  const Failed = () => (
    <View style={{ alignSelf: 'center', marginVertical: (dimensions.height / dimensions.scale) }}>
      <Text style={styles.failedText}>Something went wrong, try again!</Text>
    </View>
  )

  return (
    <CommonContainer>
      {failed && <Failed />}
      <FlatList
        data={articles}
        renderItem={({ item }) => <NewsCard article={item} />}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </CommonContainer>
  );
}

const styles = StyleSheet.create({
  failedText: { textAlign: 'center', fontWeight: 'bold' }
})
export default NewsScreen;