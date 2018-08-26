import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'
import {PostFeed} from '../container'

class InstaClone extends Component {

    render () {

        return (
            <View style={{flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={ style.tempNav } >
                    <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}

const style = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomColor: 'rgb(233, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InstaClone