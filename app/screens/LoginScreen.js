import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.login}
        source={require("../assets/images/logo-red.png")}
      />
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect="false"
        onChangeText={(text) => setEmail(text)}
        keyboardType="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect="false"
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  login: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
