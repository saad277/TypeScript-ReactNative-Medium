import React from "react";
import { View, Text, StyleSheet, FlexStyle, TextStyle } from "react-native";

const Details: React.FC = () => {
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
