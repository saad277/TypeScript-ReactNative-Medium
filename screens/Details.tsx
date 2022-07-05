import React from "react";
import { View, Text, StyleSheet, FlexStyle, TextStyle } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import { MainStackParams } from "../navigation/MainStack";

type DetailProps = {
    navigation: NativeStackNavigationProp<MainStackParams>;
    route: RouteProp<MainStackParams, "Details">;
};

const Details: React.FC<DetailProps> = (props) => {
    const { route } = props;

    const { Id } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
        </View>
    );
};

type DetailStyles = {
    container: FlexStyle;
    text: TextStyle;
};

const styles = StyleSheet.create<DetailStyles>({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        color: "black"
    }
});

export default Details;
