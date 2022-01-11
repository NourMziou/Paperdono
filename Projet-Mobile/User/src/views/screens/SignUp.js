import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors.js';
import STYLES from '../../styles/index.js';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: "#f8e6d3" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
          marginTop: 140, justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon
            name="account-circle"
            color="#957d5b"
            size={150}
            style={STYLES.inputIcon}
          />
        </View>
        <View style={{
          flexDirection: 'row', marginTop: 80, justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ fontSize: 22, color: COLORS.primary }}>
            CREATE
          </Text>
          <Text> </Text>
          <Text
            style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.primary }}>
            ACCOUNT
          </Text>
        </View>
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={STYLES.line}></View>
        </View>
        <View style={{ marginTop: 2 }}>
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
            <Icon style={{ padding: 10, color: "#967e5c" }} name="mail-outline" size={20} color="#000" />
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
              placeholder="EMAIL"
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
            <Icon style={{ padding: 10, color: "#967e5c" }} name="phone" size={20} color="#000" />
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
              placeholder="PHONE"
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
            <Icon style={{ padding: 10, color: "#967e5c" }} name="search" size={20} color="#000" />
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
              placeholder="REGION"
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
    marginTop: 30,
         marginRight: 30,
            marginLeft: 30}}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
              Sign Up
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 15,
            marginBottom: 20,
          }}>
          <Text style={{ color: COLORS.brown1, fontWeight: 'bold' }}>
            You already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ color: COLORS.pink, fontWeight: 'bold' }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
