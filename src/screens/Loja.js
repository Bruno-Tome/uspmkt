import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../services/api';
class Profile extends Component {
    static navigationOptions = {
        title: 'Loja',
        tabBarIcon: <Ionicons name ={'ios-cart'} size ={20}/>
    };

    //estado inicial
    state = {
        productInfo: {},
        docs: [],
        page: 1,
    };

    //ao criar tela, se executa:
    componentDidMount() {
        this.loadProducts();

        //TODO: implementar fonte
        // Font.loadAsync({
        //     'montserrat': require('../../assets/fonts/montserrat.otf'), // Bruno -> tem um repo que eu to usando chamado react-native-typography pra usar umas outras fontes
        // });
    }

    //função de recuperar produtos
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({
            docs: [...this.state.docs, ...docs],
            productInfo,
            page
        });
    };

    //recuperar mais produtos => funcionalidade de "lista infinita"    
    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;
        else {
            const pageNumber = page + 1;
            this.loadProducts(pageNumber);
        }
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Image
                style={styles.imageProduct}
                source={{ uri: item.imageuri }} />
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.productPrice}>U$P{item.preco}</Text>

            <TouchableOpacity
                style={styles.productButton}
                onPress={{}}>
                <Text style={styles.productButtonText}>Ver mais detalhes</Text>
            </TouchableOpacity>
        </View>
    );

    //renderizar componente
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container,{flexDirection:"column"}}>
                <View backgroundColor = "#009292">
                    <Image
                        style={styles.imageLoja}
                        source={{ uri: 'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/10442932_848664681813956_9053845739487078614_n.jpg?_nc_cat=105&_nc_ohc=IgvGbNq98PEAQkBZC3LlF4atXc9OLrooQmGUneGvK9FXIKw5OKK4lygHA&_nc_ht=scontent-mxp1-1.xx&oh=cc91a014ebee0e55ef83d044e69103c9&oe=5E3F4CEF' }}>

                    </Image>
                    <Text style={styles.textLoja}>
                        Atlética CAASO
                    </Text>
                </View>
                <View style={styles.listHeader}>
                    
                    <FlatList
                        contentContainerStyle={styles.list}
                        horizontal={false}
                        data={this.state.docs}
                        numColumns ={3}
                        keyExtractor={item => item._id}
                        renderItem={this.renderItem}
                        onEndReached={this.loadMore}
                        onEndReachedThreshold={0.1}
                    />
                </View>
            </View>
            </SafeAreaView>
            
               
            
            

            // <View >
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            //     <Produto />
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fafafa',
        flexWrap:'wrap',
        flexBasis: 0,
    },

    listHeader: {
        marginTop: 200,
    },

    list: {
        padding: 10,
    },

    imageLoja: {
        width: '100%',
        opacity: 50

    },

    textLoja: {
        position: 'absolute',
        width: 150,
        height: 31,
        left: 16,
        top: 136,
        backgroundColor:"#0095AD",

        //TODO: implementar fonte
        // fontFamily: 'montserrat',
        fontWeight: '900',
        fontSize: 34,
        lineHeight: 41,

        /* White */

        color: '#FFFFFF',
        textShadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: '#000000',
    },

    // list: {
    //     marginHorizontal: 20,
    //     marginTop: 20,
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     justifyContent: "space-between",
    //     flexWrap: 'wrap'
    // },

    productContainer: {
        backgroundColor: '#fff',
        width: 120,
        alignContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        margin: 5,
        
    },

    productName: {
        marginTop: 5,
        fontSize: 18,
        fontStyle: 'italic',
        color: '#333',
    },

    productPrice: {
        fontSize: 16,
        color: '#777',
        marginTop: 2,
        lineHeight: 24,
    },

    productButton: {
        height: 32,
        padding: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    productButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold',
    },

    imageProduct: {
        backgroundColor: 'black',
        width: 120,
        height: 200,
        borderRadius: 8
    }

});

export default Profile;