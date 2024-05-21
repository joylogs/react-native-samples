import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


function Login() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>
                    Login
                </Text>
            </View>
            <View style={styles.text2}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.signupText}>SignUp</Text>
                </TouchableOpacity>
            </View>

            {/* Username or Email Input Field */}
            <View style={style.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input InputLeftElement={
                        <Icon as={<FontAwesome5 name="user-secret" />} />
                    }>
                    </Input>
                </View>
            </View>
        </View>
    )
}