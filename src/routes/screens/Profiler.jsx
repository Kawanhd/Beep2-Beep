import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.viewUp}>
        <TouchableOpacity style={styles.viewProfilePhoto}>
          <Image style={styles.profilePhoto}/>
        </TouchableOpacity>
      </View>
      <View style={styles.viewDown}>
        <View style={styles.textInputView}>
          <FontAwesome5 name="user-circle" size={32} color="black" />
          <TextInput placeholder='Nome completo' style={styles.textInput}/>
        </View>
        <View style={styles.textInputView}>
          <Foundation name="telephone" size={32} color="black" />
          <TextInput placeholder='Telefone' style={styles.textInput} keyboardType='phone-pad'/>
        </View>
        <View style={styles.textInputView}>
          <MaterialIcons name="email" size={32} color="black" />
          <TextInput placeholder='E-mail' style={styles.textInput} keyboardType='email-address'/>
        </View>
        <View style={styles.textInputView}>
          <MaterialIcons name="lock" size={32} color="black" />
          <TextInput placeholder='Senha' style={styles.textInput} secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  viewUp: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewProfilePhoto: {
    borderWidth: 5,
    height: 200,
    width: 200,
    borderRadius: 100,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#004aad',
    backgroundColor: '#fff',
  },

  profilePhoto: {
    height: 180,
    width: 180,
    borderRadius: 90,
  },

  viewDown: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  textInputView: {
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: '#004aad',
  },

  textInput: {
    width: '80%',
    fontSize: 16,
    paddingHorizontal: 10,
  },

  button: {
    width: '85%',
    height: 50,
    backgroundColor: '#004aad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20
  },

  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});