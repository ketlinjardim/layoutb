import React, { useState } from 'react';
import { View, StyleSheet,Image,Pressable,Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { Link } from 'expo-router';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.tela}>
            <View style={styles.espaco}>
                <Image source={require('../assets/images/sesi-logo-removebg-preview.png')} style={styles.imagem} />

                <Input
                    label="Email"
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />

                <Input
                    label="Senha"
                    placeholder="Digite sua senha"
                    rightIcon={
                        <Icon
                            name={showPassword ? 'eye-slash' : 'eye'}
                            type='font-awesome'
                            color='#000'
                            onPress={togglePasswordVisibility}
                            size={25}
                        />
                    }
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={!showPassword}
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />

                <Button title="Entrar" onPress={() => console.log(email, password)} containerStyle={styles.buttonContainer} />

                <View style={styles.espacolink}>
                    <Link href={'/sobre'} asChild>
                        <Pressable style={styles.link}>
                            <Text>Cadastre-se</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    espaco: {
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    input: {
        fontSize: 16,
    },
    inputContainer: {
        marginVertical: 10,
    },
    espacolink: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    link: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    imagem: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 10,
    },
});
