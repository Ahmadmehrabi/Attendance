
import React, { useCallback } from 'react';
import { StyleSheet, View, Pressable, Text ,Image} from 'react-native';


export default function Button({ children, style, activeOpacity, ...otherProps }) {
  const _style = useCallback(
    ({ pressed }) => [{ opacity: pressed ? activeOpacity : 1 }, style && style],
    [style]
  );

  return (
    <Pressable style={_style} {...otherProps}>
      {children}
    </Pressable>
  );

  
}



const styles = StyleSheet.create({

  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#307ecc'
  },

});
