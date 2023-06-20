import { useNavigation } from "@react-navigation/native";
import { inject, observer } from "mobx-react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const { width } = Dimensions.get('window')

const CartList = ({ CartStore }: any) => {

    const { data, setQtd } = CartStore;

    const navigation = useNavigation()

    const filteredData = data.filter((e: any, index: number, self: any[]) => {
        return index === self.findIndex((t: any) => t.id === e.id);
    });


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("/" as never)}>
                        <Icon name="arrowleft" size={30} color={"#3d3d3d"} />
                    </TouchableOpacity>
                    <View></View>
                    <View></View>
                </View>
                {filteredData.map((e: any) => {
                    return (
                        <View key={e.id} >
                            <View style={{ flexDirection: "row", marginBottom: 32, width: '100%', alignItems: "center" }}>
                                <View>
                                    <View style={{ width: 180, height: 250, alignItems: "center", justifyContent: "center" }}>
                                        <Image source={e.img} style={{ width: 180, height: 80, transform: [{ rotateZ: '90deg' }] }} />
                                    </View>

                                    <View style={{ flexDirection: "row", gap: 8, marginLeft: 16 }}>
                                        <TouchableOpacity onPress={() => setQtd(e.id, '-')} style={{ borderWidth: 1, borderColor: '#7c7c7c', paddingHorizontal: 17, paddingVertical: 8, borderRadius: 5, alignItems: "center", justifyContent: "center" }}><Text style={{ fontWeight: '800' }}>-</Text></TouchableOpacity>
                                        <View style={{ borderWidth: 1, borderColor: '#7c7c7c', paddingHorizontal: 17, paddingVertical: 8, borderRadius: 5, alignItems: "center", justifyContent: "center" }}><Text style={{ color: "#000", fontWeight: '800' }}>{e.qtd}</Text></View>
                                        <TouchableOpacity onPress={() => setQtd(e.id, '+')} style={{ borderWidth: 1, borderColor: '#7c7c7c', paddingHorizontal: 17, paddingVertical: 8, borderRadius: 5, alignItems: "center", justifyContent: "center" }}><Text style={{ fontWeight: '800' }}>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ fontWeight: "700", fontSize: 20, color: "#2e2e2e", width: width - 200 }}>{e.name}</Text>
                                    <Text style={{ fontWeight: "500", fontSize: 20, color: "#7c7c7c", letterSpacing: 1 }}>{e.serial}</Text>
                                    <Text style={{ fontWeight: "400", fontSize: 15, color: "#000", marginTop: 8 }}>Cor: {e.color}</Text>
                                    <Text style={{ fontWeight: "400", fontSize: 15, color: "#2e2e2e" }}>Tamanho: {e.size}</Text>
                                    <Text style={{ fontWeight: "800", fontSize: 16, color: "#2e2e2e", marginTop: 8 }}>R${e.price}</Text>
                                </View>
                            </View>
                            <View style={{ width: "100%", height: 1, backgroundColor: "#00000014", marginVertical: 16 }} />
                        </View>
                    );
                })}
            </ScrollView>
            <View style={{
                alignSelf: "center",
                backgroundColor: "#000000",
                width: "80%",
                position: "absolute",
                bottom: 5,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100
            }}>
                <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20, textAlign: "center" }}>Checkout</Text>
            </View>
        </View>
    );
};

export default inject('CartStore')(observer(CartList));
