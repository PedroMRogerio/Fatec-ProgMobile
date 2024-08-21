import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';
import { router } from 'expo-router';
import DisplayAnImage from '../components/styled-img';

export default function Login() {

    const handleLogin = () => {
        router.replace('home')
    }

  return (
    <View style={styles.container}>
      <DisplayAnImage imageUri={require("https://i.pinimg.com/originals/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg")} />
      <Text>Login</Text>
      <StyledInput 
      placeholder='Digite seu login' 
      onChangeText={(texto) => console.log(texto)}
      />
      <StyledInput 
      placeholder='Digite sua senha' 
      onChangeText={(texto) => console.log(texto)}
      />
      <StyledButton 
      text='Entrar' 
      onClick={handleLogin}
      color='blue' 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
});
