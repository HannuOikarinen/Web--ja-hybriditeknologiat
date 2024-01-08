import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const HeartRateCalculator = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateHeartRateLimits = (inputAge) => {
    if (inputAge !== '') {
      const parsedAge = parseInt(inputAge, 10);
      const lower = Math.floor((220 - parsedAge) * 0.65);
      const upper = Math.floor((220 - parsedAge) * 0.85);

      setLowerLimit(lower.toString());
      setUpperLimit(upper.toString());
    } else {
      setLowerLimit('');
      setUpperLimit('');
    }
  };

  const handleAgeChange = (text) => {
    setAge(text);
    calculateHeartRateLimits(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Age"
        value={age}
        onChangeText={handleAgeChange}
      />
      <View style={styles.limitsContainer}>
        <Text style={styles.limitsText}>Lower Limit: {lowerLimit}</Text>
        <Text style={styles.limitsText}>Upper Limit: {upperLimit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  limitsContainer: {
    alignItems: 'left',
  },
  limitsText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HeartRateCalculator;
