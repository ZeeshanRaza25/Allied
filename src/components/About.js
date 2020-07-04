/* eslint-disable consistent-this */
/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Header, Left, Body, Button, Icon, Title, Text, View} from 'native-base';
import Icons from 'react-native-vector-icons/Fontisto';
import Ionic from 'react-native-vector-icons/Ionicons';
import LocationIcon from 'react-native-vector-icons/Entypo';
import Web from 'react-native-vector-icons/MaterialCommunityIcons';
// const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';
import getDirections from 'react-native-google-maps-directions';
import Geolocation from '@react-native-community/geolocation';

export default class About extends Component {
  state = {
    currentLongitude: 'unknown', //Initial Longitude
    currentLatitude: 'unknown', //Initial Latitude
  };
  componentDidMount = () => {
    var that = this;
    //Checking for the permission just after component loaded
    if (Platform.OS === 'ios') {
      this.callLocation(that);
    } else {
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            that.callLocation(that);
          } else {
            alert('Permission Denied');
          }
        } catch (err) {
          alert('err', err);
          console.warn(err);
        }
      }
      requestLocationPermission();
    }
  };

  callLocation(that) {
    //alert("callLocation Called");
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        that.setState({currentLongitude: currentLongitude});
        //Setting state Longitude to re re-render the Longitude Text
        that.setState({currentLatitude: currentLatitude});
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    that.watchID = Geolocation.watchPosition(position => {
      //Will give you the location on location change
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      //getting the Latitude from the location json
      that.setState({currentLongitude: currentLongitude});
      //Setting state Longitude to re re-render the Longitude Text
      that.setState({currentLatitude: currentLatitude});
      //Setting state Latitude to re re-render the Longitude Text
    });
  }
  componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
  };

  handleGetDirections = () => {
    this.callLocation(this);

    const data = {
      source: {
        latitude: this.state.currentLongitude,
        longitude: this.state.currentLatitude,
      },
      destination: {
        latitude: 31.4490535,
        longitude: 73.0809092,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
      // waypoints: [
      //   {
      //     latitude: 31.8600025,
      //     longitude: 73.697452,
      //   },
      //   {
      //     latitude: -33.8600026,
      //     longitude: 18.697453,
      //   },
      //   {
      //     latitude: -33.8600036,
      //     longitude: 18.697493,
      //   },
      // ],
    };

    getDirections(data);
  };

  makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${0419210082}';
    } else {
      phoneNumber = 'telprompt:${0419210082}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <Header transparent style={styles.header}>
          <Left>
            <TouchableOpacity>
              <Button
                transparent
                onPress={() => navigate('Home', {name: 'Jane'})}>
                <Icon name="arrow-back" style={styles.icon} />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body style={styles.title}>
            <Title style={styles.title}> About </Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={styles.view1}>
            <Text style={styles.heading}>Introduction</Text>
            <Text style={styles.text}>
              {'      '}Allied hospital is one of the largest hospitals of
              Pakistan. It is located at a very busy area of Faisalabad jail
              road. Allied hospital is said to the primary teaching hospital of
              the Faisalabad medical university which is affiliated with Punjab
              medical university.The hospital has been serving so many people
              since its creation.
            </Text>
          </View>
          <View style={styles.view1}>
            <Text style={styles.heading}>Facilities</Text>
            <Text style={styles.listtext}>
              {'  '} • Allied hospital has a number of professional doctors and
              nurses serving people for betterment.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • A separate teaching staff is also present at the hospital
              for the teaching purpose of the university.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • It provides all the key facilities to the patients and
              provides a healthy environment for them.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • A separate burn care unit is available for the burns
              emergency.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • A physical therapist, orthopedist, burn specialist,
              infertility specialist and other specialized doctors are always
              available at the allied hospital for your service.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • The emergency sector is open 24 hour.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • It contains more than 1385 beds.
            </Text>
          </View>
          <View style={styles.view1}>
            <Text style={styles.heading}>Contact</Text>
            <TouchableOpacity
              style={styles.contactView}
              onPress={this.makeCall}>
              <Ionic style={styles.IconStyle} name="md-call" size={25} />
              <Text style={styles.textStyle}> 041 9210082</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactView}
              onPress={() => Linking.openURL('mailto:info@pmc.edu.pk')}>
              <Icons style={styles.IconStyle} name="email" size={25} />
              <Text style={styles.textStyle}>allied@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactView}
              onPress={() => Linking.openURL('https://www.ahf.gop.pk')}>
              <Web style={styles.IconStyle} name="web" size={25} />
              <Text style={styles.textStyle}>www.ahf.gop.pk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactView}
              onPress={this.handleGetDirections}>
              <LocationIcon
                style={styles.IconStyle}
                name="location"
                size={25}
              />
              <Text style={styles.textStyle}>See location on Map</Text>
              {/* <Text> {'\n'} </Text> */}
              {/* <TouchableOpacity style={{width: null,height: null}} onPress={}> */}
              {/* <Text>{'\n'}see on Google map</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactView}
              onPress={() =>
                Linking.openURL(
                  'https://www.facebook.com/Allied-Hospital-Faisalabad-205247986174969',
                )
              }>
              <Icons style={styles.IconStyle} name="facebook" size={25} />
              <Text style={styles.textStyle1}> {''}Join us on Fb</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
  },
  textStyle: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    // paddingBottom: '5%',
    // marginBottom: '3%',
    // backgroundColor: '#000000',
    // paddingTop: '3%',
  },
  textStyle1: {
    alignSelf: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: '5%',
    // marginVertical: '10%',
    paddingVertical: '3%',
    flexDirection: 'row',
    // marginLeft: '5%',
  },
  view1: {
    marginTop: '10%',
    // paddingHorizontal: '10%',
    backgroundColor: '#fff',
    marginHorizontal: '8%',
    marginBottom: '5%',
    textAlign: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 25,
  },
  icon: {
    color: '#000000',
  },
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: '20%',
    // width: '95%',
    // paddingHorizontal: '2%',
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    // alignSelf: 'center',
    justifyContent: 'flex-start',
    marginVertical: 6,
  },
  heading: {
    alignSelf: 'center',
    marginVertical: '10%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  IconStyle: {
    marginHorizontal: 30,
    color: '#2AA6B6',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    paddingHorizontal: '7%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingBottom: '10%',
    lineHeight: 22,
  },
  listtext: {
    fontSize: 14,
    paddingHorizontal: '10%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingBottom: '5%',
    color: '#000000',
    lineHeight: 25,
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '5%',
  },
});
