import React from 'react';
import {View, Image,Text} from 'react-native';
import COLORS from '../../consts/colors';
import coin from '../../assets/logo/coin.png';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
    <Text style={{fontSize: 20, fontWeight: 'bold',color:COLORS.pink1,marginTop:10}}>10</Text>
      <Image
        source={coin}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginRight: 15,
        }}
      />
    </View>
  );
};

export default ActionBarImage;