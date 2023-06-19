import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Bag from 'react-native-vector-icons/Feather';
import Shoe from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = () => {
    return (
        <View style={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
            justifyContent: "space-between",
            width: "60%",
            height: 65,
            alignSelf: "center",
            borderRadius: 100,
            position: "absolute",
            bottom: "5%"

        }}>
            <TouchableOpacity>
                <Shoe name="shoe-sneaker" size={25} color={"#fff"} style={{ marginRight: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="hearto" size={25} color={"#fff"} style={{ marginRight: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Bag name="shopping-bag" size={25} color={"#fff"} style={{ marginRight: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="user" size={25} color={"#fff"} style={{ marginRight: 5 }} />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar;