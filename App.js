import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/Text/Text';

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text preset='h1'>Open up App.js to start working on your app!</Text>
      <Text preset='h2'>Open up App.js to start working on your app!</Text>
      {/* <Text style={{ marginTop: spacing[10], fontFamily: typography.primaryBold }}>
        Open up App.js to start working on your app!
      </Text> */}
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
