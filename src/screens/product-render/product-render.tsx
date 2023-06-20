import { useNavigation } from "@react-navigation/native";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign";
import Menu from "react-native-vector-icons/Feather";
import Bag from 'react-native-vector-icons/Feather';

const ProductRender = ({ ProductRender, CartStore }: any) => {

    const { addCart } = CartStore;
    const { detail, renderProduct } = ProductRender;
    const navigation = useNavigation();
    const [check, setCheck] = useState(false)
    const [tamanhos, setTamanhos] = useState(
        [
            {
                size: 39,
                state: false
            },
            {
                size: 41,
                state: false
            },
            {
                size: 42,
                state: false
            },
            {
                size: 45,
                state: false
            }
        ]
    )

    const handlerSize = (size: number) => {
        setTamanhos((prevSize) => {
            const updatedSize = prevSize.map((sneaker) => {
                if (sneaker.size === size) {
                    return {
                        ...sneaker,
                        state: true,
                    };
                } else {
                    return {
                        ...sneaker,
                        state: false,
                    };
                }
            });
            return updatedSize;
        });
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            {
                check
                    ?
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: 30,
                        right: 30,
                        zIndex: 2,
                        padding: 10,
                        backgroundColor: "#149a56",
                        borderRadius: 100
                    }}>
                        <Icon name="check" size={23} color={"#fff"} style={styles.favoriteIcon} />
                    </View>
                    :
                    null
            }

            {
                detail.map((e: any) => {
                    return (
                        <ScrollView key={e?.id} style={{ paddingHorizontal: 10 }}>
                            <View style={{
                                height: 400,
                                borderRadius: 40,
                                marginTop: 10,
                                backgroundColor: "#e8e8e8",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    paddingHorizontal: 10,
                                    width: "100%",
                                    display: "flex",
                                    marginTop: 25,
                                    marginBottom: 78,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("/" as never)}>
                                        <Icon name="arrowleft" size={27} color={"#232323"} style={styles.favoriteIcon} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 18, fontWeight: "600", color: "#232323" }}>Detalhe Do Tênis</Text>
                                    <TouchableOpacity>
                                        <Menu name="more-vertical" size={27} color={"#232323"} style={styles.favoriteIcon} />
                                    </TouchableOpacity>
                                </View>
                                <Image source={e.img} style={{ alignSelf: "center", width: 300, height: 140, transform: [{ rotateZ: '-30deg' }] }} />
                            </View>
                            <View style={{ marginTop: 16, paddingHorizontal: 16, flexDirection: "column" }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontSize: 20, color: "#121212", }}>{e?.name}</Text>
                                    {e.favorite === true ? (
                                        <TouchableOpacity>
                                            <Icon name="heart" size={23} color={"#149a56"} style={styles.favoriteIcon} />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity>
                                            <Icon name="hearto" size={23} color={"#ccc"} style={styles.favoriteIcon} />
                                        </TouchableOpacity>
                                    )}
                                </View>
                                <Text style={{ marginTop: 8, fontSize: 24, color: "#121212", fontWeight: "600" }}>
                                    R$ {e?.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 }).replace('.', ',')}
                                </Text>
                                <View style={{ flexDirection: "row", gap: 16, marginTop: 16 }}>
                                    <View style={{ padding: 5, backgroundColor: "#f9f9f9", borderRadius: 100 }}>
                                        <Text style={{ color: "#149a56", fontWeight: "600" }}>Restam {e.stoq} Pares</Text>
                                    </View>
                                    <View style={{ padding: 5, backgroundColor: "#f9f9f9", borderRadius: 100 }}>
                                        <Text style={{ color: "#121212", fontWeight: "600" }}>Vendidos {e.sale}</Text>
                                    </View>
                                </View>
                                <View style={{ width: "100%", height: 1, backgroundColor: "#00000014", marginVertical: 16 }} />
                                <View>
                                    <Text style={{ color: "#202020", fontWeight: "400", fontSize: 24, letterSpacing: -1 }}>Tamanho</Text>
                                    <View style={{ marginTop: 16, flexDirection: "row", justifyContent: "space-between" }}>
                                        {tamanhos.map((e) => {
                                            return (
                                                <TouchableOpacity onPress={() => handlerSize(e.size)} key={e.size} style={{ width: "20%", padding: 5, borderWidth: 2, borderColor: "#149a56", backgroundColor: e.state ? "#149a56" : "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: e.state ? "#fff" : "#149a56", fontWeight: "600", textAlign: "center" }}>{e.size}</Text>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16, marginBottom: 20 }}>
                                    <TouchableOpacity onPress={() => {
                                        setCheck(true)
                                        addCart(e)
                                        setTimeout(() => {
                                            setCheck(false)
                                        }, 2000)
                                    }} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 5, width: "48%", padding: 10, borderColor: "#149a56", borderWidth: 2, borderRadius: 100 }}>
                                        <Bag name="shopping-bag" size={25} color={"#149a56"} style={{ marginRight: 5 }} />
                                        <Text style={{ color: "#149a56", fontWeight: "600", textAlign: "center" }}>Add Carrinho</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 5, width: "48%", padding: 10, backgroundColor: "#149a56", borderRadius: 100 }}>
                                        <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>Comprar Agora</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    )
                })
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({


    favoriteIcon: {
        elevation: 3,
    },

});

export default inject('ProductRender', 'CartStore')(observer(ProductRender));