// App.jsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './src/screens/homeScreen'; // Correct the import path
import NBAScreen from './src/screens/nbaScreen';
import MLBScreen from './src/screens/mlbScreen';
import NFLScreen from './src/screens/nflScreen';
import NHLScreen from './src/screens/nhlScreen';
import { Image, ImageBackground, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment-timezone'
const Tab = createMaterialTopTabNavigator();
const App = () => {
  const backImage = require('./assets/images/background.jpg')
  // const utcDatetime = '2024-03-23T23:00:00Z';
  // const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // console.log("Current Timezone:", currentTimezone);
  // const localDatetime = moment.utc(utcDatetime).tz(currentTimezone);
  // console.log(localDatetime.format('YYYY-MM-DD HH:mm:ss').split(' '))
  const getIcon = (sports_name) => {
    switch(sports_name){
      case 'nba':
        return require(`./assets/images/icons/nba.png`)
        break;
      case 'mlb':
        return require(`./assets/images/icons/mlb.png`)
        break;
      case 'nfl':
        return require(`./assets/images/icons/nfl.png`)
        break;
      case 'nhl':
        return require(`./assets/images/icons/nhl.png`)
        break;
      case 'soc':
        return require('./assets/images/icons/soccer.png')
    }
  }
  return (
    <View className="w-full h-full">
      <View className="h-20 flex items-center justify-center bg-purple-950">
        <Text className="text-3xl italic font-extrabold text-white underline">Sports!!!</Text>
      </View>
      <NavigationContainer>
        <ImageBackground
          style={{ flex: 1 }}
          resizeMode="cover"
          className="w-full h-20 bg-purple-950"
        >
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              // tabBarScrollEnabled: true, 
              tabBarIndicatorStyle: {
                height:"20%",
                opacity:0.5,
                borderTopEndRadius:10,
                borderTopStartRadius:10,
                backgroundColor: "#b1c3ff"
              },
              tabBarLabel: () => null, // Hide default text label
              tabBarLabelStyle: { display: 'none' },
              tabBarStyle: {
                paddingTop: 0,
                height: 58,
                backgroundColor: 'transparent',
              },
              tabBarIconStyle: {
                width: "20%",
                height: "100%",
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconSource;
                return (
                  <View className={`w-20 h-14 -mt-3 px-2 flex flex-row items-center justify-center`}>
                    <Image source={getIcon(route.name.toLowerCase())} className="w-1/4 aspect-square" tintColor={"white"}></Image>
                    <Text className={`w-3/4 flex justify-center items-center text-center
                     rounded-md font-bold text-white text-md`}
                    >{route.name}</Text>
                  </View>
                )
              },
            })}
          >
            {/* <Tab.Screen name="ALL" component={HomeScreen} /> */}
            <Tab.Screen name="NBA" component={NBAScreen} />
            <Tab.Screen name="MLB" component={MLBScreen} />
            <Tab.Screen name="NFL" component={NFLScreen} />
            <Tab.Screen name="NHL" component={NHLScreen} />
            <Tab.Screen name="SOC" component={NHLScreen} />
          </Tab.Navigator>
        </ImageBackground>
      </NavigationContainer>
      <StatusBar style="light" />
      
    </View>

  );
};

export default App;