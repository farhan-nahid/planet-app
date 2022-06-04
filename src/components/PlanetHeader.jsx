import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import Text from './Text/Text';

export default function PlanetHeader({ children }) {
  return (
    <View style={styles.container}>
      <Text preset='h2'>The Planet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[10],
    paddingVertical: spacing[10],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
  },
});
