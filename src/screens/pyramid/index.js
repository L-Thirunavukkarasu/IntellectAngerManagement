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
} from 'react-native';
import * as Data from '../../data';
import {colors} from '../../constants/colors';
// create a component
const Pyramid = () => {
  const [pyramidArray, setPyramidArray] = useState(Data.PyramidArrayData);
  const [selectedPos, setSelectedPos] = useState(5);

  //render scale line view
  const renderScaleLine = (item, pos) => {
    return (
      <TouchableOpacity
        key={pos}
        onPress={() => {
          //set existing arrays values into new array
          const newArray = [...pyramidArray];
          //update slider selected or not based on selected item position
          pyramidArray.map((item, index) => {
            newArray[index].isSelected = pos <= index ? true : false;
          });
          setPyramidArray(newArray);
          setSelectedPos(pos);
        }}>
        <View key={item?.id} style={styles.pyramid_indicator_view(item)} />
      </TouchableOpacity>
    );
  };

  //render line
  const renderLine = index => {
    return <View key={index} style={styles.line(index)} />;
  };

  //set the angry level based on the selected position
  let AngerLevel =
    selectedPos >= 3 ? 'Low' : selectedPos >= 2 ? 'Medium' : 'High';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll_container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Platform.OS == 'ios' ? styles.scroll_container : {}}>
        <View style={styles.horizontal_view}>
          {pyramidArray.map((item, index) => {
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
        <Text style={styles.txt_angry_level}>{AngerLevel}</Text>
        <View style={styles.pyramid_view}>
          {pyramidArray.map((item, index) => {
            return renderScaleLine(item, index);
          })}
        </View>
        <TouchableOpacity
          style={styles.btn_view}
          onPress={() => alert(`Your anger level is ${AngerLevel}`)}>
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
    flexGrow: 1,
    width: '100%',
  },
  header_txt_view: {
    marginTop: 15,
    marginBottom: 50,
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
    alignSelf: 'center',
    marginVertical:20
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
  txt_nxt: {
    fontSize: 15,
    fontWeight: '600',
  },
});

//make this component available to the app
export default memo(Pyramid);
