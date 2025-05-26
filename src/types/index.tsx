import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Cadastro: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;