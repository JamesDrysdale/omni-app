import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <Text>This will be the Home page.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // content will take up all of the available space
        backgroundColor: '#fff', //White background
        alignItems: 'center',
        justifyContent: 'center', //content is horizontally and verticaly centered
    }
});