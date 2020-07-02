/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  View,
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
