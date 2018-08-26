import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native'


class Register extends Component {
    constructor() {
        super()
        this.state = {
            credentilas: {
                login: "",
                password: ""
            }
        }
    }

    updateText(text) {
        alert(text)
    }

    register() {
        this.props.navigation.navigate('main')
    }
    render () {
        return (
            <View
                style={{height: 100 + '%',
                    width: 100 + '%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>Register PAGE</Text>
                <TextInput
                    onChangeText={this.updateText.bind(this)}
                    placeholder='Username' style={styles.input}/>
                <TextInput secureTextEntry placeholder='Password' style={styles.input} />
                <Button title='Signup' onPress={() => {this.register()}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 + '%',
        marginHorizontal: 50,
        // backgroundColor: 'rgb(255, 255, 255)',
        marginBottom: 18
    }
})

export default Register