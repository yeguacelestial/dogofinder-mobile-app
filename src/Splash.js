import React, { Component } from 'react'
import { View } from 'react-native'

import LottieView from 'lottie-react-native'


export default class Splash extends Component {

    render() {
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#66ffa6'
                }}
            >
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop = { false }
                    speed = {0.9}
                    onAnimationFinish = {() => {
                        console.log('Splash Screen finished!')
                        // this.props.navigation.replace('Home')
                    }}
                />
            </View>
        )
    }

}