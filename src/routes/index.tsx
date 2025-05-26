import { ScreenCadastro, ScreenHome } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ScreenHome} options={{animation: 'slide_from_left'}} />
        <Stack.Screen name="Cadastro" component={ScreenCadastro} options={{animation: 'slide_from_right'}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}