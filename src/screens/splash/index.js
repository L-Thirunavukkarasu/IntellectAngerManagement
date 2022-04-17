//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../constants/colors';
import RadioBtn from '../../components/radio';
// create a component
const Splash = ({navigation}) => {
  const [selectedPos, setSelectedPos] = useState(0);

  //navigate respective page based on selection
  redirect = () => {
    navigation.navigate(selectedPos == 1 ? 'Pyramid' : 'Circle');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sub_container}>
        <Image
          source={require('../../../assets/images/ic_splash.gif')}
          style={styles.img_splash}
        />
        <Text style={styles.splash_title_txt}>{`Anger Management App`}</Text>
      </View>
      <View style={styles.type_selection}>
        <Text
          style={
            styles.splash_desc_txt
          }>{`Please select the anger management scale type`}</Text>
        <View style={styles.radio_btn}>
          <RadioBtn
            selected={selectedPos == 0 ? true : false}
            color={colors.app_white_clr}
            txtVal={'Circle'}
            onClicked={() => setSelectedPos(0)}
          />
          <RadioBtn
            selected={selectedPos == 1 ? true : false}
            color={colors.app_white_clr}
            txtVal={'Pyramid'}
            onClicked={() => setSelectedPos(1)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.get_started_btn}
        onPress={() => redirect()}>
        <Text style={styles.txt_nxt}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app_bg_clr,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  splash_title_txt: {
    fontSize: 20,
    color: colors.app_white_clr,
    marginVertical: 20,
  },
  splash_desc_txt: {
    marginHorizontal: '5%',
    textAlign: 'justify',
    color: colors.app_white_clr,
    fontSize: 15,
    marginVertical: '5%',
  },
  get_started_btn: {
    width: '85%',
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: colors.app_white_clr,
    padding: '5%',
    alignItems: 'center',
    marginVertical: 20,
  },
  radio_btn: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img_splash: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  type_selection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  txt_nxt: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default Splash;
