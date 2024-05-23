import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { useState } from 'react';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        console.log({ name, email, password, confirmPassword, phone });
    };

    return (
        <View style={styles.tela}>
            <View style={styles.espaco}>
                <Image source={require('../assets/images/sesi-logo-removebg-preview.png')} style={styles.imagem} />

                <Input
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={text => setName(text)}
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />

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
                            name='eye'
                            type='evilicon'
                            color='#000'
                            size={30}
                        />
                    }
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />

                <Input
                    label="Confirme a Senha"
                    placeholder="Confirme sua senha"
                    rightIcon={
                        <Icon
                            name='eye'
                            type='evilicon'
                            color='#000'
                            size={30}
                        />
                    }
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry={true}
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />

                <Input
                    label="Telefone"
                    placeholder="Digite seu telefone"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    keyboardType="phone-pad"
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />

                <Button title="Registrar" onPress={handleRegister} containerStyle={styles.buttonContainer} />

                <View style={styles.espacolink}>
                    <Link href={'/Sobre'} asChild>
                        <Pressable style={styles.link}>
                            <Text>Já tem uma conta? Entrar</Text>
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
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        padding: 15,
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
