import { View, Text } from "react-native"
import { Link } from 'expo-router'
import DisplayAnImage from "../components/styled-img"

export default function Home(){
    return (
        <View>
            <Text>Login com sucesso!</Text>
            <DisplayAnImage imageUri={require("https://i.pinimg.com/originals/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg")} />
            <Text> Usuário</Text>
            <DisplayAnImage imageUri={require("https://w7.pngwing.com/pngs/206/889/png-transparent-document-file-format-directory-data-storage-computer-icons-computer-angle-text-rectangle.png")} />
            <Text> Documentos</Text>
            <DisplayAnImage imageUri={require("https://w7.pngwing.com/pngs/144/225/png-transparent-computer-icons-gear-wheel-others-miscellaneous-share-icon-cogwheel.png")} />
            <Text> Configurações</Text>
            <Link href='/'>Voltar para home</Link>
        </View>
    )
}