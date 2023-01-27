import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import PlayScene from './PlayScene';

export default function Products(props) {
    
    let [products, setProducts] = useState([]);
    let [product, setProduct] = useState(undefined);
    let [isVrActive, setIsVrActive] = useState(false);

    useState(() => {

        async function getData() {
            await fetch('https://615f5fb4f7254d0017068109.mockapi.io/api/v1/products/')
            .then((text) => text.json())
            .then((res) => setProducts(res));

        }
        
        getData();
    }, [])

    var Details = ({item}) => {
        if(item.id != product) 
            return null

        return (
            <View>
                <Text style={{fontWeight: 'bold'}}>Description</Text>
                <Text>{item.details.description}</Text>

                <TouchableOpacity onPress={() => setIsVrActive(true)} style={{marginLeft: 'auto', marginRight: 10, marginBottom: 10, borderRadius: 19, marginTop: 20, backgroundColor: 'orange', padding: 10}}>
                    <Text>Voir en réalité augmenté</Text>
                </TouchableOpacity>
            </View>
        )
        };

    var renderItem = ({item}) => (
        <View style={{backgroundColor: '#FFE390', margin: 10, borderRadius: 19, padding: 20}}>
            <TouchableOpacity onPress={() => setProduct(item.id)} style={{flexDirection: 'row'}}>
                    <Text>{item.name}</Text>
                    <Text style={{marginLeft: 'auto'}}>{item.details.price} €</Text>
            </TouchableOpacity>
        
            <Details item={item}/>

        </View>
       
    );

    if(!isVrActive) {
        return (
            <FlatList data={products} renderItem={renderItem} keyExtractor={item => item.id} numColumns={1}/>
        )
    } else {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <ViroARSceneNavigator initialScene={{ scene: PlayScene }}/>

                <TouchableOpacity onPress={() => setIsVrActive(false)} style={{position: 'absolute', top: 20, left: 20, backgroundColor: 'orange'}}>
                    <Text style={{padding: 10, borderRadius: 19}}>Quitter</Text>
                </TouchableOpacity>
            </View>
        )
    }
}