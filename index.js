import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Icon extends React.Component {
  render() {
    const {
      fontFamily,
      label,
      labelSize,
      labelColor,
      icon,
      iconColor,
      iconSize,
      position,
      iconPadding,
      bgColor
      } = this.props;

    var direction = ((position == 'left' || position == 'right') ? 'row' : 'column');

    var img = String.fromCharCode(parseInt(icon, 16));

    return (
      <View style={[styles.container, { flexDirection: direction }]}>
        {
          position == 'top' ?
            <View style={{ paddingBottom: iconPadding }}>
              <Text style={{ fontSize: labelSize, color: labelColor, backgroundColor: bgColor }}>{label}</Text>
            </View> : null
        }
        {
          position == 'left' ?
            <View style={{ paddingRight: iconPadding }}>
              <Text style={{ fontSize: labelSize, color: labelColor, backgroundColor: bgColor }}>{label}</Text>
            </View> : null
        }
        <Text style={{ fontSize: iconSize, color: iconColor, fontFamily: fontFamily, backgroundColor: bgColor }}>
          {img}
        </Text>
        {
          position == 'right' ?
            <View style={{ paddingLeft: iconPadding }}>
              <Text style={{ fontSize: labelSize, color: labelColor, backgroundColor: bgColor }}>{label}</Text>
            </View> : null
        }
        {
          position == 'bottom' ?
            <View style={{ paddingTop: iconPadding }}>
              <Text style={{ fontSize: labelSize, color: labelColor, backgroundColor: bgColor }}>{label}</Text>
            </View> : null
        }
      </View>
    );
  }

}

//默认属性
Icon.defaultProps = {
  fontFamily: 'iconfont',
  iconColor: '#fff',
  position: 'right',
  iconSize: 20,
  labelSize: 12,
  labelColor: '#000',
  bgColor: '#0000',
  iconPadding: 3,
  label:''
}
export default Icon;