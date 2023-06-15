import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Stylesheet} from 'react-native';
import axios from 'axios'; //Bilioteca

//Defina el componente NewsList como una funcion que devuelve la interfaz de usuario de la lista
//de noticias

const NewsList = ({navigation}) => { //declaramos una funcion(componente)
    const [news, setNews] = useState([]); //crear un arreglo vacio con una variable de estado

    useEffect(() => {
        fetchNews();//realiza una solicitud GET a la API
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top.headlines', {
                params: {
                    country: 'us', //código del pais deseado
                    apiKey: '44de9909569e45b1ba9b0b73b007ca83' //código de la API
                },
            });
            setNews(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <View style = {styles.container}>
            <FlatList
                data = {news}
                renderItems = {({ item }) =>(
                    <TouchableOpacity style= {styles.newsItem}
                    Key = {item.id}
                    onPress = {() => navigation.navigate('NewsDetail', {newsItem: item})}
                    >
                        <Text style = {styles.title}>{item.title}</Text>
                        <Text style= {styles.description}>{item.description}</Text>

                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id?.toString()}
            />
        </View>
    );
};

//Agregar estilo al componente NewsList

const styles = Stylesheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    newsItem: {
        marginBotton: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 14,
    },
});
export default NewsList;