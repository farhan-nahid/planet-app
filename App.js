import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import spacing from './src/theme/spacing';
import typography from './src/theme/typography';

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
      <Text style={{ marginTop: spacing[10], fontFamily: typography.primaryBold }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
