import React from 'react'

import { View, Text, BackHandler, Image, StyleSheet, Dimensions } from 'react-native'

import AppLoading from 'expo-app-loading'
import { Asset, useAssets } from 'expo-asset'


const { width, height } = Dimensions.get('window')


function LoginScreen({ navigation }) {

  /* Loading assets */
  const [assets] = useAssets([
    require('../assets/bg.jpeg')
  ])

  const disableBackButton = () => {
    BackHandler.exitApp()
    return true
  }

  // // componentDidMount
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', disableBackButton)
    
    // componentWillUnmount
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
    }
  },[])

  if (!assets) {
    return (
      <AppLoading/>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'flex-end'}}>
      
      {/* LOGIN BACKGROUND IMAGE */}
      <View style={{...StyleSheet.absoluteFill}}>
        <Image
          source={require('../assets/bg.jpeg')}
          style={{ flex:1, height: null, width: null }}
        />
      </View>

      {/* BUTTONS SECTION */}
      <View style={{height: height/3, justifyContent: 'center'}}>

        <View style={styles.button}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            SIGN IN
          </Text>
        </View>

        <View style={{...styles.button, backgroundColor: '#2E71DC'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            SIGN IN WITH FACEBOOK
          </Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#fff',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
})

export default LoginScreen