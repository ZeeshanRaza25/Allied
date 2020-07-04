/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {
  List,
  ListItem,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Text,
  View,
} from 'native-base';

export default class MedicalUnitThree extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <Header transparent style={styles.header}>
          <Left>
            <TouchableOpacity>
              <Button
                transparent
                onPress={() => navigate('Department', {name: 'Jane'})}>
                <Icon name="arrow-back" style={styles.icon} />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body style={styles.title}>
            <Title style={styles.title}> Medical Unit III</Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={styles.view1}>
            <Text style={styles.heading}>Facilities</Text>
            <Text style={styles.listtext}>
              {'  '} • 20 bedded dialysis unit providing hemodialysis facilities
              to more than 100 patients per day, providing upper and lower GI
              endoscopy and Bronchoscopy facilities for which all the
              post-graduates are being trained. The unit is also providing
              training facilities for doctors and paramedics of the Faisalabad
              division for prevention and management of dengue fever and other
              infectious diseases.
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.heading}>Staff</Text>
            <List style={{width: '85%'}}>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Aamir Husain</Text>
                  <Text note style={{fontSize: 13}}>
                    Head of Department
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Muhammad Adrees Shani</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Muhammad Aamer</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Rai Arif</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Salman Shakoor</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Maroof Vaince</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
  },
  view1: {
    marginTop: '10%',
    // paddingHorizontal: '10%',
    backgroundColor: '#fff',
    marginHorizontal: '8%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 25,
  },
  view2: {
    marginTop: '10%',
    backgroundColor: '#fff',
    marginHorizontal: '8%',
    marginBottom: '5%',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
  },
  icon: {
    color: '#000000',
  },
  scrollView: {
    // backgroundColor: 'pink',
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    marginVertical: 6,
  },
  heading: {
    alignSelf: 'center',
    marginVertical: '7%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  listtext: {
    fontSize: 14,
    paddingHorizontal: '10%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingBottom: '5%',
    color: '#000000',
    lineHeight: 25,
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '3%',
    fontSize: 18,
  },
});
