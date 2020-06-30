import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  // ImageBackground,
  // BackHandler,
  // Alert,
} from 'react-native';

import {
  Header,
  Item,
  Input,
  Icon,
  Text,
  Container,
  Footer,
  FooterTab,
  // Content,
  // Button,
} from 'native-base';

import Icons from 'react-native-vector-icons/MaterialIcons';
import AmbulanceIcon from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SplashScreen from 'react-native-splash-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Home extends Component {
  // backAction = () => {
  //   Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => null,
  //       style: 'cancel',
  //     },
  //     {text: 'YES', onPress: () => BackHandler.exitApp()},
  //   ]);
  //   return true;
  // };

  // componentWillUnmount() {
  //   this.backHandler.remove();
  // }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();

    // this.backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   this.backAction,
    // );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={styles.container}>
        {/* <ImageBackground
          source={require('../../assets/backgroung.png')}
          style={styles.backgroundImage}> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.dscImage}
            source={require('../../assets/allied1.jpeg')}
          />
        </View>
        <View style={styles.searchBarView}>
          {/* <Header searchBar rounded  style={styles.HeaderStyle} translucent> */}
          <Header searchBar rounded style={styles.HeaderStyle}>
            <Item>
              <Input placeholderTextColor="#23527C" placeholder="Search" />
              <Icon name="search" style={styles.icon} />
            </Item>
          </Header>
        </View>
        <View style={styles.a}>
          <View style={styles.cardview}>
            <View style={styles.touchableOpacityLeft}>
              <TouchableOpacity
                onPress={() => navigate('About', {name: 'Jane'})}>
                <AmbulanceIcon
                  style={styles.IconStyle1}
                  name="info"
                  size={40}
                />
                <Text style={styles.cardtext}> About </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.touchableOpacityRight}>
              <TouchableOpacity onPress={() => navigate('Opd', {name: 'Jane'})}>
                <AmbulanceIcon
                  style={styles.IconStyle1}
                  name="doctor"
                  size={40}
                />
                <Text style={styles.cardtext}> OPD </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardview}>
            <View style={styles.touchableOpacityLeft}>
              <TouchableOpacity
                onPress={() => navigate('Emergency', {name: 'Jane'})}>
                <AmbulanceIcon
                  style={styles.IconStyle1}
                  name="ambulance"
                  size={40}
                />
                <Text style={styles.cardtext}> Emergency </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.touchableOpacityRight}>
              <TouchableOpacity
                onPress={() => navigate('BloodHome', {name: 'Jane'})}>
                <AmbulanceIcon
                  style={styles.IconStyle1}
                  name="blood-drop"
                  size={40}
                />
                <Text style={styles.cardtext}> Blood Bank </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardview}>
            <View style={styles.touchableOpacityLeft}>
              <TouchableOpacity
                onPress={() => navigate('DoctorsDetails', {name: 'Jane'})}>
                <AmbulanceIcon
                  style={styles.IconStyle1}
                  name="doctor"
                  size={40}
                />
                <Text style={styles.cardtext}> Doctors </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.touchableOpacityRight}>
              <TouchableOpacity
                onPress={() => navigate('Login', {name: 'Jane'})}>
                <SimpleLineIcons
                  style={styles.IconStyle1}
                  name="login"
                  size={40}
                />
                <Text style={styles.cardtext}> Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Icons
                onPress={() => navigate('Call', {name: 'Jane'})}
                style={styles.callIcon}
                name="call"
                size={35}
              />
              <Image
                style={styles.footerImage2}
                source={require('../../assets/footer3.png')}
              />
              <Image
                onPress={() => navigate('HealthTips', {name: 'Jane'})}
                color="#2AA6B6"
                style={styles.footerImage3}
                source={require('../../assets/footer2.png')}
              />
            </FooterTab>
          </Footer>
          {/* <Footer>
              <FooterTab>
                <Button>
                  <Icon name="call" />
                </Button>
                <Button>
                  <Icon name="camera" />
                </Button>
                <Button active>
                  <Icon active name="navigate" />
                </Button>
                <Button>
                  <Icon name="person" />
                </Button>
              </FooterTab>
            </Footer> */}
        </View>
        {/* </ImageBackground> */}
      </Container>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  IconStyle1: {
    color: '#2AA6B6',
    // alignItems: 'center',
    margin: 11,
    alignSelf: 'center',
    justifyContent: 'center',

    // fontSize:15,
  },
  backgroundImage: {
    // flex: 10,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  searchtext: {
    color: '#2AA6B6',
  },
  icon: {
    color: '#23527C',
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
  callIcon: {
    color: '#2AA6B6',
    alignItems: 'center',
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
  touchableOpacityLeft: {
    flex: 1,
    marginBottom: '3%',
    borderWidth: 1,
    marginRight: '2%',
    overflow: 'hidden',
    borderColor: '#C1C1C1',
    borderRadius: 10,
    borderStyle: 'solid',
    elevation: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  touchableOpacityRight: {
    flex: 1,
    width: '50%',
    // backgroundColor: '#000000',
    backgroundColor: 'transparent',
    marginBottom: '3%',
    borderWidth: 1,
    marginRight: '2%',
    padding: '1%',
    overflow: 'hidden',
    borderColor: '#C1C1C1',
    borderRadius: 10,
    borderStyle: 'solid',
    elevation: 1,
    alignItems: 'center',
  },
  IconStyle: {
    height: '35%',
    width: '60%',
    marginVertical: '12%',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 3,
    // backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '98%',
    height: '100%',
    // paddingTop: 0,
    marginTop: '7%',
  },
  cardtext: {
    fontSize: 14,
    // backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '50%',
    color: '#23527C',
  },
  footer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // paddingTop: '0%',
    // height: '100%',
    backgroundColor: '#fff',
  },
  a: {
    flex: 12,
    // backgroundColor: '#000000',
    flexDirection: 'column',
    paddingTop: '1%',
  },
  HeaderStyle: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderColor: '#000000',
    // marginBottom: '10%',
    color: '#2AA6B6',
  },
  searchBarView: {
    flex: 2,
    width: '98%',
    // alignItems: 'center',
    alignSelf: 'center',
    // paddingVertical: '5%',
    marginVertical: '1%',
    // height: '10%',
    // borderRadius: 10,
    marginBottom: '5%',
  },
  dscImage: {
    // flex: 2,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 0,
    marginTop: 0,
  },
  searchBar: {
    flex: 1,
    width: '95%',
  },
  cardview: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '18%',
    // backgroundColor: '#000000',
    position: 'relative',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
});
