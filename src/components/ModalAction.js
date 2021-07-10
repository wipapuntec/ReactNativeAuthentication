//@flow
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Modal, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {hideModal, setHideModalAction} from '../redux/modal/action';
import {ButtonModal} from './Button';
import {TextBlack, TextWhite} from './Text';
import {ModalView} from './Layout';

const ModalAction = () => {
  const dispatch = useDispatch();
  const {icon, detail, action, isVisible} = useSelector(
    state => state.modal.modalAction,
  );
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => dispatch(hideModal())}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ModalView style={{width: '80%'}}>
          {icon && (
            <View>
              <Image
                source={
                  icon === 'success'
                    ? require('../icons/Correct.png') //sucesss
                    : require('../icons/error.png') //error
                }
                style={{
                  width: 70,
                  height: 70,
                }}
                resizeMode="contain"
              />
            </View>
          )}

          <View>
            <TextBlack>{detail}</TextBlack>
          </View>

          <ButtonModal
            onPress={() => {
              dispatch(setHideModalAction());
              action();
            }}
            activeOpacity={0.8}>
            <View>
              <TextWhite>
                <FormattedMessage id="modal.close" />
              </TextWhite>
            </View>
          </ButtonModal>
        </ModalView>
      </View>
    </Modal>
  );
};

export default ModalAction;
