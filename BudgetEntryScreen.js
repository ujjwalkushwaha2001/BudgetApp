// BudgetEntryScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {addBudgetEntry} from './redux/actions';

const BudgetEntryScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');
  const [notvalidInput, setnotvalidInput] = useState(false);
  const [budgetSave, setbudgetSave] = useState(false);
  const dispatch = useDispatch();

  const saveEntry = () => {
    if (
      name.length == 0 ||
      plannedAmount.length == 0 ||
      actualAmount.length == 0
    ) {
      setnotvalidInput(true);
      setTimeout(() => setnotvalidInput(false), 2000);
    } else {
      dispatch(addBudgetEntry({name, plannedAmount, actualAmount}));
      setbudgetSave(true);
      setName('');
      setPlannedAmount('');
      setActualAmount('');
      setnotvalidInput(false);
      setTimeout(() => setbudgetSave(false), 2000);
    }
  };

  return (
    <View>
      <Text style={styles.Headers}>Budget Entry</Text>
      <View style={{marginTop: 40}}>
        {notvalidInput ? (
          <Text style={{color: 'red', marginLeft: 20, marginTop: 10}}>
            All fields are mandotary:
          </Text>
        ) : null}
        {budgetSave ? (
          <Text style={{color: 'green', marginLeft: 20, marginTop: 10}}>
            Your budget have saved successfully:
          </Text>
        ) : null}
        <View style={styles.text}>
          <TextInput placeholder="Name" value={name} onChangeText={setName} />
          <TextInput
            placeholder="Planned Amount"
            value={plannedAmount}
            onChangeText={setPlannedAmount}
          />
          <TextInput
            placeholder="Actual Amount"
            value={actualAmount}
            onChangeText={setActualAmount}
          />
        </View>
        <View style={styles.Button}>
          <Button color={'seagreen'} title="Save" onPress={saveEntry} />
        </View>
        <View style={styles.Button}>
          <Button
            color={'slategray'}
            title="Show Items"
            onPress={() => navigation.navigate('BudgetEntryListing')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 15,
    fontSize: 30,
    backgroundColor: 'silver',
    borderWidth: 3,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  Button: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 3,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
  },
  Headers: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    backgroundColor: 'grey',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    borderRadius: 5,
    height: 100,
    padding: 10,
    borderWidth: 1.5,
  },
});
export default BudgetEntryScreen;
