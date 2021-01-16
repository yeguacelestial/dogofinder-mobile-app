import React from 'react'

import { View, Text, BackHandler } from 'react-native'


function Home({ navigation }) {

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
          Home
      </Text>
    </View>
  )
}

export default Home