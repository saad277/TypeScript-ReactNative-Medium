import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import List from "../screens/List";

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"List"} component={List} />
        </Stack.Navigator>
    );
};

export default MainStack;
