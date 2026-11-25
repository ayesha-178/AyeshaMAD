import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

import CustomInput from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';

const App = () => {
  const [screen, setScreen] = useState('signup');

  const [users, setUsers] = useState<any[]>([]);

  const [fullName, setFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // REGISTER USER
  const registerUser = () => {
    if (!fullName || !signupEmail || !signupPassword) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    const newUser = {
      fullName,
      email: signupEmail,
      password: signupPassword,
      dob,
      phone,
    };

    setUsers([...users, newUser]);

    Alert.alert('Success', 'Registration successful', [
      {
        text: 'OK',
        onPress: () => {
          setScreen('login');

          setFullName('');
          setSignupEmail('');
          setSignupPassword('');
          setDob('');
          setPhone('');
        },
      },
    ]);
  };

  // LOGIN USER
  const loginUser = () => {
    const userFound = users.find(
      user =>
        user.email === loginEmail &&
        user.password === loginPassword
    );

    if (userFound) {
      Alert.alert('Success', 'User login successfully');
    } else {
      Alert.alert('Error', 'User not found');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* SIGN UP SCREEN */}
      {screen === 'signup' ? (
        <View style={styles.content}>

          <Text style={styles.title}>Sign up</Text>

          <Text style={styles.subtitle}>
            Create an account to continue
          </Text>

          <CustomInput
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />

          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value={signupEmail}
            onChangeText={setSignupEmail}
            keyboardType="email-address"
          />

          <CustomInput
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            value={dob}
            onChangeText={setDob}
          />

          <CustomInput
            label="Phone Number"
            placeholder="Enter phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <CustomInput
            label="Set Password"
            placeholder="Enter password"
            value={signupPassword}
            onChangeText={setSignupPassword}
            secureTextEntry={true}
          />

          <CustomButton
            title="Register"
            onPress={registerUser}
          />

          <Text
            style={styles.bottomText}
            onPress={() => setScreen('login')}
          >
            Already have an account?{' '}
            <Text style={styles.link}>Login</Text>
          </Text>

        </View>

      ) : (

        /* LOGIN SCREEN */
        <View style={styles.content}>

          <Text style={styles.title}>
            Sign in to your
          </Text>

          <Text style={styles.accountTitle}>
            Account
          </Text>

          <Text style={styles.subtitle}>
            Enter your email and password to login
          </Text>

          <CustomInput
            label="Email"
            placeholder="Enter your email"
            value={loginEmail}
            onChangeText={setLoginEmail}
            keyboardType="email-address"
          />

          <CustomInput
            label="Password"
            placeholder="Enter password"
            value={loginPassword}
            onChangeText={setLoginPassword}
            secureTextEntry={true}
          />

          <CustomButton
            title="Log in"
            onPress={loginUser}
          />

          <Text
            style={styles.bottomText}
            onPress={() => setScreen('signup')}
          >
            Don't have an account?{' '}
            <Text style={styles.link}>Sign up</Text>
          </Text>

        </View>
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 55,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
  },

  accountTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
  },

  subtitle: {
    fontSize: 14,
    color: '#777777',
    marginTop: 10,
    marginBottom: 28,
  },

  bottomText: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 24,
    fontSize: 13,
  },

  link: {
    color: '#246BFD',
    fontWeight: '600',
  },
});

export default App;