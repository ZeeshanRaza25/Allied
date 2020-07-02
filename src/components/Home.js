/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  // ImageBackground,
  // BackHandler,
  // Alert,
} from 'react-native';
import {Text, Container, Footer, FooterTab} from 'native-base';
import {FlatGrid} from 'react-native-super-grid';
import Icons from 'react-native-vector-icons/MaterialIcons';
// import Icons from 'react-native-vector-icons/Fontisto';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SplashScreen from 'react-native-splash-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DoctorIcon from 'react-native-vector-icons/Fontisto';

class BloodHome extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    const {navigate} = this.props.navigation;
    const items = [
      {
        name: 'About',
        code: '#1abc9c',
        id: 1,
        nav: 'About',
        icon: 'info',
        color: '#24a0ed',
      },
      {
        name: 'OPD',
        code: '#2ecc71',
        id: 2,
        nav: 'Opd',
        icon: 'doctor',
        color: '#2AA6B6',
      },
      {
        name: 'Departments',
        code: '#3498db',
        id: 3,
        nav: 'Department',
        icon: 'columns',
        color: '#2AA6B6',
      },
      {
        name: 'Blood Bank',
        code: '#9b59b6',
        id: 4,
        nav: 'BloodHome',
        icon: 'blood-drop',
        color: '#8a0303',
      },
      {
        name: 'Doctors',
        code: '#1abc9c',
        id: 5,
        nav: 'DoctorsDetails',
        icon: 'doctor',
        color: '#1A75BB',
      },
      {
        name: 'Gallery',
        code: '#2ecc71',
        id: 6,
        nav: 'Gallery',
        icon: 'photograph',
        color: '#78858b',
      },
    ];
    return (
      <Container style={styles.container}>
        {/* <ImageBackground
          source={require('../../assets/backgroung.png')}
          style={styles.backgroundImage}> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.dscImage}
            source={require('../../assets/allied2.jpeg')}
            // width={'50%'}
          />
        </View>
        <View style={{flex: 4, justifyContent: 'center', marginTop: '5%'}}>
          <FlatGrid
            itemDimension={160}
            items={items}
            style={styles.gridView}
            staticDimension={350}
            fixed
            spacing={5}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[styles.itemContainer]}
                onPress={() => navigate(item.nav, {name: 'Jane'})}>
                <DoctorIcon
                  style={styles.icon}
                  color={item.color}
                  name={item.icon}
                  size={35}
                />
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Icons
                onPress={() => navigate('Call', {name: 'Jane'})}
                name="call"
                size={30}
                color="#2AA6B6"
              />
              <Image
                style={styles.footerImage2}
                source={require('../../assets/footer3.png')}
              />
              <Icons
                onPress={() => navigate('Chatbot', {name: 'Jane'})}
                color="#2AA6B6"
                // style={styles.footerImage3}
                name="chat"
                size={35}
                // source={require('../../assets/footer2.png')}
              />
            </FooterTab>
          </Footer>
        </View>
        {/* </ImageBackground> */}
      </Container>
    );
  }
}

export default BloodHome;

const styles = StyleSheet.create({
  helpIcon: {
    marginRight: 10,
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // color: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginBottom: 40,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    width: '92%',
    paddingHorizontal: '5%',
  },
  text: {
    fontSize: 22,
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '2%',
    alignSelf: 'auto',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
  gridView: {
    // marginTop: 10,
    // flex: 1,
    // backgroundColor: 'black',
    // paddingHorizontal: '1%',
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    // padding: 10,
    height: 110,
    // backgroundColor: 'black',
    borderColor: '#2AA6B6',
    borderWidth: 1,
    alignItems: 'center',
    width: '80%',
    marginHorizontal: '12%',
  },
  itemName: {
    fontSize: 13,
    color: '#000000',
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: '10%',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000000',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    // flex: 10,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  footerImage: {
    // flex: 1,
    height: '85%',
    width: '15%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: '3%',
    marginBottom: '2%',
    padding: '1%',
    marginLeft: '5%',
  },
  footerTab: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerImage2: {
    // flex: 1,
    height: '75%',
    width: '12%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: '22%',
    marginBottom: '1%',
  },
  footerImage3: {
    // flex: 1,
    height: '75%',
    width: '12%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: '1%',
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '98%',
    // height: '50%',
    // paddingTop: 0,
    marginTop: '8%',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // paddingTop: '0%',
    // height: '100%',
    backgroundColor: '#fff',
  },
  dscImage: {
    // flex: 2,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: '20%',
    // height: '100%',
    // paddingTop: 0,
    // marginTop: 0,
    // marginHorizontal: 10,
  },
});
