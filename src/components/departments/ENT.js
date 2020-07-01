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

export default class Ent extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
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
            <Title style={styles.title}> ENT </Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={styles.view1}>
            <Text style={styles.heading}>Facilities</Text>
            <Text style={styles.listtext}>
              {'  '} • ICU,60 beds of High Dependency Unit (HDU), Radiology,
              Pathology, Cardiology, Gastroenterology, Nephrology, Neurology and
              Pulmonology.
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.heading}>Staff</Text>
            <List style={{width: '85%'}}>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Ahmed Bilal</Text>
                  <Text note style={{fontSize: 13}}>
                    Head of Medicine
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Fraz Saeed Qureshi</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Muhammad Owais Fazal</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Ahmad Zeeshan Chughtai</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Javed Iqbal</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Hafiz Mughees Ather</Text>
                  <Text note style={{fontSize: 13}}>
                    Assistant Professor
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={{fontSize: 14}}>Dr. Yasir Yaqoob</Text>
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
    marginLeft: '6%',
    fontSize: 18,
  },
});
