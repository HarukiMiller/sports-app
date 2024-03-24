import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Animated, Touchable, TouchableHighlight } from 'react-native';
import Header from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';
export default function NBAScreen() {
  return (
    <View className="w-full h-full ">
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a' , '#192f6a',"#3b5998", '#4c669f']}
      start={[0, 0]} // Start point (top-left corner)
      end={[1, 0]}   // End point (bottom-right corner)
      >
       <View className="w-full h-32">
         <View>
        </View>  
      </View>
    </LinearGradient> 
    </View>
  );
}
