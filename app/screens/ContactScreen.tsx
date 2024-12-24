import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton.tsx';

const ContactScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('Menu');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter the text.."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
              </View>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter the text.."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
              </View>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>City</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter the text.."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={values.subject}
                  onChangeText={handleChange('subject')}
                />
              </View>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Index</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter the text.."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  value={values.message}
                  onChangeText={handleChange('message')}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
      <View style={styles.buttonContainer}>
        <CustomButton title="Back to menu" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 40,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.black,
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    position: 'absolute',
    top: -10,
  },
  inputContainer: {
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.transparentWhite,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
});

export default ContactScreen;
