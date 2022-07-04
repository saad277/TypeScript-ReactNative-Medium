import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageSourcePropType,
    ViewStyle,
    FlexStyle,
    ImageStyle,
    TextStyle
} from "react-native";

type CardProps = {
    Name: string;
    Source: ImageSourcePropType;
    Designation: string;
    Time?: string;
};

const Card: React.FC<CardProps> = (props) => {
    const { Name, Source, Designation, Time } = props;

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={Source} resizeMode="contain" />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{Name}</Text>
                <Text style={styles.designation}>{Designation}</Text>
                {!!Time && <Text style={styles.time}>{Time}</Text>}
            </View>
        </View>
    );
};

type CardStyles = {
    mb20: ViewStyle;
    card: FlexStyle;
    imageContainer: ViewStyle;
    img: ImageStyle;
    detailsContainer: ViewStyle;
    name: TextStyle;
    designation: TextStyle;
    time: TextStyle;
};

const styles = StyleSheet.create<CardStyles>({
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
    time: {
        color: "gray"
    }
});

export default Card;
