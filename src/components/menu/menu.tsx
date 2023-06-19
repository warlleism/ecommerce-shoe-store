import React from "react";
import { View, Dimensions, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Bag from "react-native-vector-icons/Feather";
import Bell from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get('window');

const Menu = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/shoes-background.png')} style={styles.backgroundImage} />
            <View style={styles.closeButton}>
                <Icon name="close" size={26} color={"#535252"} />
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.userInfoContainer}>
                    <Image source={require('../../../assets/user.png')} style={styles.userImage} />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Gabriela Oliveira</Text>
                        <Text style={styles.userRole}>Usuária</Text>
                    </View>
                </View>
                <View style={styles.menuItems}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="user" size={26} color={"#535252"} />
                        <Text style={styles.menuText}>Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="shoppingcart" size={26} color={"#535252"} />
                        <Text style={styles.menuText}>Carrinho</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Bell name="notifications-outline" size={26} color={"#535252"} />
                        <Text style={styles.menuText}>Notificações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Bag name="shopping-bag" size={26} color={"#535252"} />
                        <Text style={styles.menuText}>Compras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="hearto" size={26} color={"#535252"} />
                        <Text style={styles.menuText}>Favoritos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logoutContainer}>
                    <Icon name="logout" size={23} color={"#535252"} />
                    <Text style={styles.logoutText}>Log out</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        overflow: "hidden",
        alignItems: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
        width: width - 80,
        paddingHorizontal: 20,
        height: "100%",
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    backgroundImage: {
        width: "200%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },
    closeButton: {
        alignSelf: "flex-start",
        borderWidth: 2,
        borderColor: "#53525269",
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        width: 34,
        height: 34,
    },
    menuContainer: {
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 3,
        height: "80%",
        width: "90%",
    },
    userInfoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        zIndex: 3,
        marginLeft: 16,
    },
    userImage: {
        borderWidth: 2,
        borderColor: "#535252",
        width: 58,
        height: 60,
        borderRadius: 100,
    },
    userInfo: {},
    userName: {
        fontWeight: "600",
        color: "#0F0F0F",
        fontSize: 19,
    },
    userRole: {
        fontWeight: "300",
        color: "#535252",
        fontSize: 16,
    },
    menuItems: {
        display: "flex",
        flexDirection: "column",
        gap: 24,
        marginLeft: 16,
        zIndex: 3,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    menuText: {
        fontWeight: "600",
        color: "#0F0F0F",
        fontSize: 15,
    },
    logoutContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginLeft: 16,
    },
    logoutText: {
        fontWeight: "500",
        color: "#0F0F0F",
        fontSize: 19,
    },
});

export default Menu;