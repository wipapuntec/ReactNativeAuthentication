import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Colors from '../utils/Colors';

const TextInputEllipse = styled.TextInput.attrs(props => ({
  allowFontScaling: false,
  placeholderTextColor: Colors.mainWhite,
}))`
  color: ${Colors.mainBlack};
  width: 326px;
  height: 46px;
  margin: 5px 0;
  font-size: 25px;
  line-height: 27px;
  justify-content: center;
  border-radius: 8px;
  border: solid 1px #e8e8e8;
  background-color: white;
  padding-horizontal: 20px;
  padding-vertical: 0;
`;

TextInputEllipse.propTypes = {
  value: PropTypes.any,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
};

export const TextInput = styled.TextInput.attrs(props => ({
  allowFontScaling: false,
  placeholderTextColor: 'darkgray',
  disabled: props.disabled,
  keyboardType: props.keyboardType ? props.keyboardType : 'default',
}))`
  width: 100%;
  border-bottom-width: 0.5px;
  border-color: ${Colors.lightGray};
  color: ${Colors.mainGray};
  line-height: 28px;
  background-color: white;
  padding-vertical: 10px;
  font-size: 18px;
`;

export const TextInputRequired = styled.TextInput.attrs(props => ({
  allowFontScaling: false,
  placeholderTextColor: 'darkgray',
  disabled: props.disabled,
  keyboardType: props.keyboardType ? props.keyboardType : 'default',
}))`
  width: 100%;
  border-radius: 8px;
  border: solid 1px ${Colors.lightGray};
  padding: 4%;
  color: ${Colors.mainGray};
  background-color: ${Colors.white};
  line-height: 28px;
  font-size: 18px;
`;

export const TextInputGray = styled.TextInput.attrs(props => ({
  allowFontScaling: false,
}))`
  border-radius: 8px;
  border: solid 1px ${Colors.lightGray};
  width: 100%;
  padding: 4%;
  padding-left: 12px;
  padding-right: 12px;
  font-family: 'Ekachon-Medium';
`;

export const TextAreaInput = styled.TextInput.attrs(props => ({
  allowFontScaling: false,
  placeholderTextColor: 'darkgray',
  disabled: props.disabled,
  multiline: props.multiline,
}))`
  width: 100%;
  height: 130px;
  border-radius: 8px;
  border: solid 1px ${Colors.lightGray};
  border-color: ${Colors.lightGray};
  color: ${Colors.mainGray};
  line-height: 28px;
  background-color: white;
  padding-vertical: 10px;
  padding-horizontal: 8px;
  font-size: 18px;
  text-align-vertical: top;
`;
