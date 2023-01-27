import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
    ViroARScene,
    Viro3DObject,
    ViroAmbientLight,
    
} from 'react-viro';

const MarmelabLogo = () => (
    <Viro3DObject
        source={require('../assets/coffee/CoffeeMaker.obj')}
        resources={[require('../assets/coffee/CoffeeMaker.mtl')]}
        highAccuracyEvents={true}
        position={[1, -1, 1]}
        scale={[0.01, 0.01, 0.01]}
        rotation={[90, 100, 0]}
        type="OBJ"
    />
);

const PlayScene = () => (
    <ViroARScene displayPointCloud>
            <ViroAmbientLight color="#FFFFFF" />

            <MarmelabLogo />
    </ViroARScene>
);

export default PlayScene;