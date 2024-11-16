import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CircleGroup from './CircleGroup';
import Button from './Button';
import { router } from 'expo-router';

const IntroIndex: React.FC = () => {
  return (
    <View style={styles.container}>
      <CircleGroup />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Eventify Hub</Text>
        <Text style={styles.subtitle}>
          Create an account with us and experience seamless event planning.
        </Text>
        <Button
          title="Create Account"
          onPress={() => {router.push("/selectrole")}}
          style={styles.createAccountButton}
        />
        <Button
          title="Login"
          onPress={() => {router.push("/login")}}
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
        />
      </View>
      <View style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 40,
    maxWidth: 480,
    width: '100%',
    paddingHorizontal: 7,
    alignItems: 'center',
    backgroundColor: '#F8E9F0',

  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#1D1D1D',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 31,
  },
  subtitle: {
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
    width: 304,
  },
  createAccountButton: {
    marginTop: 256,
    backgroundColor: '#780c61',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderColor: '#5C4684',
    borderWidth: 1,
  },
  loginButtonText: {
    color: '#5C4684',
  },
  bottomBar: {
    width: 140,
    height: 6,
    backgroundColor: '#1D1D1D',
    opacity: 0.8,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    marginTop: 82,
  },
});

export default IntroIndex;