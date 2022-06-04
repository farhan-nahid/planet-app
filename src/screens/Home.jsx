import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
// import { View } from 'react-native-web';
import PlanetHeader from '../components/PlanetHeader';
import Text from '../components/Text/Text';
import PLANET_LIST from '../data/PLANET_LIST';
import colors from '../theme/colors';
import spacing from '../theme/spacing';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <View style={{ paddingHorizontal: spacing[10] }}>
        <Text preset='h3' style={{ marginVertical: spacing[7] }}>
          Home
        </Text>
        <FlatList
          data={PLANET_LIST}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: '100%',
  },
});
