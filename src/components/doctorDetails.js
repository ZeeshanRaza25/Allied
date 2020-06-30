import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Linking,
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  View,
  List,
  ListItem,
  Right,
  Text,
} from 'native-base';
import Doctor from 'react-native-vector-icons/Fontisto';
const data = {
  FlatListItems: [
    {
      id: '1',
      name: 'Dr. Hafiz Mudassir Riaz',
      type: 'Physical Therapist',
      phone: '03001234501',
    },
    {
      id: '2',
      name: 'Dr. Nosheen Ahmad',
      type: 'Radiologist',
      phone: '03001234502',
    },
    {
      id: '3',
      name: 'Dr. Anaya Ch',
      type: 'Medical specialist',
      phone: '03001234503',
    },
    {
      id: '4',
      name: 'Dr. Usman Ahmad',
      type: 'Anaethetist',
      phone: '03001234504',
    },
    {
      id: '5',
      name: 'Dr. M.Masood Alam',
      type: 'Anaethetist',
      phone: '03001234505',
    },
    {
      id: '7',
      name: 'Dr. M. Aasam Massom',
      type: 'Anaethetist',
      phone: '03001234506',
    },
    {
      id: '6',
      name: 'Dr. Ali Hassan',
      type: 'Orthopedic Surgeon',
      phone: '03001234507',
    },
    {
      id: '8',
      name: 'Dr. Dawood Rana',
      type: 'Orthopedic Surgeon',
      phone: '03001234508',
    },
    {
      id: '9',
      name: 'Dr. Bilal Javaid',
      type: 'Nephrologist',
      phone: '03001234509',
    },
    {
      id: '10',
      name: 'Dr. Nida Rafiq',
      type: 'General Physician',
      phone: '03001234510',
    },
    {
      id: '11',
      name: 'Dr. Ahtesham Zafar',
      type: 'Internal Medicine',
      phone: '03001234511',
    },
    {
      id: '12',
      name: 'Dr. Khurram Jah Zafar',
      type: 'Dental Surgeon',
      phone: '03001234512',
    },
    {
      id: '13',
      name: 'Dr. Waqas Ashraf',
      type: 'Dental Surgeon',
      phone: '03001234513',
    },
    {
      id: '14',
      name: 'Dr. Basharat Manzoor',
      type: 'Orthopedist',
      phone: '03001234514',
    },
    {
      id: '15',
      name: 'Dr. M Adeel Alam Shah',
      type: 'Fertility Specialist',
      phone: '03001234515',
    },
    {
      id: '16',
      name: 'Dr. Mazhar Mahmood',
      type: 'Orthopedist',
      phone: '03001234516',
    },
    {
      id: '17',
      name: 'Dr. Noor ul Ain',
      type: 'Cardiologist',
      phone: '03001234517',
    },
    {
      id: '18',
      name: 'Dr. Atika Wahla',
      type: 'Dentist',
      phone: '03001234567',
    },
    {
      id: '19',
      name: 'Dr. Sohail Majeed',
      type: 'Neurologist',
      phone: '03001234518',
    },
    {
      id: '20',
      name: 'Dr. Basharat Manzoor',
      type: 'Orthopedist',
      phone: '03001234519',
    },
    {
      id: '21',
      name: 'Prof. M Akmal Hussain',
      type: 'Orthopedist',
      phone: '03001234520',
    },
    {
      id: '22',
      name: 'Dr. Nida Rafiq',
      type: 'child Specialist',
      phone: '03001234510',
    },
    {
      id: '23',
      name: 'Dr. Ahtesham Zafar',
      type: 'Dibetist',
      phone: '03001234511',
    },
    {
      id: '24',
      name: 'Dr. Khurram Jah Zafar',
      type: 'Neurosurgen',
      phone: '03001234512',
    },
    {
      id: '25',
      name: 'Dr. Waqas Ashraf',
      type: 'Urologist',
      phone: '03001234513',
    },
    {
      id: '26',
      name: 'Dr. Basharat Manzoor',
      type: 'ENT Specialist',
      phone: '03001234514',
    },
    {
      id: '27',
      name: 'Dr. M Adeel Alam Shah',
      type: 'chest Specialist',
      phone: '03001234515',
    },
    {
      id: '28',
      name: 'Dr. Mazhar Mahmood',
      type: 'Psychiatrist',
      phone: '03001234516',
    },
    {
      id: '29',
      name: 'Dr. Noor ul Ain',
      type: 'Gyneocologist',
      phone: '03001234517',
    },
    {
      id: '30',
      name: 'Dr. Atika Wahla',
      type: 'Eye Specialist',
      phone: '03001234567',
    },
    {
      id: '31',
      name: 'Dr. Sohail Majeed',
      type: 'dermatologist',
      phone: '03001234518',
    },
    {
      id: '32',
      name: 'Dr. Basharat Manzoor',
      type: 'Skin Specialist',
      phone: '03001234519',
    },
    {
      id: '33',
      name: 'Prof. M Akmal Hussain',
      type: 'Peridonotolgy',
      phone: '03001234520',
    },
    {
      id: '34',
      name: 'Prof. M Akmal Hussain',
      type: 'Prosthedontics',
      phone: '03001234520',
    },
    {
      id: '35',
      name: 'Prof. M Akmal Hussain',
      type: 'Orthodontics',
      phone: '03001234520',
    },
    {
      id: '36',
      name: 'Prof. M Akmal Hussain',
      type: 'Oral Surgery',
      phone: '03001234520',
    },
    // {id: '14', name: 'Dr. ', type: ''},
    // {id: '14', name: 'Dr. ', type: ''},
  ],
};

