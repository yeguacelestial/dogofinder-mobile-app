import React from 'react'

import { View, Text, BackHandler } from 'react-native'


function Login({ navigation }) {

  const disableBackButton = () => {
    BackHandler.exitApp()
    return true
  }

  // componentDidMount
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', disableBackButton)
    
    // componentWillUnmount
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
    }
  },[])

  return(
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Text>
          Login
      </Text>
    </View>
  )
}

export default Login