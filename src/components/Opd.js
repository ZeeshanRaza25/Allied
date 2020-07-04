import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
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
} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Opd = props => {
  const {navigate} = props.navigation;
  const items = [
    {
      name: 'Child Specialist',
      code: '#1abc9c',
      room: 11,
      uri:
        'https://cdn0.iconfinder.com/data/icons/coworking-space-wildberry-vol-1/256/Childcare-128.png',
    },
    {
      name: 'Diabetist',
      code: '#2ecc71',
      room: 12,
      uri:
        'https://cdn2.iconfinder.com/data/icons/health-problems-diabetes-innovicons-color/128/Glucose-monitoring-meter-diabetes-128.png',
    },
    {
      name: 'Fertility Specialist',
      code: '#3498db',
      room: 13,
      uri:
        'https://cdn0.iconfinder.com/data/icons/maternity-5/64/ovum-fertilization-pregnancy-fertility-128.png',
    },
    {
      name: 'General Physician',
      code: '#9b59b6',
      room: 14,
      uri:
        'https://cdn2.iconfinder.com/data/icons/kid-doctor/512/HumanV1-01-128.png',
      // 'https://cdn4.iconfinder.com/data/icons/health-care-28/101/bloodpressure_A_color-128.png',
    },
    {
      name: 'Neurologist',
      code: '#34495e',
      room: 15,
      uri:
        'https://cdn2.iconfinder.com/data/icons/lose-gain-weigh-filled-outline/64/Brain_Health-Neurologist-Neurosurgeon-Health-Neurology-128.png',
    },
    {
      name: 'Nephrologist',
      code: '#16a085',
      room: 16,
      uri:
        'https://cdn4.iconfinder.com/data/icons/organs-blue/64/183_kidneys-urology-nephrology-128.png',
      // 'https://cdn2.iconfinder.com/data/icons/infection-illness-color-filled/300/101139671-1-128.png',
    },
    {
      name: 'Neuro Surgen',
      code: '#27ae60',
      room: 17,
      uri:
        'https://cdn4.iconfinder.com/data/icons/medical-3-color-shadow/128/neurosurgery_neurosurgery_specialist_patient_-128.png',
    },
    {
      name: 'Orthopedist',
      code: '#2980b9',
      room: 18,
      uri:
        'https://cdn3.iconfinder.com/data/icons/orthopedic-3/100/all3_09-04-128.png',
    },
    {
      name: 'Urologist',
      code: '#8e44ad',
      room: 19,
      uri:
        'https://cdn1.iconfinder.com/data/icons/health-filloutline/64/kidneys-healthcare_and_medical-urologist-urology-anatomy-organ-medical-128.png',
    },
    {
      name: 'ENT Specialist',
      code: '#2c3e50',
      room: 20,
      uri:
        'https://cdn2.iconfinder.com/data/icons/medical-equipment-3/614/249_-_ENT-128.png',
    },
    {
      name: 'Chest Specialist',
      code: '#f1c40f',
      room: 21,
      uri:
        'https://cdn2.iconfinder.com/data/icons/stop-virus-outline-colored-iconset-part-3/128/ic_chest_pain-128.png',
    },
    {
      name: 'Psychiatrist',
      code: '#e67e22',
      room: 22,
      uri:
        'https://cdn4.iconfinder.com/data/icons/healthy-life-flat-live-long-and-prosper/512/Mental_health-128.png',
    },
    {
      name: 'Gyneocolist',
      code: '#e74c3c',
      room: 23,
      uri:
        'https://cdn2.iconfinder.com/data/icons/medical-flat-icons-part-1-1/218/Doctor-128.png',
    },
    {
      name: 'Eye Specialist',
      code: '#ecf0f1',
      room: 24,
      uri:
        'https://cdn0.iconfinder.com/data/icons/human-body-flat/340/body_human_internal_organ_medical_eye_optical_eyeball-128.png',
    },
    {
      name: 'Dermatology',
      code: '#95a5a6',
      room: 25,
      uri:
        'https://cdn2.iconfinder.com/data/icons/health-problems-diabetes-innovicons-color/128/button-skin_problem-rash-dermatologist-disease-128.png',
    },
    {
      name: 'Skin Specialist',
      code: '#f39c12',
      room: 26,
      uri:
        'https://cdn2.iconfinder.com/data/icons/infection-illness-color-filled/300/10110980-1-128.png',
    },
    {
      name: 'Radiologist',
      code: '#d35400',
      room: 27,
      uri:
        'https://cdn0.iconfinder.com/data/icons/medical-5-color-shadow/128/radiology_diagnostic_x-ray_radiologist_health-care-128.png',
    },
    {
      name: 'Physical Therapist',
      code: '#c0392b',
      room: 28,
      uri:
        'https://cdn1.iconfinder.com/data/icons/disability-malibu-vol-2/128/therapist-128.png',
    },
    {
      name: 'Medical Specialist',
      code: '#bdc3c7',
      room: 29,
      uri:
        'https://cdn1.iconfinder.com/data/icons/medical-health-vol-3-2/96/Doctor_healthcare_medical_Heart_Specialist_physician-128.png',
    },
    {
      name: 'Internal Specialist',
      code: '#7f8c8d',
      room: 30,
      uri:
        'https://cdn0.iconfinder.com/data/icons/human-body-flat/340/body_human_internal_organ_muscle_tendon_physical_sinew-128.png',
    },
    {
      name: 'Periodontology',
      code: '#1abc9c',
      room: 32,
      uri:
        'https://cdn2.iconfinder.com/data/icons/dental-40/300/plant-stomatology-oral-medicine-128.png',
    },
    {
      name: 'Prosthodontics',
      code: '#2ecc71',
      room: 33,
      uri:
        'https://cdn2.iconfinder.com/data/icons/dental-40/300/remove-stomatology-oral-medicine-128.png',
    },
    {
      name: 'Orthodonotics',
      code: '#3498db',
      room: 34,
      uri:
        'https://cdn2.iconfinder.com/data/icons/dental-filled-outline/128/Orthodontics_braces_teeth_dental_beauty_dentistry-128.png',
    },
    {
      name: 'Oral Surgery',
      code: '#9b59b6',
      room: 35,
      uri:
        'https://cdn3.iconfinder.com/data/icons/medical-and-healthcare-set-1/64/blue-39-128.png',
    },
    {
      name: 'Opertaor Dentisty',
      code: '#34495e',
      room: 36,
      uri:
        'https://cdn0.iconfinder.com/data/icons/dental-care-31/56/glass__teeth__dental__oral__medical-128.png',
    },
    {
      name: 'Oral Pathology',
      code: '#16a085',
      room: 37,
      uri:
        'https://cdn2.iconfinder.com/data/icons/dental-40/300/schedule-stomatology-oral-medicine-128.png',
    },
    {
      name: 'Oral Medicine',
      code: '#27ae60',
      room: 38,
      uri:
        'https://cdn2.iconfinder.com/data/icons/dental-40/300/calendar-stomatology-oral-medicine-128.png',
    },
    {
      name: 'Oral Morphology',
      code: '#2980b9',
      room: 39,
      uri:
        'https://cdn3.iconfinder.com/data/icons/dentist-16/64/oral_cavity-dental--128.png',
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
            <Image source={{uri: item.uri}} style={styles.icon} />
            {/* <DoctorIcon style={styles.icon} name="doctor" size={75} /> */}

            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>Room# {item.room}</Text>
          </View>
        )}
      />
    </View>
  );
};

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
    fontSize: 24,
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
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  itemCode: {
    fontWeight: '900',
    fontSize: 13,
    color: '#000000',
    alignSelf: 'center',
  },
});

export default Opd;
