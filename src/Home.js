import React, { Component } from 'react'

import { View } from 'react-native'

export default class Home extends Component {
    constructor(props){
        super()
    }

    render(){
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
}