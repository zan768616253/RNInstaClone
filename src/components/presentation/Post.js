import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'

class Post extends Component {

    constructor() {
        super()
        this.state = {
            liked: false,
            screenWidth: Dimensions.get('window').width
        }
    }

    componentDidMount() {
    }

    likeToggle() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render () {
        const imgHeight = Math.floor(this.state.screenWidth)
        const imgSelection = this.props.item.index % 2 === 0 ?
            'https://lh3.googleusercontent.com/1g13m7ILAVBgayNu9ShzjbWXpilPsoRjPW25qS4z2-MPhb686_lunPqSL45cAwDtJirf-XAn8yzIj9I0c0tWOJ0d' :
            'https://lh3.googleusercontent.com/2T8lgHfPMdhtykDT7-gWY4VDSZLUJhwU2Hxm-RM9npLs_6CcIC9eW3uZ6eu40KEBp_qli38ySx3oSFo8uV5Yggj3iQ'
        const imgUri = imgSelection +
            '=s' + imgHeight + '-c'
        const heartIconColor = this.state.liked ? 'rgb(252, 61, 57)' : null

        return (
            <View>
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
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggle()
                    }}>
                    <Image
                        style={{width: this.state.screenWidth, height: 360}}
                        source={{uri: imgUri}}
                    />
                </TouchableOpacity>
                <View style={style.iconBar}>
                    <Image
                        style={[style.icon, {height: 45, width: 45, tintColor: heartIconColor}]}
                        source={config.images.heartIcon} />
                    <Image style={[style.icon, {height: 36, width: 36}]} source={config.images.bubbleIcon} />
                    <Image
                        resizeMode='stretch'
                        style={[style.icon, {height: 50, width: 40}]}
                        source={config.images.arrowIcon} />
                </View>
                <View style={style.iconBar}>
                    <Image
                        style={[style.icon, {height: 30, width: 30}]}
                        source={config.images.heartIcon} />
                    <Text>128 Likes</Text>
                </View>
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
        height: config.styleConstant.rowHeight,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        width: 100 + '%',
        height: config.styleConstant.rowHeight,
        borderColor: 'rgb(233, 233, 233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 5
    }
})

export default Post