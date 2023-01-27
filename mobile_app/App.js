import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

import PlayScene from './src/PlayScene';
import Products from './src/Products';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
});


const App = () => (
    <View style={styles.root}>
      <Products/>
    </View>
);

export default App;