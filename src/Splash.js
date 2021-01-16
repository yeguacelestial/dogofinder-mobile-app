import React from 'react'
import { View } from 'react-native'

import LottieView from 'lottie-react-native'


function Splash({ navigation }) {

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
        loop={false}
        speed={1}
        onAnimationFinish={() => {
          console.log('Splash Screen finished!')
          navigation.navigate('OnboardingScreen')
        }}
      />
    </View>
  )
}


export default Splash