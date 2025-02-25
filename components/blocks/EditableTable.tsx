import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

type EditableTableProps = {
    canAddColumns: boolean;
    canAddRows: boolean;
}

const EditableTable = ({ canAddColumns, canAddRows }) => {
  // Initial columns configuration
  const initialColumns = ['Name', 'Age', 'Email'];
  
  // State for table data and form inputs
  const [columns, setColumns] = useState(initialColumns);
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState(initialColumns.reduce((acc, col) => ({...acc, [col]: ''}), {}));
  const [newColumnName, setNewColumnName] = useState('');

  // Add a new row to the table
  const addRow = () => {
    // Check if at least one field has data
    const hasData = Object.values(newRow).some(value => value.trim() !== '');
    
    if (hasData) {
      setData([...data, {...newRow}]);
      // Reset form
      setNewRow(columns.reduce((acc, col) => ({...acc, [col]: ''}), {}));
    }
  };

  // Add a new column to the table
  const addColumn = () => {
    if (newColumnName.trim() !== '' && !columns.includes(newColumnName)) {
      const updatedColumns = [...columns, newColumnName];
      setColumns(updatedColumns);
      
      // Update data and newRow with the new column
      const updatedData = data.map(row => ({...row, [newColumnName]: ''}));
      setData(updatedData);
      setNewRow({...newRow, [newColumnName]: ''});
      setNewColumnName('');
    }
  };

  // Handle input change for new row
  const handleInputChange = (column, value) => {
    setNewRow({...newRow, [column]: value});
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
        <Text style={styles.title}>Editable Table</Text>
        
        {/* Table Header */}
        <ScrollView horizontal>
          <View>
            {/* Column headers */}
            <View style={styles.tableRow}>
              {columns.map((column, index) => (
                <View key={index} style={styles.tableHeader}>
                  <Text style={styles.headerText}>{column}</Text>
                </View>
              ))}
            </View>
            
            {/* Table Data */}
            {data.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {columns.map((column, colIndex) => (
                  <View key={`${rowIndex}-${colIndex}`} style={styles.tableCell}>
                    <Text>{row[column] || ''}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        
        {/* Add New Row Form */}
        {canAddRows && <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add New Row</Text>
          {columns.map((column, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.inputLabel}>{column}:</Text>
              <TextInput
                style={styles.input}
                value={newRow[column]}
                onChangeText={(text) => handleInputChange(column, text)}
                placeholder={`Enter ${column}`}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={addRow}>
            <Text style={styles.buttonText}>Add Row</Text>
          </TouchableOpacity>
        </View>}
        
        {/* Add New Column Form */}
        {canAddColumns && <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add New Column</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Column Name:</Text>
            <TextInput
              style={styles.input}
              value={newColumnName}
              onChangeText={setNewColumnName}
              placeholder="Enter column name"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={addColumn}>
            <Text style={styles.buttonText}>Add Column</Text>
          </TouchableOpacity>
        </View>}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    width: 120,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 10,
    width: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  formContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    marginBottom: 4,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditableTable;