import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Stylesheet/styles';
// import profile from '../Assets/461484536_8513765898692160_4176333263205070856_n.jpg';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../Assets/461484536_8513765898692160_4176333263205070856_n.jpg')}
          style={styles.profileImage}
        />
      </View>
      <View>
        <Text style={styles.profileName}>Reige J. Bongo</Text>
        <Text style={styles.jobDescript}>Network Security Engineer</Text>
        <TouchableOpacity style={styles.viewProfileButton}>
          <Text style={styles.viewProfileText}>View Profile</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Header;
