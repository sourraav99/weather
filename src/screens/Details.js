import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_KEY, height, width } from '../constants/Constants';

const Details = props => {
  const [data, setData] = useState();
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      // .then(res=>console.log(res))
      .catch(err => console.log(err));
  });

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'lightgray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
    </View>
  );
  return (
    <View style={{}}>
      <ImageBackground
        imageStyle={{ opacity: 0.7, backgroundColor: 'black' }}
        source={require('../Images/image2n.jpg')}
        style={{ height: height, width: width }}
      />
      <SafeAreaView style={{ position: 'absolute' }}>
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
        {data ? (
          <View style={{ height: height * 0.65, flexDirection: 'column', alignItems: 'center', justifyContent: "space-between",flex:1 ,marginTop:height*0.05}}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 40, color: 'white', fontWeight: '500' }}>
                {name},{data.sys.country}
              </Text>
              <Text style={{ fontSize: 18, color: 'white', }}>
                {data['weather'][0]['main']}
              </Text>
            </View>
            <Text style={{ fontSize: 60, color: 'white' }}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg;C
            </Text>
            <View>
              <Text style={{fontSize:22,color:'white',marginBottom:25,fontWeight:'700',left:-9}}>  weather details</Text>
              <View style={{width:width*0.8}}>
              <Data value={`${data.wind.speed} m/s`}  title="Wind" />
              <Data value={`${data.main.pressure}mb`}  title="Pressure" />
              <Data value={`${data.main.humidity}%`}  title="Humidity" />
              <Data value={`${data.visibility}%`}  title="Visibility" />
              </View>
            </View>
          </View>
        ) : (
          <View style={{ height: height * 0.65, justifyContent: 'center', }}>
            <ActivityIndicator color="white" size="large" />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Details;
