import React from 'react';
import {View, Text, StyleSheet, FlexStyle, TextStyle} from 'react-native';

type AppStyles = {
  container: FlexStyle;
  text: TextStyle;
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create<AppStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: '800',
  },
});

export default App;
