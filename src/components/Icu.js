import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Left, Body, Button, Icon, Title, View} from 'native-base';

class Icu extends Component {
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
            <Title style={styles.title}> ICU </Title>
          </Body>
        </Header>
      </View>
    );
  }
}

export default Icu;

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
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '5%',
  },
  icons: {
    // backgroundColor: '#000000',
    marginLeft: '6%',
  },
  icons1: {
    // backgroundColor: '#000000',
    marginLeft: '3%',
  },
  text: {
    fontWeight: 'bold',
    marginHorizontal: '9%',
    alignContent: 'center',
  },
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
});
