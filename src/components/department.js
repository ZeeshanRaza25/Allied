import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Header, Left, Body, Button, Icon, Title, View} from 'native-base';
// import Icons from 'react-native-vector-icons/MaterialIcons';
class Department extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const items = [
      {
        name: 'Medical Unit I',
        code: '#1abc9c',
        id: 1,
        uri:
          'https://cdn1.iconfinder.com/data/icons/medical-health-care-flat/33/cardiology-128.png',
        nav: 'MedicalUnit1',
      },
      {
        name: 'Medical Unit II',
        code: '#2ecc71',
        id: 2,
        uri:
          'https://cdn1.iconfinder.com/data/icons/disability-malibu-vol-2/128/therapist-128.png',
        nav: 'MedicalUnitTwo',
      },
      {
        name: 'Medical Unit III',
        code: '#3498db',
        id: 3,
        uri:
          'https://cdn4.iconfinder.com/data/icons/miscellaneous-43-color-shadow/128/dialysis_kidney_hemodialysis_medical_treatment_disease_purification_-128.png',
        nav: 'MedicalUnitThree',
      },
      {
        name: 'Pediatric Department',
        code: '#9b59b6',
        id: 4,
        uri:
          'https://cdn3.iconfinder.com/data/icons/health-care-and-medical-3/64/1-15-128.png',
        nav: 'Pediatric',
      },
      {
        name: 'Neurology Department',
        code: '#1abc9c',
        id: 5,
        uri:
          'https://cdn1.iconfinder.com/data/icons/human-resources-2-5/128/193-128.png',
        nav: 'Neurology',
      },
      {
        name: 'Surgery-Surgical Unit I',
        code: '#2ecc71',
        id: 6,
        uri:
          'https://cdn0.iconfinder.com/data/icons/popicon-medical-vol-2/256/39-128.png',
        nav: 'SurgicalOne',
      },
      {
        name: 'Surgery-Surgical Unit II',
        code: '#3498db',
        id: 7,
        uri:
          'https://cdn2.iconfinder.com/data/icons/miscellaneous-50-mix/168/hernia_inguinal_stomach_diverticulitis_digestive_body-128.png',
        nav: 'SurgicalTwo',
      },
      {
        name: 'ENT I',
        code: '#9b59b6',
        id: 8,
        uri:
          'https://cdn2.iconfinder.com/data/icons/medical-equipment-3/614/249_-_ENT-128.png',
        nav: 'Ent',
      },
      {
        name: 'Plastic Surgery',
        code: '#1abc9c',
        id: 9,
        uri:
          'https://cdn2.iconfinder.com/data/icons/cosmetic-surgery-5/128/plastic_surgery_cosmetic_face_beauty_woman-128.png',
        nav: 'PlasticSurgery',
      },
      {
        name: 'Ophthalmology',
        code: '#2ecc71',
        id: 10,
        uri:
          'https://cdn0.iconfinder.com/data/icons/human-body-flat/340/body_human_internal_organ_medical_eye_optical_eyeball-128.png',
        nav: 'Ophthamology',
      },
      {
        name: 'Gynaecology & Obstetrics Unit',
        code: '#3498db',
        id: 11,
        uri:
          'https://cdn1.iconfinder.com/data/icons/gynecology-4/64/Mammal-mother-gynaecology-pregnancy-baby-128.png',
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
              <Image source={{uri: item.uri}} style={styles.icon} />
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
    marginBottom: 35,
    width: 70,
    height: 70,
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
