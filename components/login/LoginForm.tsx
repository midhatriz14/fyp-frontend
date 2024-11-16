import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          accessibilityLabel="Email input"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            accessibilityLabel="Password input"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} accessibilityLabel="Toggle password visibility">
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80aeb5971b98541dbfc0f9bbc4cff1dc6dee2e275db3b8e60ab2601cf7c47688?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} accessibilityLabel="Login button"
        onPress={() => { router.push("/dashboard") }}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} accessibilityLabel="Forgot password button">
        <Text style={styles.forgotPasswordText}>Forgot Your Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 40,
    width: "100%",
    maxWidth: 300,
    flexDirection: "column",
    alignItems: "stretch",
    fontFamily: "Poppins, sans-serif",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#595959",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 4,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(130, 130, 130, 0.70)",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 15,
    color: "#ACACAC",
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(130, 130, 130, 0.70)",
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    color: "#ACACAC",
    fontSize: 14,
  },
  eyeIcon: {
    width: 18,
    aspectRatio: 1,
  },
  loginButton: {
    alignSelf: "stretch",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#780c61",
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500",
  },
  forgotPasswordButton: {
    alignSelf: "center",
    marginTop: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#5C4684",
    fontWeight: "400",
  },
});

export default LoginForm;