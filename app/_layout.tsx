import {Stack} from 'expo-router'

export default function StackLayout()
{
    return(
        <Stack>
          <Stack.Screen name='index'  options={{headerTitle : 'Home'}}/>
          <Stack.Screen name='sobre'  options={{headerTitle : 'Sobre'}} />
          <Stack.Screen name='perfil'  options={{headerTitle : 'Perfil'}} />
        </Stack>
    )
}