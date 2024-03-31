import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

const StatementScreen = ({ navigation }) => {
  const [statements, setStatements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setIsLoading(true);
    // setError(null); // Clear any previous errors

    // Fetch statements from your backend API
    // fetch('https://your-backend-api/statements') // Replace with your API endpoint
    //   .then(response => response.json())
    //   .then(data => {
    //     setStatements(data);
    //   })
    //   .catch(error => {
    //     setError(error);
    //   })
    //   .finally(() => setIsLoading(false));
  }, []);

  // Temporary dummy data for testing frontend
  const dummyData = [
    {
      id: 1,
      orderId: '12345',
      date: '2024-04-01',
      medications: [
        { name: 'Medication A', dosage: '10mg' },
        { name: 'Medication B', dosage: '20mg' },
      ],
    },
    {
      id: 2,
      orderId: '67890',
      date: '2024-04-02',
      medications: [
        { name: 'Medication C', dosage: '15mg' },
        { name: 'Medication D', dosage: '30mg' },
      ],
    },
  ];

  // Temporary dummy data assignment
  useEffect(() => {
    setStatements(dummyData);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* {isLoading && <Text>Loading statements...</Text>}
      {error && <Text>Error fetching statements: {error.message}</Text>} */}
      {statements.length > 0 && (
        <FlatList
          data={statements}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text>Order ID: {item.orderId}</Text>
              <Text>Date: {item.date}</Text>
              <Text>Medications:</Text>
              {item.medications.map((medication, index) => (
                <View key={index} style={{ marginLeft: 20 }}>
                  <Text>Name: {medication.name}</Text>
                  <Text>Dosage: {medication.dosage}</Text>
                  {/* Add more medication details as needed */}
                </View>
              ))}
              {/* Additional statement details as needed */}
            </View>
          )}
          keyExtractor={(item) => item.id.toString()} // Use toString() since item.id is likely a number
        />
      )}
      {/* {!isLoading && !error && statements.length === 0 && (
        <Text>No statements found.</Text>
      )} */}
    </View>
  );
};

export default StatementScreen;
