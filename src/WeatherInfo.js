import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

const WeatherInfo = ({ weatherData }) => {
    return (
        <View style={styles.container}>
            <View style={{ textAlign: 'center' }}>
                <Text style={styles.title}>{weatherData.location.name}, <Text style={[styles.title, { fontSize: 20 }]}>{weatherData.location.region} {weatherData.location.country}</Text></Text>

            </View>
            <View style={styles.logo}>
                <Image style={styles.largeIcon} source={{ uri: `http:${weatherData.current.condition.icon}` }} />
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Text style={styles.c_temp}>{weatherData.current.temp_c}</Text>
                    <View>
                        <Text style={{fontSize: 30}}>℃</Text>
                        <Text style={styles.desc}>{weatherData.current.condition.text}</Text>
                    </View>
                </View>

            </View>
            <View >
                <Text style={{ fontSize: 10, fontWeight: 'bold', margin: 5 }}>Local Time: {weatherData.location.localtime}</Text>
                <Text style={{ fontSize: 10, fontWeight: 'bold', margin: 5 }}>Last Updated: {weatherData.current.last_updated.slice(10)}</Text>
            </View>


            <Text style={{ fontSize: 30, alignSelf: 'center', margin: 20 }}>Weather details</Text>

            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/temperature.png')} />
                    <Text style={styles.infoText}>{weatherData.current.feelslike_c} ℃</Text>
                    <Text style={styles.infoText}>Feels like</Text>
                </View>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/humidity.png')} />
                    <Text style={styles.infoText}>{weatherData.current.humidity} %</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/eye.png')} />
                    <Text style={styles.infoText}>{weatherData.current.vis_km} KM</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/air.png')} />
                    <Text style={styles.infoText}>{weatherData.current.wind_kph} km/h</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>

            <Text style={{ fontSize: 30, alignSelf: 'center', margin: 20 }}>Air Quality in your City</Text>

            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/co2.png')} />
                    <Text style={styles.infoText}>{weatherData.current.air_quality.co} μg/m3</Text>
                    <Text style={styles.infoText}>Carbon Monoxide</Text>
                </View>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/o3.png')} />
                    <Text style={styles.infoText}>{weatherData.current.air_quality.o3} μg/m3</Text>
                    <Text style={styles.infoText}>Ozone </Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/no2.png')} />
                    <Text style={styles.infoText}>{weatherData.current.air_quality.no2} μg/m3</Text>
                    <Text style={styles.infoText}>Nitrogen dioxide</Text>
                </View>
                <View style={styles.info}>
                    <Image style={styles.smallIcon} source={require('../assets/so2.png')} />
                    <Text style={styles.infoText}>{weatherData.current.air_quality.so2} μg/m3</Text>
                    <Text style={styles.infoText}>Sulphur dioxide </Text>
                </View>
            </View>
        </View>
    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',

    }, logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }, largeIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    c_temp: {
        fontSize: 70,
    },
    desc: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    extraInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,

    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        shadowColor: 'black',
        elevation: 20
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        alignSelf: 'center'
    },
    infoText: {
        fontSize: 18,
        textAlign: "center",
    },

})