/* Core */
import React, {useEffect, useState} from 'react';

/* Presentational */
import {
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
  Dimensions,
  Alert,
} from 'react-native';

import {
  UserContainer,
  Thumbnail,
  InfoContainer,
  BioContainer,
  LikesContainer,
  Name,
  Description,
  Likes,
} from './styles';

const {width} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/FontAwesome';

export default function User({user, onPress}) {
  const translateY = new Animated.Value(50);
  const translateX = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 5,
        speed: 7,
        bounceness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const panResponder = useState(
    PanResponder.create({
      onPanResponderTerminationRequest: () => false,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event([
        null,
        {
          dx: translateX,
        },
      ]),

      onPanResponderRelease: () => {
        if (translateX._value < -200) {
          Alert.alert('Deleted!');
        }

        Animated.spring(translateX, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
      },

      onPanResponderTerminate: () => {
        Animated.spring(translateX, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
      },
    }),
    {useNativeDriver: true},
  )[0];

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        {
          transform: [{translateX: translateX}, {translateY: translateY}],
        },
        {opacity: opacity},
      ]}>
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <UserContainer>
          <Thumbnail source={{uri: user.thumbnail}} />

          <InfoContainer style={{backgroundColor: user.color}}>
            <BioContainer>
              <Name>{user.name.toUpperCase()}</Name>
              <Description>{user.description}</Description>
            </BioContainer>
            <LikesContainer>
              <Icon name="heart" size={12} color="#FFF" />
              <Likes>{user.likes}</Likes>
            </LikesContainer>
          </InfoContainer>
        </UserContainer>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}
