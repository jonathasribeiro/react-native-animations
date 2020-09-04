import styled from 'styled-components/native';

export const UserContainer = styled.View`
  margin-top: 10px;
  border-radius: 10px;
  flex-direction: column;
  margin-horizontal: 15px;
`;

export const Thumbnail = styled.Image`
  width: 100%;
  height: 150px;
`;

export const InfoContainer = styled.View`
  background-color: #57bcbc;
  flex-direction: row;
  align-items: center;
  padding-vertical: 8px;
  padding-horizontal: 15px;
`;

export const BioContainer = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-top: 2px;
`;

export const LikesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding-vertical: 3px;
  padding-horizontal: 8px;
  border-radius: 20px;
`;

export const Likes = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
`;