class DoctorsDetails extends Component {
  // makeCall = phone => {
  //   let phoneNumber = phone;

  //   if (Platform.OS === 'android') {
  //     phoneNumber = `tel:${phoneNumber}`;
  //   } else {
  //     phoneNumber = `telprompt:${phoneNumber}`;
  //   }
  //   Linking.openURL(phoneNumber);
  // };

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={styles.separate} />
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <Header transparent style={styles.header}>
          <Left>
            {/* <TouchableOpacity onPress={() => Linking.openURL(item.)}> */}
            <Button
              transparent
              onPress={() => navigate('Home', {name: 'Jane'})}>
              <Icon name="arrow-back" style={styles.icon} />
            </Button>
            {/* </TouchableOpacity> */}
          </Left>
          <Body style={styles.title}>
            <Title style={styles.title}> Doctors Details </Title>
          </Body>
        </Header>
        {/* <Content style={styles.MainContainer}> */}
        <View style={styles.MainContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.FlatListItems}
            //data defined in constructor
            ItemSeparatorComponent={this.FlatListItemSeparator}
            //Item Separator View
            renderItem={({item}) => (
              // Single Comes here which will be repeatative for the FlatListItems
              <List>
                <ListItem avatar>
                  <Left>
                    <Doctor color="#329BF7" name="doctor" size={35} />
                  </Left>
                  <Body>
                    <Text>
                      <Text style={styles.name}>
                        {item.name}
                        {'\n'}
                      </Text>
                      <Text note> {item.type} </Text>
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={(a = item.phone) =>
                        Linking.openURL(`tel:${item.phone}`)
                      }>
                      {/* <Text style={styles.text1} note>
                        {item.phone}
                      </Text> */}
                      <Doctor color="green" name="phone" size={25} />
                    </TouchableOpacity>
                  </Right>
                </ListItem>
              </List>
            )}
          />
        </View>
        {/* </Content> */}
      </SafeAreaView>
    );
  }
}
export default DoctorsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  separate: {
    flex: 1,
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
  },
  name: {
    fontSize: 16,
    // paddingLeft: 55,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#000000',
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
    marginLeft: '5%',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    // marginTop: 30,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text1: {
    marginRight: 5,
    fontSize: 13,
  },
});
