import styled from 'styled-components/native';
import Colors from '../utils/Colors';

export const Button = styled.TouchableOpacity`
  backgroundColor: ${Colors.mainBlue}
  justifyContent: center
  alignItems: center
  width: 100%
  padding: 10px
  border-radius: 5px
`;

export const TouchablePinCodeNumber = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  backgroundColor: white;
  borderRadius: 50px
  margin: 2%;
`;

export const ButtonModal = styled.TouchableOpacity`
  background-color: ${Colors.mainBlue};
  width: 80%;
  margin-top: 20px;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
`;

export const TouchableWithBorderBlue = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: solid 1px ${Colors.mainBlue};
  background-color: ${Colors.mainBlue};
  align-items: center;
  justify-content: center;
`;

export const TouchableWithBorderGray = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: solid 1px ${Colors.lightGray};
  background-color: ${Colors.lightGray};
  align-items: center;
  justify-content: center;
`;

export const ButtonConsent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CircleWithPin = styled.View`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 1000px;
  border-color: black;
  margin-top: 0px;
  border-width: 1px;
`;

export const CircleOrangeWithPin = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${Colors.orange};
  border-radius: 1000px;
  margin-top: 0px;
`;
export const CircleBlueWithPin = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${Colors.mainBlue};
  border-radius: 1000px;
  margin-top: 0px;
`;

export const CircleWhite = styled.View`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 1000px;
  border-color: black;
  margin-top: 0px;
  border-width: 1px;
  padding: 2px;
`;

export const CircleWhiteSelect = styled.View`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 1000px;
  border-color: black;
  margin-top: 0px;
  border-width: 1px;
  padding: 2px;
  align-items: center;
`;

export const CircleGreenConsent = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.mainBlue};
  border-radius: 1000px;
  margin-top: 0px;
`;
