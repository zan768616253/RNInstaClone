import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import {SwitchNavigator, TabNavigator, StackNavigator} from 'react-navigation'
import {MainFeed, Login, Profile, Camera, Register} from './components/screens/'

const Tabs = TabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
})

const IntroStack = StackNavigator({
    register: Register,
    login: Login
})

const MainStack = SwitchNavigator({
    intro: IntroStack,
    main: Tabs
})

class InstaClone extends Component {
    render () {
        return (
            <MainStack/>
        )
    }
}

export default InstaClone