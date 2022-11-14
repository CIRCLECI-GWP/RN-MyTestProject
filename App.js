import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  TextInput,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [message, setMessage] = React.useState();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Button
        title="Say Hello"
        onPress={() => {
          setTimeout(() => {
            setMessage('Hello Tester');
          }, Math.floor(Math.random() * 200));
        }}
      />
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontFamily: 'Arial',
    fontSize: 38,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
