import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Animated, Touchable, TouchableHighlight, FlatList } from 'react-native';
import Header from '../components/header';
import { getUpcomingGames } from '../apis/game-api';
import EventListItem from '../components/event-list-item';
export default function HomeScreen() {
  const [eventList,setEventList] = useState([1,2,3,4,5,6,7,8,9,0])
  useEffect(()=>{

    // getUpcomingGames('nba','20240308').then(res=>{
    //   console.log(res['20240314'][0].id)
    // }) 
    return ()=>{}
  },[])
  return (
    <View className="w-full h-full">
       <FlatList
        data={eventList}
        renderItem={({item}) => <EventListItem/>}
      />
    </View>
  );
}
