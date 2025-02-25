import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  Alert
} from 'react-native';

const EditableTable = ({ canAddRows, canAddColumns, initialColumns }) => {
  // State for table data and form inputs
  const [columns, setColumns] = useState(initialColumns);
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState(initialColumns.reduce((acc, col) => ({...acc, [col]: ''}), {}));
  const [newColumnName, setNewColumnName] = useState('');
  
  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editRowData, setEditRowData] = useState({});

  // Add a new row to the table
  const addRow = () => {
    // Check if at least one field has data
    // const hasData = Object.values(newRow).some(value => value.trim() !== '');
    
    // if (hasData) {
      setData([...data, {...newRow}]);
      // Reset form
      setNewRow(columns.reduce((acc, col) => ({...acc, [col]: ''}), {}));
    // }
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
  
  // Handle edit row click
  const handleEditRow = (rowIndex) => {
    setEditMode(true);
    setEditRowIndex(rowIndex);
    setEditRowData({...data[rowIndex]});
  };
  
  // Handle edit input change
  const handleEditInputChange = (column, value) => {
    setEditRowData({...editRowData, [column]: value});
  };
  
  // Save edited row
  const saveEditedRow = () => {
    const newData = [...data];
    newData[editRowIndex] = editRowData;
    setData(newData);
    cancelEdit();
  };
  
  // Cancel edit
  const cancelEdit = () => {
    setEditMode(false);
    setEditRowIndex(null);
    setEditRowData({});
  };
  
  // Delete row
  const deleteRow = (rowIndex) => {
    Alert.alert(
      "Delete Row",
      "Are you sure you want to delete this row?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Delete", 
          onPress: () => {
            const newData = [...data];
            newData.splice(rowIndex, 1);
            setData(newData);
            if (editMode && editRowIndex === rowIndex) {
              cancelEdit();
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>        
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
              <View style={[styles.tableHeader, styles.actionHeader]}>
                <Text style={styles.headerText}>Actions</Text>
              </View>
            </View>
            
            {/* Table Data */}
            {data.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {columns.map((column, colIndex) => (
                  <View key={`${rowIndex}-${colIndex}`} style={styles.tableCell}>
                    {editMode && editRowIndex === rowIndex ? (
                      <TextInput
                        style={styles.editInput}
                        value={editRowData[column] || ''}
                        onChangeText={(text) => handleEditInputChange(column, text)}
                      />
                    ) : (
                      <Text>{row[column] || ''}</Text>
                    )}
                  </View>
                ))}
                <View style={[styles.tableCell, styles.actionCell]}>
                  {editMode && editRowIndex === rowIndex ? (
                    <View style={styles.actionButtonsContainer}>
                      <TouchableOpacity 
                        style={[styles.actionButton, styles.saveButton]} 
                        onPress={saveEditedRow}
                      >
                        <Text style={styles.actionButtonText}>Save</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={[styles.actionButton, styles.cancelButton]} 
                        onPress={cancelEdit}
                      >
                        <Text style={styles.actionButtonText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.actionButtonsContainer}>
                      <TouchableOpacity 
                        style={[styles.actionButton, styles.editButton]} 
                        onPress={() => handleEditRow(rowIndex)}
                      >
                        <Text style={styles.actionButtonText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={[styles.actionButton, styles.deleteButton]} 
                        onPress={() => deleteRow(rowIndex)}
                      >
                        <Text style={styles.actionButtonText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        
        {/* Add New Row Form */}
        {/* <View style={styles.formContainer}>
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
        </View> */}

        {canAddRows && (
            <TouchableOpacity style={styles.button} onPress={addRow}>
            <Text style={styles.buttonText}>Add Row</Text>
          </TouchableOpacity>
        )}
        
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  actionHeader: {
    width: 160,
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
    justifyContent: 'center',
  },
  actionCell: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  saveButton: {
    backgroundColor: '#2196F3',
  },
  cancelButton: {
    backgroundColor: '#9E9E9E',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  editInput: {
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 4,
    padding: 2,
    height: 30,
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