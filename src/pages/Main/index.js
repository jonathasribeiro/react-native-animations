import React, {useState, useRef} from 'react';

import {View, StatusBar, Dimensions, ScrollView, Animated} from 'react-native';

import {Container, Header, HeaderImage, HeaderText} from './styles';

import User from '../../components/User';

const {width} = Dimensions.get('window');

export default function App() {
  const scrollOffset = useRef(new Animated.Value(0)).current;
  const listProgress = useRef(new Animated.Value(0)).current;
  const userInfoProgress = useRef(new Animated.Value(0)).current;
  const [userSelected, setUserSelected] = useState(null);
  const [userInfoVisible, setUserInfoVisible] = useState(false);
  const [users] = useState([
    {
      id: 1,
      name: 'Jonathas Ribeiro',
      description: 'Desenvolvedor Fullstack!',
      avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
      thumbnail:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
      likes: 200,
      color: '#6930c3',
    },
    {
      id: 2,
      name: 'Maurício Marciliano',
      description: 'Head de empreendedorismo!',
      avatar: 'https://avatars2.githubusercontent.com/u/861751?s=460&v=4',
      thumbnail:
        'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80',
      likes: 350,
      color: '#5390d9',
    },
    {
      id: 3,
      name: 'Fernando Fernandes',
      description: 'Head de mindset!',
      avatar: 'https://avatars0.githubusercontent.com/u/4669899?s=460&v=4',
      thumbnail:
        'https://images.unsplash.com/photo-1506440905961-0ab11f2ed5bc?auto=format&fit=crop&w=400&q=80',
      likes: 250,
      color: '#80ffdb',
    },
    {
      id: 4,
      name: 'Marcos Paulo',
      description: 'Head de empreendedorismo!',
      avatar: 'https://avatars2.githubusercontent.com/u/861751?s=460&v=4',
      thumbnail:
        'https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80',
      likes: 350,
      color: '#5390d9',
    },
  ]);

  function selectUser(user) {
    setUserSelected(user);

    Animated.sequence([
      Animated.timing(listProgress, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }),

      Animated.timing(userInfoProgress, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      startCallback();
    });
  }

  function startCallback() {
    setUserInfoVisible(true);
  }

  function renderDetail() {
    return (
      <View>
        <User user={userSelected} onPress={() => {}} />
      </View>
    );
  }

  function renderList() {
    return (
      <Container
        style={{
          transform: [
            {
              translateX: listProgress.interpolate({
                inputRange: [0, 100],
                outputRange: [0, width],
              }),
            },
          ],
        }}>
        <ScrollView
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollOffset}}}],
            {useNativeDriver: false},
          )}>
          {users.map((user) => (
            <User key={user.id} user={user} onPress={() => selectUser(user)} />
          ))}
        </ScrollView>
      </Container>
    );
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header
        style={[
          {
            height: scrollOffset.interpolate({
              inputRange: [0, 140],
              outputRange: [200, 70],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <HeaderImage
          style={{
            opacity: userInfoProgress.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          }}
          source={userSelected ? {uri: userSelected.thumbnail} : null}
        />

        <HeaderText
          style={[
            {
              fontSize: scrollOffset.interpolate({
                inputRange: [120, 140],
                outputRange: [24, 16],
                extrapolate: 'clamp',
              }),
              transform: [
                {
                  translateX: userInfoProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, width],
                  }),
                },
              ],
            },
          ]}>
          React Native Animations
        </HeaderText>

        <HeaderText
          style={{
            transform: [
              {
                translateX: userInfoProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: [width * -1, 0],
                }),
              },
            ],
          }}>
          {userSelected ? userSelected.name : null}
        </HeaderText>
      </Header>
      {userInfoVisible ? renderDetail() : renderList()}
    </Container>
  );
}
