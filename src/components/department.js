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
        staff: [
          'Prof. Dr. Ahmed Bilal(Head of Medicine)',
          'Assis.Prof.Dr. Fraz Saeed Qureshi',
          'Assis.Prof.Dr.Muhammad Owais Fazal',
          'Assis.Prof.Dr. Ahmad Zeeshan Chughtai',
          'Assis.Prof.Dr. Yasir Yaqoob',
          'Assis.Prof.Dr. Hafiz Mughees Ather',
          'Assis.Prof.Dr. Javed Iqbal',
          'Assis.Prof.Dr. Ghulam Abbas Tahir',
        ],
        facilities:
          'ICU, 60 beds of High Dependency Unit (HDU), Radiology, Pathology, Cardiology, Gastroenterology, Nephrology, Neurology and Pulmonology.',
      },
      {
        name: 'Medical Unit II',
        code: '#2ecc71',
        id: 2,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Medical Unit III',
        code: '#3498db',
        id: 3,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Pediatricv Department',
        code: '#9b59b6',
        id: 4,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Neurology Department',
        code: '#1abc9c',
        id: 5,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Surgery-Surgical Unit I',
        code: '#2ecc71',
        id: 6,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Surgery-Surgical Unit II',
        code: '#3498db',
        id: 7,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'ENT I',
        code: '#9b59b6',
        id: 8,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Plastic Surgery',
        code: '#1abc9c',
        id: 9,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Ophthalmology',
        code: '#2ecc71',
        id: 10,
        uri: require('../../assets/dental.jpeg'),
      },
      {
        name: 'Gynaecology & Obstetrics Unit',
        code: '#3498db',
        id: 11,
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
            <Title style={styles.title}> Departments </Title>
          </Body>
          {/* <Right>
            <Icons
              onPress={() => navigate('OpdHelp', {name: 'Jane'})}
              style={styles.helpIcon}
              name="help"
              size={30}
            />
            <Text>Help</Text>
          </Right> */}
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
              <DoctorIcon style={styles.icon} name="doctor" size={70} />
              {/* <Image
                source={require('../../assets/dental.jpeg')}
                height={30}
                width={30}
              /> */}

              <Text style={styles.itemName}>{item.name}</Text>
              {/* <Text style={styles.itemCode}>Room # {item.room}</Text> */}
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
