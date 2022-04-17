//import liraries
import React, {useState, memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Platform
} from 'react-native';
import * as Data from '../../data';
import {colors} from '../../constants/colors';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import Slider from '@react-native-community/slider';

// create a component
const Circle = () => {
  //state & props init
  const [sliderVal, setSliderVal] = useState(5);
  const [progressVal, setProgressVal] = useState(50);
  const props = {
    activeStrokeWidth: 12,
    inActiveStrokeWidth: 12,
    inActiveStrokeOpacity: 0.2,
  };

  //render line
  const renderLine = index => {
    return <View key={index} style={styles.line(index)} />;
  };

  //update slider & progress values
  const sliderUpdate = val => {
    let value = Math.round(val);
    setSliderVal(value);
    let progress = value * 10;
    setProgressVal(progress);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll_container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Platform.OS == 'ios' ? styles.scroll_container : {}}>
        <View style={styles.horizontal_view}>
          {Data.PyramidArrayData.map((item, index) => {
            return renderLine(index);
          })}
        </View>
        <View style={styles.header_txt_view}>
          <View style={styles.header_title_view}>
            <Text style={styles.txt_title}>
              {'RESCUE SESSION: ANGER & FRUSTATION'}
            </Text>
            <TouchableOpacity onPress={() => alert('close btn pressed')}>
              <Image
                source={require('../../../assets/images/ic_close.png')}
                style={styles.img_close_btn}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={
              styles.txt_desc
            }>{`Pick the level your anger & \nfrustation right now`}</Text>
        </View>
        <View style={styles.pyramid_view}>
          <View style={styles.dashed_circle}>
            <CircularProgressBase
              {...props}
              value={progressVal}
              radius={125}
              activeStrokeColor={colors.app_white_clr}
              inActiveStrokeColor={colors.app_bg_clr}>
              <View style={styles.inner_circle_light}>
                <View style={styles.inner_circle_dark}>
                  <Text style={styles.txt_slider_val}>{sliderVal}</Text>
                </View>
              </View>
            </CircularProgressBase>
          </View>
        </View>
        <Slider
          style={styles.slider_horizontal_bar}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor={colors.app_circle_bg}
          maximumTrackTintColor={colors.app_white_clr}
          onValueChange={value => sliderUpdate(value)}
          value={sliderVal}
          thumbTintColor={colors.app_circle_bg}
        />
        <TouchableOpacity
          style={styles.btn_view}
          onPress={() => alert(`Your anger level is ${progressVal}`)}>
          <Text style={styles.txt_nxt}>NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.app_bg_clr,
    paddingStart: 20,
    paddingEnd: 20,
  },
  scroll_container: {
    flex: 1,
    width: '100%',
  },
  header_txt_view: {
    marginTop: 15,
    marginBottom: 25,
    justifyContent: 'center',
    width: '100%',
  },
  pyramid_view: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btn_view: {
    borderRadius: 30,
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  pyramid_indicator_view: item => ({
    backgroundColor: item?.isSelected
      ? colors.app_white_clr
      : colors.app_select_clr,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: item?.width,
    height: 30,
    marginBottom: 20,
  }),
  txt_title: {color: 'white', fontSize: 13, fontWeight: '600', flex: 1},
  txt_desc: {
    color: 'white',
    fontSize: 19,
    marginVertical: 30,
    lineHeight: 25,
    fontWeight: '600',
  },
  txt_angry_level: {
    color: 'white',
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  img_close_btn: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginStart: 20,
  },
  header_title_view: {flexDirection: 'row', alignItems: 'center'},
  line: index => ({
    flex: 1,
    height: 5,
    borderRadius: 3,
    backgroundColor: index == 0 ? colors.app_white_clr : colors.app_select_clr,
    marginTop: 50,
    marginStart: index == 0 ? 0 : 10,
  }),
  horizontal_view: {flexDirection: 'row'},
  dashed_circle: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 500,
    padding: 20,
    borderColor: colors.app_white_clr,
    zIndex: 0,
  },
  inner_circle_light: {
    width: '87%',
    height: '87%',
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.app_select_clr,
  },
  inner_circle_dark: {
    width: '60%',
    height: '60%',
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.app_circle_bg,
  },
  txt_slider_val: {
    fontSize: 28,
    color: colors.app_white_clr,
    fontWeight: '600',
  },
  slider_horizontal_bar: {
    width: '80%',
    height: 40,
    alignSelf: 'center',
    marginVertical: 20,
  },
  txt_nxt: {
    fontSize: 15,
    fontWeight: '600',
  },
});

//make this component available to the app
export default memo(Circle);
