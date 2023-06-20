import { inject, observer } from "mobx-react";
import { Text, View } from "react-native";

const CartList = ({ CartStore }: any) => {
    
    const { data } = CartStore;

    const filteredData = data.filter((e: any, index: number, self: any[]) => {
        return index === self.findIndex((t: any) => t.id === e.id);
    });

    return (
        <View>
            {filteredData.map((e: any) => {
                return (
                    <View key={e.id}>
                        <Text>{e.name}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default inject('CartStore')(observer(CartList));
