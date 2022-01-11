import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import rewards from '../../consts/rewards';
const {width} = Dimensions.get('screen');

import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {PrimaryButton} from '../components/Button';

const HomeScreen = ({navigation}) => {

const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not scanned yet')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  const Card = ({furniture}) => {
    return (
      <Pressable>
        <View style={style.card}>
          <View style={style.iconContainer}>
            <Icon
              name="volunteer-activism"
              color={furniture.liked ? COLORS.red : COLORS.primary}
            />
          </View>
          <Image
            source={furniture.image}
            style={{height: 120, width: '100%', borderRadius: 10}}
          />

          <Text style={style.cardName}>{furniture.name}</Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={style.price}>{furniture.price}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.green1, flex: 1}}>
      {/* Delete */}
      <View style={style.header}>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Reward List */}
                <Text style={{fontWeight:'bold',fontSize:30,paddingHorizontal: 20,color:COLORS.white1}}>Humanitarian Association Dashboard</Text>

        <Text style={style.title}>Select the shared ressource:</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={rewards}
          horizontal
          renderItem={({item}) => <Card furniture={item} />}
        />

        {/*QR Code Scanner*/}
        <Text style={style.title}>Scan user's generated QR code:</Text>
        <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
                paddingHorizontal: 20, 
                marginTop: 20
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.pink1}}>
                Total Points
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.pink1}}>50</Text>
            </View>
            <View style={{marginHorizontal: 30,marginBottom:30}}>
              <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.btnContainer}>
        <Text style={style.title}>CONFIRM</Text>
      </View>
    </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    height: 190,
    backgroundColor: COLORS.pink1,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  price: {fontWeight: 'bold', color: COLORS.black1, fontSize: 12},
  title: {fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20,color:COLORS.pink1},
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.pink1,
    position: 'absolute',
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    color:COLORS.pink1,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  btnContainer: {
    backgroundColor: COLORS.brown1,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
