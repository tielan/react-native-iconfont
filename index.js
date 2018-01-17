import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Iconfont extends React.Component {
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
//自定义属性
Iconfont.propTypes = {
  //iconfont显示文本
  label: React.PropTypes.string,
  //iconfont显示的icon(如e603)
  icon: React.PropTypes.string,
  //字体文件
  fontFamily: React.PropTypes.string,
  //icon颜色
  iconColor: React.PropTypes.string,
  //文本相对于icon的位置（left/right/top/bottom/none）
  position: React.PropTypes.string,
  //icon大小
  iconSize: React.PropTypes.number,
  //文本大小
  labelSize: React.PropTypes.number,
  //文本颜色
  labelColor: React.PropTypes.string,
  //背景颜色
  bgColor: React.PropTypes.string,
  //图标和文字的间距
  iconPadding: React.PropTypes.number
}

//默认属性
Iconfont.defaultProps = {
  fontFamily: 'iconfont',
  iconColor: '#fff',
  position: 'right',
  iconSize: 20,
  labelSize: 12,
  labelColor: '#000',
  bgColor: '#0000',
  iconPadding: 3,
}
export default Iconfont;