import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { SneakersArray } from "../../productData/productData";
import Icon from "react-native-vector-icons/AntDesign";
import Bag from "react-native-vector-icons/Feather";
import LocaleScreen from '../../components/locale/locale';
import NavBar from '../../components/navBar/navBar';
import { useNavigation } from '@react-navigation/native';

interface Sneaker {
    id: number;
    img: string;
    name: string;
    price: number;
    favorite: boolean;
    category: string;
}

const HomeScreen = () => {

    const [searchValue, setSearchValue] = useState<string>("");
    const [sneakers, setSneakers] = useState<Sneaker[]>(SneakersArray);
    const [filterSneakers, setFilterSneakers] = useState<Sneaker[]>([]);
    const navigation = useNavigation();

    const setFavorite = (event: boolean, id: number) => {
        setSneakers((prevSneakers) => {
            const updatedSneakers = prevSneakers.map((sneaker) => {
                if (sneaker.id === id) {
                    return {
                        ...sneaker,
                        favorite: event,
                    };
                }
                return sneaker;
            });
            return updatedSneakers;
        });
    };


    const handleSearch = (text: any) => {
        setSearchValue(text);
        if (text.length === 0) {
            setFilterSneakers([])
        } else {
            const filteredItems = sneakers.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setFilterSneakers(filteredItems);
        }
    };

    return (
        <View>
            <ScrollView style={{ paddingHorizontal: 20, backgroundColor: "#fff" }}>

                <View style={styles.header}>
                    <TouchableOpacity style={styles.menuButton}>
                        <View style={styles.menuIcon} />
                        <View style={styles.menuIcon} />
                        <View style={styles.menuIcon} />
                    </TouchableOpacity>
                    <Image source={require('../../../assets/logo.png')} />
                    <TouchableOpacity style={styles.menuButton}>
                        <Bag name="shopping-bag" size={23} color={"#262626"} style={styles.bagIcon} />
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: "500",
                            width: 20,
                            height: 20,
                            position: 'absolute',
                            top: -10,
                            right: 0,
                            backgroundColor: "#fd2e2e",
                            borderRadius: 100,
                            color: "#fff"
                        }}>1</Text>
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
                        onChangeText={handleSearch}
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
                    <TouchableOpacity style={{ marginBottom: 16 }} onPress={() => navigation.navigate("ProductList" as never)}>
                        <Text style={{ fontWeight: "400", color: "#212121", fontSize: 18 }}>Todos Lançamentos</Text>
                    </TouchableOpacity>

                    {
                        filterSneakers.length > 0 ?
                            <View style={styles.sneakersContainer}>
                                {filterSneakers.map((e: any) => {
                                    return (
                                        <TouchableOpacity key={e.id} style={styles.sneakerItem}>
                                            <View style={styles.sneakerImageContainer}>
                                                <Image source={e.img} style={styles.sneakerImage} />
                                                {e.favorite === true ? (
                                                    <TouchableOpacity style={styles.favoriteButton} onPress={() => setFavorite(false, e.id)}>
                                                        <Icon name="heart" size={23} color={"#FA1050"} style={styles.favoriteIcon} />
                                                    </TouchableOpacity>
                                                ) : (
                                                    <TouchableOpacity style={styles.favoriteButton} onPress={() => setFavorite(true, e.id)}>
                                                        <Icon name="hearto" size={23} color={"#ccc"} style={styles.favoriteIcon} />
                                                    </TouchableOpacity>
                                                )}
                                            </View>
                                            <Text style={styles.sneakerName}>{e.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            :
                            <View style={styles.sneakersContainer}>
                                {sneakers.map((e: any) => {
                                    if (e.category && e.category.toLowerCase() === "new arrival") {
                                        return (
                                            <TouchableOpacity key={e.id} style={styles.sneakerItem}>
                                                <View style={styles.sneakerImageContainer}>
                                                    <Image source={e.img} style={styles.sneakerImage} />
                                                    {e.favorite === true ? (
                                                        <TouchableOpacity
                                                            style={styles.favoriteButton}
                                                            onPress={() => setFavorite(false, e.id)}
                                                        >
                                                            <Icon name="heart" size={23} color={"#FA1050"} style={styles.favoriteIcon} />
                                                        </TouchableOpacity>
                                                    ) : (
                                                        <TouchableOpacity
                                                            style={styles.favoriteButton}
                                                            onPress={() => setFavorite(true, e.id)}
                                                        >
                                                            <Icon name="hearto" size={23} color={"#ccc"} style={styles.favoriteIcon} />
                                                        </TouchableOpacity>
                                                    )}
                                                </View>
                                                <Text style={styles.sneakerName}>{e.name}</Text>
                                                <Text style={styles.sneakerName}>{e.category}</Text>
                                            </TouchableOpacity>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </View>
                    }
                </View>

            </ScrollView>

            {/* <NavBar /> */}
        </View>
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
        backgroundColor: "#dfdfdf",
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
        padding: 9,
        marginRight: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        width: 33,
        height: 32,
    }

});

export default HomeScreen;
