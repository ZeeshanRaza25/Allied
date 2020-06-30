import React, {Component} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Header, Left, Body, Button, Icon, Title, Text, View} from 'native-base';

class OpdHelp extends Component {
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
            <Title style={styles.title}> OpdHelp </Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={styles.view1}>
            <Text style={styles.heading}>Introduction</Text>
            <Text style={styles.text}>
              {'      '}OPD means Outdoor Patient Department of a hospital.It is
              the section of hospital where patient are provided medical
              consultation and other Allied services.Examination room where
              patients can be examined for any disease condition.OPD works from
              8am to 2pm on weeks days.
            </Text>
          </View>
          <View style={styles.view1}>
            <Text style={styles.heading}>Instructions</Text>
            <Text style={styles.listtext}>
              {'  '} • Patient should have token for check up.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • Token can be taken from the main counter.
            </Text>
            <Text style={styles.listtext}>
              {'  '} • On token,patient name, age and referred to which doctor
              and room number is mentioned.
            </Text>
            {/* <Text style={styles.listtext}>{'  '} • Token is computrized.</Text> */}
            <Text style={styles.listtext}>
              {'  '} • Patients visit their desired doctor and recieve
              prescription in computerized form take medicine from placed in
              OPD.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default OpdHelp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  icon: {
    color: '#000000',
  },
  body: {
    backgroundColor: '#000000',
    color: 'black',
  },
  //   title: {
  //     color: 'black',
  //     // alignItems: 'center',
  //     marginLeft: '5%',
  //   },
  icons: {
    // backgroundColor: '#000000',
    marginLeft: '6%',
  },
  icons1: {
    // backgroundColor: '#000000',
    marginLeft: '3%',
  },
  //   text: {
  //     fontWeight: 'bold',
  //     marginHorizontal: '9%',
  //     alignContent: 'center',
  //   },
  itemView: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#000000',
    marginVertical: '1%',
    height: '10%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: '93%',
  },
  card: {
    // flex: 1,
  },
  textStyle: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '5%',
    marginBottom: '3%',
    // backgroundColor: '#fff',
    paddingTop: '3%',
  },
  textStyle1: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '5%',
    marginBottom: '10%',
    paddingTop: '3%',
    marginLeft: '5%',
  },
  view1: {
    marginTop: '10%',
    // paddingHorizontal: '10%',
    backgroundColor: '#fff',
    marginHorizontal: '8%',
    marginBottom: '5%',
    textAlign: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 25,
  },
  //   icon: {
  //     color: '#000000',
  //   },
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: '20%',
    // width: '95%',
    // paddingHorizontal: '2%',
  },
  contactView: {
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    alignSelf: 'center',
    marginVertical: '10%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  IconStyle: {
    marginHorizontal: 35,
    color: '#2AA6B6',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  text: {
    fontSize: 14,
    paddingHorizontal: '7%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingBottom: '10%',
    lineHeight: 22,
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
    marginLeft: '5%',
  },
});
