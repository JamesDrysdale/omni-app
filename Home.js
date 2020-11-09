import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, 
    ActivityIndicator, FlatList, Image, TouchableWithoutFeedback } from 'react-native';


export default function Home({navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5324d81aad3d4e54961490467f77fea9')
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error())
            .finally(() => finishLoading(false))
    }, []);

    const storyItem = ({item}) =>{
        return(
            <TouchableWithoutFeedback
                onPress={() =>
                    navigation.navigate('NewsDetail', {url: item.url})
                }
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: item.urlToImage}}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item) => item.url}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 100,
        width: '98%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
});