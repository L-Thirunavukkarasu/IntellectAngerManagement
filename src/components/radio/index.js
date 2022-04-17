//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';
// create a component
const RadioBtn = props => {
  return (
    <TouchableOpacity
      style={styles.parent}
      onPress={() => (props?.onClicked ? props.onClicked() : null)}>
      <View style={[styles.container(props.color), props.style]}>
        {props?.selected ? <View style={styles.btn(props.color)} /> : null}
      </View>
      <Text style={styles.txt_btn_val}>{props?.txtVal}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  container: clr => ({
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: clr ? clr : colors.app_white_clr,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  }),
  btn: clr => ({
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: clr ? clr : colors.app_white_clr,
  }),
  txt_btn_val: {
    color: colors.app_white_clr,
    fontSize: 15,
  },
});

//make this component available to the app
export default RadioBtn;
