import {YellowBox} from 'react-native';
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';
// import Icu from './src/components/Icu';
import Opd from './src/components/Opd';
import Emergency from './src/components/emergency';
import About from './src/components/About';
import DoctorsDetails from './src/components/doctorDetails';
import Call from './src/components/call';
import Blood from './src/bloodbank/bloodindex';
import OpdHelp from './src/components/OpdHelp';
import BloodMain from './src/bloodbank/bloodindex';
import Login from './src/bloodbank/Screens/Login/Login';
// import Signup from './src/bloodbank/Screens/Signup/Signup';
import BloodHome from './src/bloodbank/Screens/Home/Home';
import PostDetail from './src/bloodbank/Screens/DetailPost/DetailPost';
import SignUp from './src/components/SignUp';
import {Provider} from 'react-redux';
import {Container} from 'native-base';
import React from 'react';
import Store from './src/store/store';
// import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {autoSignIn} from './src/store/middleWires/registeraction';
import Department from './src/components/department';
import Gallery from './src/components/gallery';
import MedicalUnit1 from './src/components/departments/MedicalUnit1';
import Ent from './src/components/departments/ENT';
import Gynaecology from './src/components/departments/Gynaecology';
import MedicalUnitTwo from './src/components/departments/MedicalUnit2';
import MedicalUnitThree from './src/components/departments/MedicalUnit3';
import Neurology from './src/components/departments/Neurology';
import Ophthamology from './src/components/departments/Ophthalmology';
import Pediatric from './src/components/departments/Pediatric';
import PlasticSurgery from './src/components/departments/PlasticSurgery';
import SurgicalOne from './src/components/departments/Surgical1';
import SurgicalTwo from './src/components/departments/Surgical2';
import Chatbot from './src/components/Chatbot';
import Drawer from './src/components/drawer';

const AfterSignin = createStackNavigator({
  Blood: {screen: Blood, navigationOptions: {headerShown: false}},
  BloodMain: {screen: BloodMain, navigationOptions: {headerShown: false}},
  BloodHome: {
    screen: BloodHome,
    navigationOptions: {headerShown: false},
  },
  Drawer: {screen: Drawer, navigationOptions: {headerShown: false}},
  PostDetail: {
    screen: PostDetail,
    // navigationOptions: { header: null }
  },
});

const BeforeSignin = createStackNavigator({
  Home: {screen: Home, navigationOptions: {headerShown: false}},
  Department: {screen: Department, navigationOptions: {headerShown: false}},
  MedicalUnit1: {screen: MedicalUnit1, navigationOptions: {headerShown: false}},
  Ent: {screen: Ent, navigationOptions: {headerShown: false}},
  Gynaecology: {screen: Gynaecology, navigationOptions: {headerShown: false}},
  MedicalUnitTwo: {
    screen: MedicalUnitTwo,
    navigationOptions: {headerShown: false},
  },
  MedicalUnitThree: {
    screen: MedicalUnitThree,
    navigationOptions: {headerShown: false},
  },
  Neurology: {screen: Neurology, navigationOptions: {headerShown: false}},
  Ophthamology: {screen: Ophthamology, navigationOptions: {headerShown: false}},
  Pediatric: {screen: Pediatric, navigationOptions: {headerShown: false}},
  PlasticSurgery: {
    screen: PlasticSurgery,
    navigationOptions: {headerShown: false},
  },
  SurgicalOne: {screen: SurgicalOne, navigationOptions: {headerShown: false}},
  SurgicalTwo: {screen: SurgicalTwo, navigationOptions: {headerShown: false}},
  Drawer: {screen: Drawer, navigationOptions: {headerShown: false}},
  Gallery: {screen: Gallery, navigationOptions: {headerShown: false}},
  Opd: {screen: Opd, navigationOptions: {headerShown: false}},
  Emergency: {screen: Emergency, navigationOptions: {headerShown: false}},
  About: {screen: About, navigationOptions: {headerShown: false}},
  DoctorsDetails: {
    screen: DoctorsDetails,
    navigationOptions: {headerShown: false},
  },
  Call: {screen: Call, navigationOptions: {headerShown: false}},
  Chatbot: {screen: Chatbot, navigationOptions: {headerShown: false}},
  OpdHelp: {screen: OpdHelp, navigationOptions: {headerShown: false}},
  Login: {screen: Login, navigationOptions: {headerShown: false}},
  SignUp: {
    screen: SignUp,
    navigationOptions: {headerShown: false},
  },
});

const AppNavigator = createStackNavigator(
  {
    Auth: BeforeSignin,
    App: AfterSignin,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Auth',
  },
);

const App = createAppContainer(AppNavigator);

class MyApp extends React.Component {
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('jwtToken');
      if (value) {
        console.log(value);
        // setAuthToken(value);
        // const decoded = jwtDecode(value);
        Store.dispatch(autoSignIn(value));
      }
    } catch (e) {
      console.log('error in reading value');
    }
  };
  async componentDidMount() {
    await this.retrieveData();
  }

  render() {
    return (
      <Provider store={Store}>
        <Container>
          <App />
        </Container>
      </Provider>
    );
  }
}

export default MyApp;
