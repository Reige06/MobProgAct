import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';
import Header from './src/components/Header/Header';
import Body from './src/components/Body/Body';
import styles from './src/components/Stylesheet/styles';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const currentStyles = darkMode ? styles.darkContainer : styles.container;
  const darkModeText = darkMode ? 'Light Mode' : 'Dark Mode';
  const textColor = darkMode ? '#fff' : '#000';

  return (
    <SafeAreaView style={currentStyles}>
      <StatusBar 
        barStyle={darkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={darkMode ? '#000' : '#fff'}
      />
      <ScrollView>
        <Header />
        <View style={styles.settingsHeader}>
          <Text style={[styles.settingsHeaderText, { color: textColor }]}>
            Settings
          </Text>
        </View>
        <Body icon="settings" label="Account Settings" />
        <Body icon="notifications" label="Notifications" />
        <Body icon="shield" label="Privacy & Security" />
        <Body 
          icon="moon" 
          label={darkModeText} 
          onPress={toggleDarkMode} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
