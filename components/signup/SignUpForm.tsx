import Register from '@/services/register';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUpForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const register = async () => {
    console.log(name, email, password);
    await Register(email, password, name);
  } 

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          onChangeText={(text) => { setName(text) }}
          style={styles.input}
          placeholder="Enter name"
          placeholderTextColor="#ACACAC"
          accessibilityLabel="Enter your name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          onChangeText={(text) => { setEmail(text) }}
          style={styles.input}
          placeholder="Enter e-mail"
          placeholderTextColor="#ACACAC"
          keyboardType="email-address"
          accessibilityLabel="Enter your email"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            onChangeText={(text) => { setPassword(text) }}
            style={styles.passwordInput}
            placeholder="Enter password"
            placeholderTextColor="#ACACAC"
            secureTextEntry
            accessibilityLabel="Enter your password"
          />
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80aeb5971b98541dbfc0f9bbc4cff1dc6dee2e275db3b8e60ab2601cf7c47688?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
            style={styles.eyeIcon}
          />
        </View>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By creating your account, you agree to the
        </Text>
        <View style={styles.termsLinks}>
          <TouchableOpacity>
            <Text style={styles.link}>Terms of Service</Text>
          </TouchableOpacity>
          <Text style={styles.termsText}>and</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => { register(); }} style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 300,
    marginTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    color: "#595959",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(130, 130, 130, 0.70)",
    borderRadius: 8,
    padding: 15,
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "rgba(130, 130, 130, 0.70)",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
  },
  eyeIcon: {
    width: 18,
    aspectRatio: 1,
  },
  termsContainer: {
    marginBottom: 20,
  },
  termsText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
    color: "#1D1D1D",
    fontWeight: "300",
  },
  termsLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
    color: "rgba(240, 83, 79, 1)",
    fontWeight: "300",
    marginHorizontal: 2,
  },
  createAccountButton: {
    backgroundColor: "#780c61",
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
  },
  createAccountText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500",
  },
});

export default SignUpForm;