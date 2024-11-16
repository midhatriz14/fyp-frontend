import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GenderSelection from './GenderSelection';
import RoleSelection from './RoleSelection';
import DateInput from './DateInput';
import BudgetInput from './BudgetInput';
import SubmitButton from './SubmitButton';

const EventDetailsFormIndex: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter your details for personalized experience
      </Text>
      <GenderSelection />
      <RoleSelection />
      <Text style={styles.sectionTitle}>Event</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter your Mobile Number</Text>
      </View>
      <DateInput />
      <Text style={styles.sectionTitle}>Event</Text>
      <BudgetInput />
      <SubmitButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 78,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
  },
  title: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 50,
    width: 249,
  },
  sectionTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 16,
  },
  inputContainer: {
    borderRadius: 12,
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 340,
    flexDirection: 'column',
    alignItems: 'stretch',
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    color: 'rgba(132, 132, 132, 0.46)',
    fontWeight: '400',
    textAlign: 'center',
  },
  inputLabel: {
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
});

export default EventDetailsFormIndex;