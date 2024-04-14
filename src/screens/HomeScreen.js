import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {height, width} from '../constants/Constants';
import Cards from '../components/Cards';

const Cities = [
  {
    name: 'New Delhi',
    image: require('../Images/image3.jpg'),
  },
  {
    name: 'New York',
    image: require('../Images/image4.jpg'),
  },
  {
    name: 'London',
    image: require('../Images/image5.jpg'),
  },
  {
    name: 'San Fransisco',
    image: require('../Images/image6.jpg'),
  },
  {
    name: 'New Jersey',
    image: require('../Images/image7.jpg'),
  },
];

const HomeScreen = props => {
  const [city, setCity] = useState('');

  return (
    <View style={{}}>
      <ImageBackground
        imageStyle={{opacity: 0.7, backgroundColor: 'black'}}
        source={require('../Images/image2n.jpg')}
        style={{height: height, width: width}}
      />
      <SafeAreaView style={{position: 'absolute'}}>
        <View
          style={{
            width: width,
            alignItems: 'center',
            height: height * 0.07,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: width * 0.95,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../Images/sidebar.png')}
                style={{
                  height: height * 0.05,
                  width: height * 0.038,
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../Images/user.jpg')}
                style={{
                  height: height * 0.06,
                  width: height * 0.06,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{width: width, alignItems: 'center', marginTop: height * 0.1}}>
          <View
            style={{
              width: width * 0.9,
              height: height * 0.2,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{fontSize: 40, color: 'white', fontWeight: '500'}}>
              Hello Sourabh
            </Text>
            <Text style={{fontSize: 16, color: 'white'}}>
              Check the weather by the city
            </Text>
            <View
              style={{
                height: height * 0.06,
                borderWidth: 1,
                borderColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 10,
                backgroundColor: 'translucent',
              }}>
              <TextInput
                value={city}
                onChangeText={val => setCity(val)}
                placeholder="Search City"
                placeholderTextColor="white"
                style={{
                  color: 'white',
                  fontSize: 18,
                  paddingHorizontal: 10,
                  // textAlign: 'center',
                  fontWeight: '500',
                  width: width * 0.78,
                  // backgroundColor:'red'
                }}
              />
              <TouchableOpacity onPress={()=>props.navigation.navigate('Detail',{name:city})}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: height * 0.05,
                    width: width * 0.08,
                    tintColor: 'white',
                    marginRight: 10,
                  }}
                  source={require('../Images/search.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginTop: height * 0.18}}>
          <Text style={{color: 'white', fontSize: 21, marginLeft: 10}}>
            My Locations:
          </Text>

          <FlatList
            data={Cities}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
