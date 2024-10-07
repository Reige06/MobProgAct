import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Stylesheet/styles';

const Body = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color="black" /> 
      </View>
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Body;
