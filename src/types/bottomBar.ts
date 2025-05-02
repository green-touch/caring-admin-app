import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Main: undefined;
  Demo: undefined;
  Login: undefined;
};

type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;
type DemoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Demo'>;
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export interface MainScreenProps {
  navigation: MainScreenNavigationProp;
}

export interface DemoScreenProps {
  navigation: DemoScreenNavigationProp;
}

export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}
