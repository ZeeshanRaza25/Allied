import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  View,
  Right,
  // Image,
} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialIcons';
import DoctorIcon from 'react-native-vector-icons/Fontisto';

class Opd extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const items = [
      {
        name: 'Child Specialist',
        code: '#1abc9c',
        room: 11,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Diabetist',
        code: '#2ecc71',
        room: 12,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Fertility Specialist',
        code: '#3498db',
        room: 13,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'General Physician',
        code: '#9b59b6',
        room: 14,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Neurologist',
        code: '#34495e',
        room: 15,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Nephrologist',
        code: '#16a085',
        room: 16,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Neuro Surgen',
        code: '#27ae60',
        room: 17,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Orthopedist',
        code: '#2980b9',
        room: 18,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Urologist',
        code: '#8e44ad',
        room: 19,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'ENT Specialist',
        code: '#2c3e50',
        room: 20,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Chest Specialist',
        code: '#f1c40f',
        room: 21,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Psychiatrist',
        code: '#e67e22',
        room: 22,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Gyneocolist',
        code: '#e74c3c',
        room: 23,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Eye Specialist',
        code: '#ecf0f1',
        room: 24,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Dermatology',
        code: '#95a5a6',
        room: 25,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Skin Specialist',
        code: '#f39c12',
        room: 26,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Radiologist',
        code: '#d35400',
        room: 27,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Physical Therapist',
        code: '#c0392b',
        room: 28,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Medical Specialist',
        code: '#bdc3c7',
        room: 29,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Internal Specialist',
        code: '#7f8c8d',
        room: 30,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Periodonotology',
        code: '#1abc9c',
        room: 32,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Presthodontics',
        code: '#2ecc71',
        room: 33,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Orthodonotics',
        code: '#3498db',
        room: 34,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Oral Surgery',
        code: '#9b59b6',
        room: 35,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Opertaor Dentisty',
        code: '#34495e',
        room: 36,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Oral Pathology',
        code: '#16a085',
        room: 37,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Oral Medicine',
        code: '#27ae60',
        room: 38,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Oral Morphology',
        code: '#2980b9',
        room: 39,
        uri: require('../../assets/dental.jpeg'),
      },
    ];

    return (
      <View style={styles.container}>
        <Header transparent style={styles.header}>
          <Left>
            <TouchableOpacity>
              <Button
                transparent
                onPress={() => navigate('Home', {name: 'Jane'})}>
                <Icon name="arrow-back" style={styles.HeaderIcon} />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body style={styles.title}>
            <Title style={styles.title}> OPD </Title>
          </Body>
          <Right>
            <Icons
              onPress={() => navigate('OpdHelp', {name: 'Jane'})}
              style={styles.helpIcon}
              name="help"
              size={30}
            />
            {/* <Text>Help</Text> */}
          </Right>
        </Header>
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.itemContainer, //, {backgroundColor: item.code}
              ]}>
              <DoctorIcon style={styles.icon} name="doctor" size={75} />
              {/* <Image
                source={require('../../assets/dental.jpeg')}
                height={30}
                width={30}
              /> */}

              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>Room # {item.room}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
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
  HeaderIcon: {
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // marginBottom: 50,
    fontSize: 24,
  },
  icon: {
    color: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 50,
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
    marginLeft: '23%',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 200,
    backgroundColor: 'transparent',
    borderColor: '#880045',
    borderWidth: 1,
  },
  itemName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    alignSelf: 'center',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000000',
    alignSelf: 'center',
  },
});

export default Opd;
