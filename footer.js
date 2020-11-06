import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('OMNI Galactic')}
            >
               <Text>Home</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
               <Text>About</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
               <Text>Quotes</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
               <Text>Catalogue</Text> 
            </TouchableOpacity>


        </View>  
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button: {
        padding: 20,
    }
})