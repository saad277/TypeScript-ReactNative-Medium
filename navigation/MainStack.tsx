import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import List from "../screens/List";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"List"} component={List} />
            <Stack.Screen name={"Details"} component={Details} />
        </Stack.Navigator>
    );
};

export default MainStack;
