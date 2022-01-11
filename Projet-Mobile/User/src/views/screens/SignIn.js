import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors.js';
import STYLES from '../../styles/index.js';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {PrimaryButton} from '../components/Button';
const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: "#f8e6d3" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          marginTop: 100, justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            style={{width:200,height:200}}
            source={require('../../assets/logo/logo.png')}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8e6d3',
            borderBottomWidth: 1,
            borderColor: COLORS.light,
            borderBottomWidth: 0.5,
            marginRight: 50,
            marginLeft: 50
          }}>
            <Icon style={{ padding: 10, color: "#967e5c" }} name="person" size={20} color="#000" />
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                backgroundColor: '#f8e6d3',
                color: '#967e5c',
                fontSize: 18,
              }}
              placeholder="USERNAME"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8e6d3',
            borderBottomWidth: 1,
            borderColor: COLORS.light,
            borderBottomWidth: 0.5,
            marginRight: 50,
            marginLeft: 50
          }}>
            <Icon style={{ padding: 10, color: "#967e5c" }} name="lock-outline" size={20} color="#000" />
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                backgroundColor: '#f8e6d3',
                color: '#967e5c',
                fontSize: 18,
              }}
              placeholder="PASSWORD"
              underlineColorAndroid="transparent"
              secureTextEntry

            />
          </View>
          <View style={{backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
         marginRight: 30,
            marginLeft: 30}}>
            <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Sign In"
        />
          </View>
          
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={{ color: COLORS.brown1, fontWeight: 'bold' }}>
            You don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: COLORS.pink, fontWeight: 'bold' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
