import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

class InstaClone extends Component {

    constructor() {
        super()
        this.state = {
            screenWidth: Dimensions.get('window').width
        }
    }

    componentDidMount() {
    }

    render () {
        const imgHeight = Math.floor(this.state.screenWidth * 1.1)
        const imgUri = 'https://lh3.googleusercontent.com/2T8lgHfPMdhtykDT7-gWY4VDSZLUJhwU2Hxm-RM9npLs_6CcIC9eW3uZ6eu40KEBp_qli38ySx3oSFo8uV5Yggj3iQ' +
            '=s' + imgHeight + '-c'

        return (
            <View style={{flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={ style.tempNav } >
                    <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>Instagram</Text>
                </View>
                <View style={ style.userBar }>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={ style.userPic}
                            source={{
                                uri: 'https://lh3.googleusercontent.com/Si1B9kdcWBpQuCBisJpG3KDjLk23JKECNLhhG6iVD5v-7T-aozILyHL60AX3yrSyv9H1hBzp8QARhrlvLoF6VpN4'
                            }}
                        />
                        <Text style={{marginLeft: 10}}>RyanAByrne</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 30}}>...</Text>
                    </View>
                </View>
                <Image
                    style={{width: this.state.screenWidth, height: 400}}
                    source={{uri: imgUri}}
                />
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
    },
    userBar: {
        width: 100 + '%',
        height: 50,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
})

export default InstaClone