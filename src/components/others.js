import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Left, Body, Button, Icon, Title, View} from 'native-base';

class BloodSystem extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header transparent style={styles.header}>
          <Left>
            <TouchableOpacity>
              <Button
                transparent
                onPress={() => navigate('Blood', {name: 'Jane'})}>
                <Icon name="arrow-back" style={styles.icon} />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body style={styles.title}>
            <Title style={styles.title}> Blood System </Title>
          </Body>
        </Header>
      </View>
    );
  }
}
export default BloodSystem;

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
});
