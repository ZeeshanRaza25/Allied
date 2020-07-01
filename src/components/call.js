import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Linking, Platform} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import AmbulanceIcon from 'react-native-vector-icons/Fontisto';
// import FaxIcon from 'react-native-vector-icons/FontAwesome';
import {Header, Left, Body, Button, Icon, Title, View, Text} from 'native-base';

export default class Call extends Component {
  makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${0419210082}';
    } else {
      phoneNumber = 'telprompt:${0419210082}';
    }

    Linking.openURL(phoneNumber);
  };
  makeCallAmbulance = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1122}';
    } else {
      phoneNumber = 'telprompt:${1122}';
    }

    Linking.openURL(phoneNumber);
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
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
            <Title style={styles.title}> Call </Title>
          </Body>
        </Header>
        <View style={styles.itemView}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={this.makeCall}>
            <Icons
              color="#2AA6B6"
              style={styles.icons}
              name="md-call"
              size={38}
            />
            <Text style={styles.text}> 041-9210080</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemView}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={this.makeCallAmbulance}>
            <AmbulanceIcon
              style={styles.icons1}
              color="red"
              name="ambulance"
              size={25}
            />
            <Text style={styles.text}>1122 </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemView}>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:info@pmc.edu.pk')}
            style={styles.TouchableOpacityStyle}>
            <AmbulanceIcon
              style={styles.icons1}
              color="#2AA6B6"
              name="email"
              size={34}
            />
            <Text style={styles.text}> info@pmc.edu.pk</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  TouchableOpacityStyle: {
    flexDirection: 'row',
    marginVertical: '1%',
    height: '100%',
    // borderBottomColor: '#000000',
    // borderBottomWidth: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  icon: {
    color: '#000000',
  },
  body: {
    backgroundColor: '#000000',
    color: 'black',
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '10%',
  },
  icons: {
    // backgroundColor: '#000000',
    marginLeft: '6%',
  },
  icons1: {
    // backgroundColor: '#000000',
    marginLeft: '6%',
  },
  text: {
    fontWeight: 'bold',
    marginLeft: '9%',
    // alignContent: 'center',
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
  itemView: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#000000',
    marginVertical: '1%',
    height: '10%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: '100%',
  },
  card: {
    // flex: 1,
  },
});
