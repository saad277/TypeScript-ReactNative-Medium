import React from "react";
import { View, StyleSheet, FlexStyle, TextStyle, TouchableOpacity } from "react-native";

import Card from "../components/Card";

type ListStyles = {
    container: FlexStyle;
    text: TextStyle;
};

const List: React.FC<any> = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Details")}>
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
