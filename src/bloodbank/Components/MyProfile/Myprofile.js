/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text} from 'native-base';
import {
  Thumbnail,
  CheckBox,
  ListItem,
  Body,
  Container,
  Header,
  Content,
  Radio,
  Right,
  Left,
} from 'native-base';
// import {DrawerNavigatorItems} from 'react-navigation-drawer';
// import {NavigationActions} from 'react-navigation';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icons from 'react-native-vector-icons/AntDesign';

import {connect} from 'react-redux';
import {changetoDoner} from '../../../store/middleWires/registeraction';

class MyProfile extends Component {
  handlerCheck = item => {
    this.props.change(!this.props.user.wantToDonate, this.props.user.token);
  };
  render() {
    // const uri = 'https://pbs.twimg.com/media/DkFc0c8W4AQtbT_.jpg';
    console.log('profile Props ===>', this.props.user);
    return (
      <Container
        style={{
          // flex: 1,
          justifyContent: 'center',
          // alignItems: 'center',
          // flexDirection: 'row',
        }}>
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // flexDirection: 'row',
          }}>
          <Icons name="user" size={100} style={{marginTop: '15%'}} />
          <Text style={{color: '#00B386', fontWeight: 'bold', marginTop: '4%'}}>
            {this.props.user.email}
          </Text>
        </View>
        <Content
          style={{width: '95%', marginHorizontal: '5%', marginTop: '12%'}}>
          {this.props.user && this.props.user.fullName && (
            <>
              <ListItem>
                <Left>
                  <Text>Want to Donate Blood</Text>
                </Left>
                <Right>
                  <CheckBox
                    style={{marginRight: '50%'}}
                    checked={this.props.user.wantToDonate}
                    onPress={() =>
                      this.handlerCheck(!this.props.user.wantToDonate)
                    }
                  />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Name :</Text>
                </Left>
                <Right>
                  <Text>{this.props.user.fullName}</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Bloog Group :</Text>
                </Left>
                <Right>
                  <Text>{this.props.user.bloodGroup.slice(0, 3)}</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{fontSize: 12}}>
                  <Text>Phone :</Text>
                </Left>
                <Right style={{width: '100%'}}>
                  <Text style={{marginRight: '1%', fontSize: 12}}>
                    0{this.props.user.phoneNumber}
                  </Text>
                </Right>
              </ListItem>
            </>
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.User.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    change: (value, token) => dispatch(changetoDoner(value, token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProfile);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
