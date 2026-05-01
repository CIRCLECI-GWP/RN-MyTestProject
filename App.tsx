import React from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

const App = () => {
  const [message, setMessage] = React.useState<string | undefined>(undefined);

  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#222" : "#fff",
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Button
        title="Say Hello"
        onPress={() => {
          setTimeout(() => {
            setMessage("Hello Tester");
          }, Math.floor(Math.random() * 200));
        }}
      />
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  messageText: {
    fontSize: 38,
    textAlign: "center",
    marginTop: 10,
  },
});

export default App;
