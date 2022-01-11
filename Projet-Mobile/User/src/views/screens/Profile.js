import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import users from '../../consts/users';
import {PrimaryButton} from '../components/Button';

const Profile = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={require('../../assets/logo/logo.png')} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 10,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16,color: COLORS.green1}}> Username</Text>
          <Text style={{fontSize: 12, color: COLORS.black1}}>
            email@email.com
          </Text>
          <Text style={{fontSize: 14,color: COLORS.black1}}>21 000 000</Text>
          <Text style={{fontSize: 14,color: COLORS.black1}}>Address</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <View style={style.actionBtn}>
                    <Text style={{fontWeight: 'bold', fontSize: 18,color: COLORS.pink1}}>Edit</Text>
          </View>
        </View>
      </View>
    );
  };
  const CartCard2 = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={require('../../assets/win.png')} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 1,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16,color: COLORS.green1}}>Achievements Unlocked</Text>
          <Text style={{ fontWeight: 'bold',fontSize: 14,color: COLORS.black1}}>🌲 100 trees saved</Text>
          <Text style={{fontWeight: 'bold',fontSize: 14, color: COLORS.black1}}>
            📄 80 kg paper donated
          </Text>
          <Text style={{fontWeight: 'bold',fontSize: 14,color: COLORS.black1}}>👜 70 points collected</Text>
          <Text style={{fontWeight: 'bold',fontSize: 14,color: COLORS.black1}}>📚 60 documents shared</Text>
        </View>
      </View>
    );
  };
  
  const CartCard5 = ({item}) => {
    return (
      <View style={style.cartCard2}>
        <View
          style={{
            marginLeft: 10,
            paddingVertical: 2,
            flex: 1,
          }}>
          <Image source={require('../../assets/frame.png')} style={{height: 280, width: 280}} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
    <CartCard/>
    <CartCard2/>
<CartCard5/>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.pink1,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCard2: {
    height: 300,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.pink1,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.green1,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Profile;
