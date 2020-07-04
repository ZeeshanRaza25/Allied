import React, {Component} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Header, Left, Body, Button, Icon, Title, Text, View} from 'native-base';

export default class PlasticSurgery extends Component {
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
            <Title style={styles.title}> Plastic Surgery </Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={styles.view1}>
            <Text style={styles.heading}>Facilities</Text>
            <Text style={styles.listtext}>
              {'  '} • Deals the burn cases through resuscitation, wound care,
              reconstruction and rehabilitation phases, congenital, post
              ablative, post traumatic,post burn and various other soft tissue
              and bony defects, maxillofacial surgery, micro vascular surgery.
            </Text>
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
