import React from "react";
import { View, StyleSheet, FlexStyle, TextStyle } from "react-native";

import Card from "./components/Card";

type AppStyles = {
    container: FlexStyle;
    text: TextStyle;
};

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <Card Name="Peter" Designation="Doctor" Source={require("./assets/mock.jpg")} />
        </View>
    );
};

const styles = StyleSheet.create<AppStyles>({
    container: {
        flex: 1
    },
    text: {
        color: "black",
        fontWeight: "800"
    }
});

export default App;

