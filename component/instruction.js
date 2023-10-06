import React from 'react';
import { View, StatusBar, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from './assets/colors/colors';
const data = [
    {
        title: 'Screen One For Slider Intro 1.',
        text: 'Description.Say something cool.This is Description.',
        image: require('./assets/images/notebook.png'),
        bg: '#59b2ab',
    },
    {
        title: 'Screen One For Slider Intro 2.',
        text: 'Description.Say something cool.This is Description.',
        image: require('./assets/images/spotify.png'),
        bg: '#febe29',
    },
    {
        title: 'Screen One For Slider Intro 3.',
        text: "I'm already out of descriptionsLorem ipsum bla bla bla",
        image: require('./assets/images/shirt.png'),
        bg: '#22bcb5',
    },
];


const Instructions = () => {

    const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    const keyExtractor = (item) => item.title;

    const renderDoneButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Done</Text>
            </View>
        );
    };
    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    };
    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    };

    return (

        <View style={{flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                data={data}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },

    image: {
        marginVertical: 10,
        height: 200,
        width: 200,
    },

    title: {
        fontSize: 24,
        fontFamily: 'DelaGothicOne-Regular',
        textAlign: 'center',
        marginHorizontal: 45,
        color: colors.black,
    },
    text: {
        fontSize: 18,
        color: colors.gray,
        fontFamily: 'DancingScript-Regular',
        textAlign: 'center',
        marginHorizontal: 45,
        marginTop: 20,
    },
    rightTextWrapper:{  
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        textAlign: 'center',
        },

    rightText:{
        color: colors.blue,
        fontSize: 14,
        fontFamily: 'DelaGothicOne-Regular',
    },
    leftTextWrapper:{
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        textAlign: 'center',
    },
    leftText:{
        color: colors.blue,
        fontSize: 14,
        fontFamily: 'DelaGothicOne-Regular',
    },
    dotStyle: {
        backgroundColor: colors.bluefaded,
    },
    activeDotStyle:{
        backgroundColor: colors.blue,
    },
});

export default Instructions;