// BudgetEntryListingScreen.js
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';

const BudgetEntryListingScreen = ({navigation}) => {
  const budgetEntries = useSelector(state => state.budgetEntries);
  return (
    <View>
      <Text style={styles.header}>Budget Entry Listing</Text>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Name</Text>
          <Text style={styles.headingText}>Planned Amount</Text>
          <Text style={styles.headingText}>Actual Amount</Text>
        </View>
        {budgetEntries.map(entry => (
          <View key={entry.id} style={styles.entryContainer}>
            <Text style={styles.entryText}>{entry.name}</Text>
            <Text style={styles.entryText}>{entry.plannedAmount}</Text>
            <Text style={styles.entryText}>{entry.actualAmount}</Text>
          </View>
        ))}
      </View>
      <View style={styles.Button}>
        <Button
          color={'seagreen'}
          title="Add new Budget"
          onPress={() => navigation.navigate('BudgetEntry')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  entryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'silver',
  },
  entryText: {
    fontSize: 16,
    color: 'black',
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    backgroundColor: 'grey',
    margin: 15,
    borderRadius: 5,
    height: 100,
    padding: 10,
    textAlignVertical: 'center',
    fontSize: 30,
    borderWidth: 2,
  },
  Button: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 3,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
  },
});
export default BudgetEntryListingScreen;
