import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { SneakersArray } from "../../productData/productData";
import Icon from "react-native-vector-icons/AntDesign";

const ProductList = () => {
    return (
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
    }
});
