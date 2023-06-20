import { inject, observer } from "mobx-react";
import { Text, View } from "react-native"

const ProductRender = ({ ProductRender }: any) => {

    const { detail, renderProduct } = ProductRender;

    return (
        <View>
            {
                detail.map((e: any) => {
                    return (
                        <View key={e?.id}>
                            <Text>{e?.name}</Text>
                            <Text>{e?.price}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default inject('ProductRender')(observer(ProductRender));