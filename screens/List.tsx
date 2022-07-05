import React from "react";
import { View, StyleSheet, FlexStyle, TextStyle, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Card from "../components/Card";
import { MainStackParams } from "../navigation/MainStack";

type ListProps = {
    navigation: NativeStackNavigationProp<MainStackParams>;
};

type ListStyles = {
    container: FlexStyle;
    text: TextStyle;
};

const List: React.FC<ListProps> = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Details", { Id: 2 })}>
                <Card Name="Peter" Designation="Doctor" Source={require("../assets/mock.jpg")} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create<ListStyles>({
    container: {
        flex: 1
    },
    text: {
        color: "black",
        fontWeight: "800"
    }
});

export default List;
