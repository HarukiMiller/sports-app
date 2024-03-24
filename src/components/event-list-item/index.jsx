import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Button, Image, ImageBackground, Text, TouchableHighlight, View } from 'react-native';

const playerLogo = {
    nba: require(`../../../assets/images/player-logo/nba-player.png`),
    nfl: require(`../../../assets/images/player-logo/nfl-player.png`),
    mlb: require(`../../../assets/images/player-logo/mlb-player.png`),
    nhl: require(`../../../assets/images/player-logo/nhl-player.png`)
}
const event = {
    league: 'mlb',
    completed: true,
    date: '2024-03-15',
    time: '06:30:00',
    park: 'prince-park',
    competitors: {
        home: {
            name: "Boston Celtics",
            score: 3,
            winCount: 10,
            loseCount: 8,
            scorePoint: 593,
            scoreAgainst: 398,
            teamLogo: "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/bos.png",
        },
        away: {
            name: "Phoenix Suns",
            score: 4,
            winCount: 7,
            loseCount: 9,
            scorePoint: 593,
            scoreAgainst: 398,
            teamLogo: "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/phx.png",
        }
    }
}
export default function EventListItem() {
    return (
        <LinearGradient colors={['#bfbfbf', '#fff', '#bfbfbf']}
            start={[0, 0]} // Start point (top-left corner)
            end={[1, 0]}   // End point (bottom-right corner)
        >
            <View>
                <View className="w-full h-32 flex flex-row justify-between border-y border-purple-400 px-4 bg-transparent">
                    <View className="w-1/3 h-full flex z-10">
                        <View className="h-1/4 flex items-center justify-center">
                            <Text className=" text-black w-full inline text-center text-lg font-bold">{event.competitors.home.name}</Text>
                        </View>
                        <View className="w-full h-3/4 p-1 flex-row">
                            <View className="w-2/3">
                                <Image source={{ uri: event.competitors.home.teamLogo }} alt="team-logo" className="w-16 h-16"></Image>
                                <Text className="text-center w-16">{
                                    parseInt(event.competitors.home.winCount * 100 / (event.competitors.home.winCount + event.competitors.home.loseCount))
                                }%</Text>
                            </View>
                            <View className="w-1/2">
                                <Text>W : {event.competitors.home.winCount}</Text>
                                <Text>L : {event.competitors.home.loseCount}</Text>
                                <Text>SP : {event.competitors.home.scorePoint}</Text>
                                <Text>SA : {event.competitors.home.scoreAgainst}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="z-0">
                        <ImageBackground
                            source={playerLogo[event.league]}
                            width={128}
                            height={128}
                            className="w-32 h-32 mx-auto"
                            tintColor={"#bfbfbf"}
                        >
                            <View className="flex justify-between h-full py-3">
                                <View className="flex flex-row justify-between px-5">
                                    <Text className="text-center text-4xl">
                                        {event.completed ? event.competitors.home.score : '-'}
                                    </Text>
                                    <Text className="text-center text-4xl">
                                        :
                                    </Text>
                                    <Text className="text-center text-4xl">
                                        {event.completed ? event.competitors.away.score : '-'}
                                    </Text>
                                </View>
                                <View className='bg-[#ffffffaa] rounded-md w-3/4 mx-auto'>
                                    <Text className="w-full text-center font-bold">{event.date}</Text>
                                    <Text className="w-full text-center font-bold">{event.time}</Text>
                                    <Text className="w-full text-center font-bold">{event.park}</Text>
                                </View>
                            </View>
                        </ImageBackground>

                    </View>
                    <View className="w-1/3 h-full flex z-10">
                        <View className="h-1/4 flex items-center justify-center">
                            <Text className=" text-black w-full inline text-center text-lg font-bold">{event.competitors.away.name}</Text>
                        </View>
                        <View className="w-full h-3/4 p-1 flex-row">

                            <View className="w-1/2">
                                <Text>W : {event.competitors.away.winCount}</Text>
                                <Text>L : {event.competitors.away.loseCount}</Text>
                                <Text>SP : {event.competitors.away.scorePoint}</Text>
                                <Text>SA : {event.competitors.away.scoreAgainst}</Text>
                            </View>
                            <View className="w-2/3">
                                <Image source={{ uri: event.competitors.away.teamLogo }} alt="team-logo" className="w-16 h-16"></Image>
                                <Text className="text-center w-16">{
                                    parseInt(event.competitors.away.winCount * 100 / (event.competitors.away.winCount + event.competitors.away.loseCount))
                                }%</Text>
                            </View>
                        </View>
                    </View>


                </View>
                <View className="w-full">
                    <Button title='Get History' color={"#8f008f"}>
                    </Button>
                </View>
            </View>

        </LinearGradient>
    );
}
