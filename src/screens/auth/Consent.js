//@flow
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import {TextConsent, TextWhite} from '../../components/Text';
import {FormattedMessage} from 'react-intl';
import {
  TouchableWithBorderBlue,
  TouchableWithBorderGray,
  CircleWhite,
  CircleWhiteSelect,
  CircleGreenConsent,
  ButtonConsent,
} from '../../components/Button';
import {useDispatch} from 'react-redux';
import {updateFlagConsent} from '../../redux/auth/action';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const Consent: () => React$Node = () => {
  const [canCheck, setCanCheck] = useState(true);
  const [isSelected, setSelection] = useState(false);
  const dispatch = useDispatch('');
  const goToHome = () => {
    dispatch(updateFlagConsent());
  };

  const deviceSize = Dimensions.get('window').height;

  const consentMessage =
    'ข้อตกลงต่อไปนี้ (“ข้อตกลงการใช้งาน”) จะเป็นข้อตกลงการใช้ระหว่างคุณกับเว็บไซต์ www.AppAuth.com และ แอปพลิเคชั่น AppAuth ซึ่งรวมถึงเนื้อหา การใช้เงิน และการให้บริการทั้งหมดบนเว็บไซต์ www.AppAuth.com และ แอปพลิเคชั่น AppAuth บนระบบปฏิบัติการ Android และ iOS ที่คุณต้องปฏิบัติตาม โดยการเข้าถึงหรือเข้าใช้บริการเว็บไซต์หรือแอปพลิเคชัน AppAuth ดูดวงออนไลน์ หรือ www.AppAuth.com ("เว็บไซต์หรือแอปพลิเคชัน”) ภายใต้การควบคุมดูแลของ AppAuth บริษัทโมโน ไซเบอร์ จำกัด ("AppAuth”) จะหมายถึง ท่านยอมรับข้อตกลง ข้อกำหนดและเงื่อนไขการใช้บริการ ที่ปรากฏบนเว็บไซต์หรือแอปพลิเคชันว่ามีผลผูกพันตามกฎหมาย ("เงื่อนไข”) และท่านตกลงยอมรับ และปฏิบัติตาม นโยบายความเป็นส่วนตัวของเว็บไซต์ หรือแอปพลิเคชันและยอมรับที่จะปฏิบัติตามกฎระเบียบอื่นๆ บนเว็บไซต์หรือแอปพลิเคชัน เช่น วิธีการใช้ วิธีปฏิบัติและขั้นตอนหรือเงื่อนไขสำหรับการเข้าถึงหรือการใช้บริการของเว็บไซต์หรือแอปพลิเคชั่นเว็บไซต์หรือแอปพลิเคชั่นAppAuth ดูดวงออนไลน์ ในการเข้าใช้ หรือรับบริการ บนแพลตฟอร์มในการเป็นสื่อกลางระหว่างท่านในฐานะผู้สนใจ ในการรับบริการดูดวง พยากรณ์ หรือทำนายโชคชะตา จาก(“หมอดู" หรือ “นักพยากรณ์” หรือ "นักพยากรณ์ ”) กับท่านผู้ใช้บริการผู้ที่มีความประสงค์ในการตรวจสอบดวงชะตา ราศี หรือต้องการขอคำปรึกษาเกี่ยวกับดวงชะตาราศี หรือโหราศาสตร์แขนงต่างๆ ("ผู้ใช้บริการดูดวง”) โดยท่านสามารถรับบริการตรวจสอบ ทำนาย ดวงชะตา ราศี หรือโหราศาสตร์ ต่างๆ และเผยแพร่ผ่านเว็บไซต์ หรือแอปพลิเคชั่น ซึ่งอาจเป็นบทความ ข้อความ ภาพ และเสียง หรือ สื่อวิดีโอ หรือแสดงการถ่ายทอดสด (Live) ในเรื่องการดูดวง การพยากรณ์ หรือการทำนายโชคชะตา หรือรับคำแนะนำ คำปรึกษา การสนทนา ตอบข้อซักถาม คำถาม ข้อสงสัย จากนักพยากรณ์ ผ่านช่องทาง หรือแพลตฟอร์มของ AppAuth ในขณะที่ผู้ใช้บริการดูดวงสามารถเลือกรับบริการ อ่าน หรือรับชม บทความ เนื้อหา รูปภาพ คลิปวีดีโอ หรือผลงานต่างๆ ที่สนใจ รวมถึงการขอคำปรึกษา ถามคำถามกับนักพยากรณ์ที่ให้บริการ รวมไปถึงการใช้บริการในการเปิดไพ่ รับฟังคำทำนาย และใช้บริการดูดวงในรูปแบบอื่นๆ ตามเงื่อนไขที่กำหนด AppAuth กำหนด';

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1, flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flex: deviceSize > 700 ? 6 : 4,
              backgroundColor: 'white',
              paddingHorizontal: '2%',
              marginHorizontal: '3%',
              padding: '2%',
            }}>
            <ScrollView
              style={{marginTop: '5%', paddingHorizontal: '2%'}}
              onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  setCanCheck(false);
                }
              }}>
              <TextConsent>{`\t${consentMessage}`}</TextConsent>
            </ScrollView>
          </View>
          <View style={{flex: 1, padding: '5%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '5%',
                justifyContent: 'center',
              }}>
              {isSelected ? (
                <ButtonConsent onPress={() => setSelection(!isSelected)}>
                  <CircleWhiteSelect>
                    <CircleGreenConsent />
                  </CircleWhiteSelect>
                  <TextConsent style={{marginLeft: 5}}>
                    <FormattedMessage id="consent.acceptpolicy" />
                  </TextConsent>
                </ButtonConsent>
              ) : (
                <ButtonConsent
                  disabled={canCheck}
                  onPress={() => setSelection(!isSelected)}>
                  <CircleWhite />
                  <TextConsent style={{marginLeft: 5}}>
                    <FormattedMessage id="consent.acceptpolicy" />
                  </TextConsent>
                </ButtonConsent>
              )}
            </View>

            <View>
              {isSelected ? (
                <TouchableWithBorderBlue onPress={goToHome}>
                  <TextWhite>
                    <FormattedMessage id="register.next" />
                  </TextWhite>
                </TouchableWithBorderBlue>
              ) : (
                <TouchableWithBorderGray disable={true}>
                  <TextConsent>
                    <FormattedMessage id="register.next" />
                  </TextConsent>
                </TouchableWithBorderGray>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Consent;
