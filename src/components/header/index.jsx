import React, { useState, useEffect } from 'react';
import { Image, View} from 'react-native';
export default function Header() {
  const [blur, setBlur] = useState(0);
  const allLogo = require('../../../assets/images/sports-logo/all-logo.png');
  const nbaLogo = require('../../../assets/images/sports-logo/nba-logo.png');
  const mlbLogo = require('../../../assets/images/sports-logo/mlb-logo.png');
  const nflLogo = require('../../../assets/images/sports-logo/nfl-logo.png');
  const nhlLogo = require('../../../assets/images/sports-logo/nhl-logo.png');
  return (
    <View className="w-full h-14 flex flex-row">
      <Image source={allLogo} alt='all logo' className="w-1/5 h-20"></Image>
      <Image source={nbaLogo} alt='nba logo' className="w-1/5 h-20"></Image>
      <Image source={mlbLogo} alt='mlb logo' className="w-1/5 h-20"></Image>
      <Image source={nflLogo} alt='nfl logo' className="w-1/5 h-20"></Image>
      <Image source={nhlLogo} alt='nhl logo' className="w-1/5 h-20"></Image>
    </View>
  );
}
