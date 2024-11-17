import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router';

export default function SignupScreen() {
  const navigation = useNavigation();
  const google = Asset.fromModule(require('./../../assets/images/google-icon.png')).uri;
  const facebook = Asset.fromModule(require('./../../assets/images/facebook-icon.png')).uri;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    console.log('Google Login pressed!');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook Login pressed!');
  };

  const handleLogin = () => {
    console.log('Login pressed!');
  };

  const handleBackPress = () => {
    console.log('Back button pressed!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => { router.back() }}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton1} onPress={handleGoogleLogin}>
        <Image
          source={{ uri: google }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton2} onPress={handleFacebookLogin}>
        <Image
          source={{ uri: facebook }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine} />
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
        keyboardType="default"
        autoCapitalize="none"
      />
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter e-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {/* <TouchableOpacity>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity> */}
      </View>
      <Text style={styles.termsText}>By creating your account, you agree to the <Text style={styles.highlight}>Terms of Service</Text> and <Text style={styles.highlight}>Privacy Policy</Text></Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7ECF5', // Light pink background
    paddingHorizontal: 40,
    paddingTop: 80,
  },
  socialButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    marginTop: 100
  },
  socialButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#999',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    fontSize: 18,
    color: '#999',
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#780C60', // Dark purple color
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 12,
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  highlight: {
    color: '#E15A45', // Highlight color for "FINGERTIPS!"
  },
});

