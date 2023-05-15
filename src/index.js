import { View, Text, StyleSheet, SafeAreaView, Alert, ActivityIndicator, Dimensions, ScrollView, TextInput, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import EvilIcon from '@expo/vector-icons/EvilIcons.js'
import WeatherInfo from './WeatherInfo'



const API_KEY = 'e97c52b29dbf49c49c824206230505'

const Weather = () => {
    const [weatherData, setWeatherData] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [cityName, setCityName] = useState('');

    const fetchWeatherData = async (cityName) => {
        try {
            setLoaded(false);
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=yes`);
            if (response.status === 200) {
                const data = await response.json()
                setWeatherData(data)
            }
            setLoaded(true)
        } catch (error) {
            Alert.alert('Error', error.message)
        }
    };



    useEffect(() => {
        fetchWeatherData('New Delhi');
    }, [])

    if (!loaded) {
        return <View style={[styles.container, {
            alignItems: 'center',
            justifyContent: 'center',
        }]}>
            <ActivityIndicator size='large' color='blue' />
        </View>
    }
    return (
        <View style={styles.container}>
            <SafeAreaView >
                <View style={styles.header}>
                    <Text style={styles.headerText}>Weather</Text>
                </View>
                <ScrollView style={{ marginBottom: 55 }}>
                    <View style={styles.search}>
                        <TextInput placeholder='Search city' style={styles.input} onChangeText={(text) => setCityName(text)} value={cityName} />
                        <EvilIcon name='search' size={30} onPress={() => fetchWeatherData(cityName)} />
                    </View>

                    <WeatherInfo weatherData={weatherData} />

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 20,
        borderRadius: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        borderColor: 'lightgrey',
        paddingVertical: 10,
        borderRadius: 20,
        margin: 10,
        paddingHorizontal: 10,
    },
    input: {
        height: 40,
        width: '90%',
    },
});