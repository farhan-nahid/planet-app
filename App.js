import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    AntonioMedium: require('./assets/fonts/Antonio-Medium.ttf'),
    SpartanRegular: require('./assets/fonts/Spartan-Regular.ttf'),
    SpartanBold: require('./assets/fonts/Spartan-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  );
}
