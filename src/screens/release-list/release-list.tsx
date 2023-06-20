import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, TextInput } from "react-native";
import { SneakersArray } from "../../productData/productData";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface Sneaker {
    img: string;
    id: number;
    name: string;
    price: number;
    favorite: boolean;
    category: string;
}

const ProductList = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [sneakers, setSneakers] = useState<Sneaker[]>(SneakersArray);
    const [filterSneakers, setFilterSneakers] = useState<Sneaker[]>([]);

    const navigation = useNavigation();

    const setFavorite = (event: boolean, id: number) => {
        setFilterSneakers((prevSneakers) => {
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
        <ScrollView style={{ paddingHorizontal: 20, backgroundColor: "#fff" }}>
            <View style={{ paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("/" as never)}>
                    <Icon name="arrowleft" size={30} color={"#3d3d3d"} style={styles.favoriteIcon} />
                </TouchableOpacity>
                <Image source={require('../../../assets/logo.png')} />
                <View></View>
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

            <View style={{ marginBottom: 16, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: "400", color: "#212121", fontSize: 18 }}>Lançamentos</Text>
            </View>

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
                        })}
                    </View>
            }

        </ScrollView>
    )
}

export default ProductList;

const styles = StyleSheet.create({

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
        marginVertical: 16,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
});
