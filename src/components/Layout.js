import styled from 'styled-components/native';
import Colors from '../utils/Colors';

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${Colors.mainBlack};
`;

export const ContentSimple = styled.View`
  flex-direction: column;
  padding-horizontal: 15%;
  flex: 1;
  padding-vertical: 15%;
`;

export const Content = styled.View`
  flex-direction: column;
  padding-vertical: 15%;
  flex: 1;
  padding-horizontal: 7%;
`;
export const CardSettingLayout = styled.View`
  width: 100%;
  min-height: 10%;
  border-radius: 8px;
  border: solid 1px ${Colors.white};
  background-color: ${Colors.white};
  justify-content: space-between;
`;

export const ModalView = styled.View`
  margin: 30px;
  background-color: white;
  borderRadius: 10px;
  padding: 30px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0px,
    height: 1px,
  };
  shadow-opacity: 0.25px;
  shadow-radius: 3.84px;
  elevation: 5px;
`;

export const LineGray = styled.View`
  width: 100%;
  height: 0.25px;
  border: solid 0.25px;
  border-color: ${Colors.lightGray};
  margin-vertical: 10px;
`;
export const LineBlue = styled.View`
  width: 100%;
  height: 0.5px;
  border: solid 0.5px;
  border-color: ${Colors.lightBlue};
  margin-vertical: 10px;
`;

export const ViewIcon = styled.View`
  position: absolute;
  left: 0px;
`;
export const ViewIconRight = styled.View`
  position: absolute;
  right: 0px;
`;
export const ViewIconLeft = styled.View`
  position: absolute;
  left: 0px;
`;

export const TitleView = styled.View`
  flex-direction: row;
`;

export const ViewMainBorder = styled.View`
  flex-direction: row;
  margin-top: 0px;
`;

export const ViewMain = styled.View`
  flex-direction: row;
  margin-top: 0px;
`;

export const SimpleCard = styled.View`
  flex-direction: 'row';
  background-color: 'white';
  height: 100;
  padding: 15;
  border: solid 5px ${Colors.mainGray};
  margin-vertical: 0;
  border-radius: 8;
`;
