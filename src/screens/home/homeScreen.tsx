import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { SneakersArray } from "../../productData/productData";
import Icon from "react-native-vector-icons/AntDesign";
import Bag from "react-native-vector-icons/Feather";
import LocaleScreen from '../../components/locale/locale';

const HomeScreen = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <ScrollView style={{ paddingHorizontal: 20 }}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <View style={styles.menuIcon} />
                    <View style={styles.menuIcon} />
                    <View style={styles.menuIcon} />
                </TouchableOpacity>
                <Image source={require('../../../assets/logo.png')} />
                <TouchableOpacity style={styles.menuButton}>
                    <Bag name="shopping-bag" size={23} color={"#262626"} style={styles.bagIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                    <Icon name="search1" size={20} color="#333" />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Nike Balance 574 "
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
            </View>

            <LocaleScreen />

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-nike.png')} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-adidas.png')} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-nb.png')} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-vans.png')} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-nike.png')} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-adidas.png')} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-nb.png')} style={styles.image} />
                </View>
                <View style={styles.itemContainer}>
                    <Image source={require('../../../assets/logo-vans.png')} style={styles.image} />
                </View>
            </ScrollView>

            <View>
                <TouchableOpacity style={{ marginBottom: 16 }}>
                    <Text style={{ fontWeight: "400", color: "#212121", fontSize: 18 }}>Novos Lançamentos</Text>
                </TouchableOpacity>

                <View style={styles.sneakersContainer}>
                    {SneakersArray.map((e) => { // Retorna apenas os sneakers com ID menor ou igual a 6
                        if (e.id <= 6) {// Retornando apenas 6 tenis
                            return (
                                <TouchableOpacity key={e.id} style={styles.sneakerItem}>
                                    <View style={styles.sneakerImageContainer}>
                                        <Image source={e.img} style={styles.sneakerImage} />
                                        <TouchableOpacity style={styles.favoriteButton}>
                                            {e.favorite === true ? (
                                                <Icon name="heart" size={23} color={"#FA1050"} style={styles.favoriteIcon} />
                                            ) : (
                                                <Icon name="hearto" size={23} color={"#ccc"} style={styles.favoriteIcon} />
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.sneakerName}>{e.name}</Text>
                                </TouchableOpacity>
                            );
                        } else {
                            return null;
                        }
                    })}
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        justifyContent: "space-between",
    },
    menuButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#f0f0f0",
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    menuIcon: {
        width: 23,
        height: 2,
        borderRadius: 100,
        backgroundColor: "#262626",
    },
    bagIcon: {
        elevation: 3,
    },
    sneakersContainer: {
        gap: 20,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sneakerItem: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "47%",
    },
    sneakerImageContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 170,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
    },
    sneakerImage: {
        maxWidth: '90%',
        maxHeight: '40%',
        marginTop: 60,
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoriteIcon: {
        elevation: 3,
    },
    sneakerName: {
        color: '#000',
        fontWeight: "400",
        marginTop: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        marginTop: 16,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    container: {
        paddingVertical: 16,
    },
    itemContainer: {
        backgroundColor: "#f0f0f0",
        borderRadius: 100,
        padding: 10,
        marginRight: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        width: 33,
        height: 30,
    }

});

export default HomeScreen;
