import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  table: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
});

const ReservationScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('ReservationSuccessScreen');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          table: '',
          time: '',
          date: '',
        }}
        validationSchema={ReservationSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched, isValid}) => {
          const isFormFilled = Object.values(values).every(
            value => value !== '',
          );

          return (
            <>
              <View style={styles.formContainer}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Name</Text>
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
                  <Text style={styles.label}>Phone number</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter the text.."
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={values.phone}
                      onChangeText={handleChange('phone')}
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Table number</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter the text.."
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={values.table}
                      onChangeText={handleChange('table')}
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Indicate time of the visit</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter the text.."
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={values.time}
                      onChangeText={handleChange('time')}
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Date</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter the text.."
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={values.date}
                      onChangeText={handleChange('date')}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton
                  isDisabled={!isFormFilled && !isValid}
                  title="Reservation"
                  onPress={handleSubmit}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
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
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
  },
});

export default ReservationScreen;
