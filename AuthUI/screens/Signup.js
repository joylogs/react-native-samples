import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function Signup() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Signup</Text>
            </View>

            <View style={styles.text2}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={style.signupText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* Username */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input InputLeftElement={
                        <Icon as={<FontAwesome5 name='user-secret'></FontAwesome5>}
                            size={'sm'}
                            m={2}
                            _light={{
                                color: 'black',
                            }}
                            _dark={{
                                color: 'gray.300'
                            }}
                        ></Icon>
                    }
                        variant={'outline'}
                        placeholder='Username'
                        _light={{
                            placeholderTextColor: 'blueGray.400'
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGray.50'
                        }}
                    >
                    </Input>
                </View>
            </View>

            {/* Email */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input InputLeftElement={
                        <Icon as={<MaterialCommunityIcons name='email'></MaterialCommunityIcons>}
                            size={'sm'}
                            m={2}
                            _light={{
                                color: 'blue.100'
                            }}
                            _dark={{
                                color: 'blue.300'
                            }}
                        >
                        </Icon>
                    }
                        variant={'outline'}
                        placeholder='Email'
                        _light={{
                            placeholderTextColor: 'blueGray.400'
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGray.50'
                        }}
                    >
                    </Input>
                </View>
            </View>

            {/* Password */}
            <View style={styles.buttonStyle}>
                <View styles={styles.emailInput}>
                    <Input InputLeftElement={
                        <Icon as={<FontAwesome5 name='key'></FontAwesome5>}
                            size={'sm'}
                            m={2}
                            _light={{
                                color: 'black'
                            }}
                            _dark={{
                                color: 'gray.300'
                            }}
                        >
                        </Icon>
                    }
                        variant={'outline'}
                        secureTextEntry={true}
                        placeholder='Password'
                        _light={{
                            placeholderTextColor: 'blueGray.400'
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGray.50'
                        }}
                    >
                    </Input>
                </View>
            </View>

            {/* Repeat Password */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input InputLeftElement={
                        <Icon as={<FontAwesome5 name='key'></FontAwesome5>}
                            size={'sm'}
                            m={2}
                            _light={{
                                color: 'black'
                            }}
                            _dark={{
                                color: 'gray.300'
                            }}
                        >
                        </Icon>
                    }
                        variant={'outline'}
                        secureTextEntry={true}
                        placeholder='Repeat Password'
                        _light={{
                            placeholderTextColor: 'blueGray.400'
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGray.50'
                        }}
                    >
                    </Input>
                </View>
            </View>

            {/* Button  */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign}>
                    REGISTER NOW
                </Button>
            </View>

            {/* Line */}
            <View style={styles.lineStyle}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }}></View>
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }}></View>
            </View>

            {/* Box */}
            <View style={styles.boxStyle}>
                <Box onPress={() => navigation.navigate('')}
                    style={{ height: 80, width: 80 }}
                    shadow={3}
                >
                </Box>

            </View>

        </View>
    )
}