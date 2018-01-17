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
      name,
      color,
      size,
      fontFamily,
      label,
      labelSize,
      labelColor,
      position,
      iconPadding,
      bgColor
      } = this.props;

    var direction = ((position == 'left' || position == 'right') ? 'row' : 'column');

    var img = String.fromCharCode(parseInt(name, 16));

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
        <Text style={{ fontSize: size, color: color, fontFamily: fontFamily, backgroundColor: bgColor }}>
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
  color: '#fff',
  position: 'right',
  size: 20,
  labelSize: 12,
  labelColor: '#000',
  bgColor: '#0000',
  iconPadding: 3,
  label:''
}
export default Icon;