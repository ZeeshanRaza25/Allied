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
  //   Right,
  //   Image,
} from 'native-base';
// import Icons from 'react-native-vector-icons/MaterialIcons';
import DoctorIcon from 'react-native-vector-icons/Fontisto';
class Department extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const items = [
      {
        name: 'Medical Unit I',
        code: '#1abc9c',
        id: 1,
        uri: require('../../assets/dental.jpeg'),
        nav: 'MedicalUnit1',
      },
      {
        name: 'Medical Unit II',
        code: '#2ecc71',
        id: 2,
        uri: require('../../assets/dental.jpeg'),
        nav: 'MedicalUnitTwo',
      },
      {
        name: 'Medical Unit III',
        code: '#3498db',
        id: 3,
        uri: require('../../assets/dental.jpeg'),
        nav: 'MedicalUnitThree',
      },
      {
        name: 'Pediatric Department',
        code: '#9b59b6',
        id: 4,
        uri: require('../../assets/dental.jpeg'),
        nav: 'Pediatric',
      },
      {
        name: 'Neurology Department',
        code: '#1abc9c',
        id: 5,
        uri: require('../../assets/dental.jpeg'),
        nav: 'Neurology',
      },
      {
        name: 'Surgery-Surgical Unit I',
        code: '#2ecc71',
        id: 6,
        uri: require('../../assets/dental.jpeg'),
        nav: 'SurgicalOne',
      },
      {
        name: 'Surgery-Surgical Unit II',
        code: '#3498db',
        id: 7,
        uri: require('../../assets/dental.jpeg'),
        nav: 'SurgicalTwo',
      },
      {
        name: 'ENT I',
        code: '#9b59b6',
        id: 8,
        uri: require('../../assets/dental.jpeg'),
        nav: 'Ent',
      },
      {
        name: 'Plastic Surgery',
        code: '#1abc9c',
        id: 9,
        uri: require('../../assets/dental.jpeg'),
        nav: 'PlasticSurgery',
      },
      {
        name: 'Ophthalmology',
        code: '#2ecc71',
        id: 10,
        uri: require('../../assets/dental.jpeg'),
        nav: 'Ophthamology',
      },
      {
        name: 'Gynaecology & Obstetrics Unit',
        code: '#3498db',
        id: 11,
        uri: require('../../assets/dental.jpeg'),
        nav: 'Gynaecology',
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
            <Title style={styles.title}> Departments </Title>
          </Body>
        </Header>
        <FlatGrid
          itemDimension={160}
          items={items}
          style={styles.gridView}
          // staticDimension={350}
          fixed
          spacing={10}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[styles.itemContainer]}
              onPress={() => navigate(item.nav, {name: 'Jane'})}>
              <DoctorIcon style={styles.icon} name="doctor" size={70} />
              <Text style={styles.itemName}>{item.name}</Text>
              {/* <Text style={styles.itemCode}>Room # {item.room}</Text> */}
            </TouchableOpacity>
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
    marginBottom: 40,
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
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    // padding: 10,
    height: 210,
    backgroundColor: 'transparent',
    borderColor: '#880045',
    borderWidth: 1,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 13,
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

export default Department;
