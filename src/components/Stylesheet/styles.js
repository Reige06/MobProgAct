import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 25,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 25,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#3f5efb',
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    height: 300,
  },
  imageContainer: {
    marginBottom: 10,
    paddingTop: 25
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 15
  },
  jobDescript: {
    fontSize: 14,
    paddingTop: 10,
    color: '#fff',
  },
  viewProfileButton: {
    marginTop: 10,
    backgroundColor: '#0b2863',   
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  viewProfileText: {
    color: '#fff',                
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },

  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#00c6ff',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  settingsHeaderText: {
    margin: 5,
    padding: 10,
    fontSize: 20
  }

});

export default styles;
