import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Card: React.FC<any> = (props) => {
    const { Name, Source, Designation } = props;

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={Source} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{Name}</Text>
                <Text style={styles.designation}>{Designation}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mb20: {
        marginBottom: 20
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#d9e3f0",
        elevation: 4,
        height: 110,
        marginTop: 16,
        borderRadius: 9,
        marginHorizontal: 20
    },
    imageContainer: {
        paddingTop: 8,
        alignItems: "center"
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 20
    },
    detailsContainer: {
        marginLeft: 15,
        paddingTop: 8
    },
    name: {
        fontWeight: "bold",
        color: "#607D8B",
        fontSize: 22
    },
    designation: {
        color: "gray"
    },
    timing: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    time: {
        marginLeft: 5,
        fontSize: 11
    },
    fees: {
        color: "gray"
    }
});

export default Card;
