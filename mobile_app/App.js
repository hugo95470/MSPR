import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

import PlayScene from './src/PlayScene';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const App = () => (
    <View style={styles.root}>
      <Text>Hello</Text>
        <ViroARSceneNavigator
            initialScene={{ scene: PlayScene }}
        />
    </View>
);

export default App;