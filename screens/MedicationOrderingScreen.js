import React, { useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';

// MedicationDetails component to render the full medication information
const MedicationDetails = ({ medications }) => (
  <View style={{ marginTop: 20 }}>
    <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Selected Medication Details:</Text>
    {medications.map((medication) => (
      <View key={medication.id}>
        <Text>Name: {medication.name}</Text>
        <Text>Dosage: {medication.dosage}</Text>
        <Text>Frequency: {medication.frequency}</Text>
        <Text>Condition: {medication.condition}</Text>
        <Text>Notes: {medication.notes}</Text>
        <Text>Prescribed By: {medication.prescribedBy}</Text>
        <Text>--------------------</Text>
      </View>
    ))}
  </View>
);

const MedicationOrderingScreen = ({ navigation }) => {
  const medicationsForChronicConditions = [
    {
      id: '1',
      name: 'Medication 1',
      dosage: '10mg',
      frequency: 'Twice daily',
      condition: 'Hypertension',
      notes: 'Take with food',
      prescribedBy: 'Dr. Smith',
    },
    {
      id: '2',
      name: 'Medication 2',
      dosage: '20mg',
      frequency: 'Once daily',
      condition: 'Type 2 Diabetes',
      notes: 'Check blood sugar regularly',
      prescribedBy: 'Dr. Johnson',
    },
    // Add more medications as needed
  ];

  const [selectedMedications, setSelectedMedications] = useState([]);

  const handleMedicationSelect = (medication) => {
    if (selectedMedications.find((med) => med.id === medication.id)) {
      setSelectedMedications(selectedMedications.filter((med) => med.id !== medication.id));
    } else {
      setSelectedMedications([...selectedMedications, medication]);
    }
  };

  const handleOrderSubmit = async () => {
    if (selectedMedications.length === 0) {
      // Alert user to select at least one medication
      return;
    }

    // Proceed with the order submission, passing selected medications array to the next screen
    navigation.navigate('OrderConfirmation', { selectedMedications });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={medicationsForChronicConditions}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Button
              title={selectedMedications.find((med) => med.id === item.id) ? "Selected" : "Select"}
              onPress={() => handleMedicationSelect(item)}
              color={selectedMedications.find((med) => med.id === item.id) ? "green" : undefined}
            />
            <View style={{ marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>{item.condition}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <MedicationDetails medications={selectedMedications} />
      <Button title="Submit Order" onPress={handleOrderSubmit} />
    </View>
  );
};

export default MedicationOrderingScreen;
