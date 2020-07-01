/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
  Accordion,
} from 'native-base';
import axios from 'axios';

export default function Showpost(props) {
  const [data, setData] = useState([]);
  // console.log('Props =', props);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://myserveralliadapp.herokuapp.com/api/v1/users/allUser',
      );
      // console.log('data =', result.data.data.user);
      setData(result.data.data.user);
    };
    fetchData();
  }, []);

  const state = {
    tableTitle: ['Name', 'Mobile', 'Email', 'Address'],
    tableData: data,
  };
  // const state = this.state;
  // console.log('huhuuuyuyu', props.navigation);
  return (
    <View>
      <Content>
        <Card style={{flex: 0}}>
          {data.map(item => (
            <View key={item._id} style={styles.container}>
              <CardItem>
                <Left>
                  <TouchableOpacity
                  // onPress={() => props.navigation.navigate('PostDetail')}
                  >
                    <Thumbnail source={item.photo} />
                  </TouchableOpacity>
                  <Body>
                    <TouchableOpacity
                    // onPress={() => props.navigation.navigate('PostDetail')}
                    >
                      <Text
                        // onPress={() => props.navigation.navigate('PostDetail')}
                        style={{color: '#808080'}}>
                        {item.fullName}
                      </Text>
                      <Text
                        // onPress={() => props.navigation.navigate('PostDetail')}
                        style={{color: '#808080'}}>
                        {item.bloodGroup}
                      </Text>
                    </TouchableOpacity>
                  </Body>
                </Left>
              </CardItem>
              {/* <Text>{'\n'}</Text> */}
              <View style={styles.container1}>
                <Text style={styles.text}> Name : {item.fullName}</Text>
                <Text style={styles.text}> Blood Group: {item.bloodGroup}</Text>
                <Text style={styles.text}> Phone : {item.phoneNumber}</Text>
                <Text style={styles.text}> Email : {item.email}</Text>
              </View>
            </View>
          ))}
          {/* <View style={styles.container}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={state.tableHead}
                flexArr={[1, 2]}
                style={styles.head}
                textStyle={styles.text}
              />
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => props.navigation.navigate('PostDetail')}>
                <Col
                  data={state.tableTitle}
                  style={styles.title}
                  heightArr={[28, 28]}
                  textStyle={styles.text}
                />
                <Rows
                  data={}
                  flexArr={[2, 1, 1]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TouchableOpacity>
            </Table>
          </View> */}

          {/* <CardItem>
              <Button transparent textStyle={{color: '#87838B'}}>
                <TouchableOpacity>
                  <Icon style={{color: '#808080'}} active name="thumbs-up" />
                </TouchableOpacity>
                <Text style={{color: '#808080'}}>13</Text>
              </Button>
              <Button transparent textStyle={{color: '#87838B'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('PostDetail')}>
                  <Icon style={{color: '#808080'}} active name="chatbubbles" />
                </TouchableOpacity>
                <Text style={{color: '#808080'}}>32</Text>
              </Button>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Text note>April 15, 2016</Text>
              </Button>
            </CardItem> */}
        </Card>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#f6f8fa', paddingLeft: '15%'},
  row: {height: 28},
  // text: {textAlign: 'left'},
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginHorizontal: 5,
    // marginBottom: 5,
    borderBottomColor: '#f6f8fa',
    borderTopColor: '#FFF',
    borderRightColor: '#FFF',
    borderLeftColor: '#FFF',
    borderWidth: 1,
    // paddingBottom: 15,
    marginTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f6f8fa',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#808080',
    borderTopColor: '#FFF',
    borderRightColor: '#FFF',
    borderLeftColor: '#FFF',
    borderWidth: 1,
    // paddingBottom: 15,
    marginTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f6f8fa',
  },
  text: {
    fontSize: 14,
    marginVertical: 2,
    paddingLeft: '5%',
  },
});
