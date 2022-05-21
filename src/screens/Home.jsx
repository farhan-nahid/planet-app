import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlanetHeader from '../components/PlanetHeader';
import Text from '../components/Text/Text';
import colors from '../theme/colors';
import spacing from '../theme/spacing';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <Text preset='h3'>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[10],
    backgroundColor: colors.black,
    height: '100%',
  },
});
