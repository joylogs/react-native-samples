import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, stylingProps } from 'native-base'
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
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon as={<FontAwesome5 name="user-secret" />}
                                size="sm"
                                m={2}
                                _light={{ color: 'black' }}
                                _dark={{ color: 'gray.300' }}
                            />
                        }
                        variant={'outline'}
                        placeholder='Username or Email'
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50"
                        }}
                    >
                    </Input>
                </View>
            </View>

            {/* Password Input Field */}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon as={<FontAwesome5 name="key" />}
                                size={'sm'}
                                m={2}
                                _light={{ color: 'black' }}
                                _dark={{ color: 'gray.300' }}
                            >
                            </Icon>
                        }
                        variant={'outline'}
                        secureTextEntry={true}
                        placeholder='Password'
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50"
                        }}
                    >
                    </Input>
                </View>
            </View>

            {/* Button  */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign}>
                    LOGIN
                </Button>
            </View>

            {/* Line */}
            <View style={styles.lineStyle}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }}></View>
            </View>

            {/* Box */}
            <View style={styles.boxStyle}>
                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80 }}
                    shadow={3}
                    _light={{
                        backgroundColor: 'gray.50'
                    }}
                    _dark={{
                        backgroundColor: 'gray.700'
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image roundedTop={'lg'}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/731/731985.png',
                            }}
                            alt='image'
                        />

                    </AspectRatio>

                </Box>

                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80 }}
                    shadow={3}
                    _light={{
                        backgroundColor: 'gray.50'
                    }}
                    _dark={{
                        backgroundColor: 'gray.700'
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image roundedTop={'lg'}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384065.png',
                            }}
                            alt='image'
                        />

                    </AspectRatio>

                </Box>

                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80 }}
                    shadow={3}
                    _light={{
                        backgroundColor: 'gray.50'
                    }}
                    _dark={{
                        backgroundColor: 'gray.700'
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image roundedTop={'lg'}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/281/281764.png',
                            }}
                            alt='image'
                        />

                    </AspectRatio>

                </Box>

                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80 }}
                    shadow={3}
                    _light={{
                        backgroundColor: 'gray.50'
                    }}
                    _dark={{
                        backgroundColor: 'gray.700'
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image roundedTop={'lg'}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
                            }}
                            alt='image'
                        />

                    </AspectRatio>
                </Box>

            </View>
        </View>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Login></Login>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    LoginText: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    signupText: {
        fontWeight: 'bold',
    },
    emailInput: {
        marginTop: 10,
        marginRight: 5
    },
    buttonStyle: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonStyleX: {
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15
    },
    buttonDesign: {
        backgroundColor: '#026efd'
    },
    lineStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center'
    },
    boxStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-around'
    }

})