import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Alert
} from 'react-native';
import TextWithTranslation from './common/TextWithTranslation';

// Define interfaces for our data structures
interface TableRow {
  [key: string]: string;
}

interface EditableTableProps {
  canEdit: boolean;
  canAddRows: boolean;
  canAddColumns: boolean;
  initialColumns: string[];
  initialData?: TableRow[];
}

const EditableTable: React.FC<EditableTableProps> = ({ 
  canEdit, 
  canAddRows, 
  canAddColumns, 
  initialColumns, 
  initialData = [] 
}) => {
  // State for table data and form inputs
  const [columns, setColumns] = useState<string[]>(initialColumns);
  const [data, setData] = useState<TableRow[]>([]);
  const [newRow, setNewRow] = useState<TableRow>(
    initialColumns.reduce((acc: TableRow, col: string) => ({...acc, [col]: ''}), {})
  );
  const [newColumnName, setNewColumnName] = useState<string>('');
  
  // Edit mode state
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editRowIndex, setEditRowIndex] = useState<number | null>(null);
  const [editRowData, setEditRowData] = useState<TableRow>({});

  // Initialize with initial data
  useEffect(() => {
    if (initialData && initialData.length > 0) {
      const formattedData = initialData.map(row => {
        const formattedRow: TableRow = {...row};
        columns.forEach((col: string) => {
          if (formattedRow[col] === undefined) {
            formattedRow[col] = '';
          }
        });
        return formattedRow;
      });
      setData(formattedData);
    }
  }, [initialData, columns]);

  // Add a new row to the table
  const addRow = (): void => {
    setData([...data, {...newRow}]);
    // Reset form
    setNewRow(columns.reduce((acc: TableRow, col: string) => ({...acc, [col]: ''}), {}));
  };

  // Add a new column to the table
  const addColumn = (): void => {
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
  const handleInputChange = (column: string, value: string): void => {
    setNewRow({...newRow, [column]: value});
  };
  
  // Handle edit row click
  const handleEditRow = (rowIndex: number): void => {
    setEditMode(true);
    setEditRowIndex(rowIndex);
    setEditRowData({...data[rowIndex]});
  };
  
  // Handle edit input change
  const handleEditInputChange = (column: string, value: string): void => {
    setEditRowData({...editRowData, [column]: value});
  };
  
  // Save edited row
  const saveEditedRow = (): void => {
    if (editRowIndex !== null) {
      const newData = [...data];
      newData[editRowIndex] = editRowData;
      setData(newData);
      cancelEdit();
    }
  };
  
  // Cancel edit
  const cancelEdit = (): void => {
    setEditMode(false);
    setEditRowIndex(null);
    setEditRowData({});
  };
  
  // Delete row
  const deleteRow = (rowIndex: number): void => {
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
    <>
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
              {canEdit && <View style={[styles.tableHeader, styles.actionHeader]}>
                <Text style={styles.headerText}>Actions</Text>
              </View>}
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
                        <TextWithTranslation text={row[column] || ''} textStyle={styles.cellText}/>
                    )}
                  </View>
                ))}
                {canEdit && <View style={[styles.tableCell, styles.actionCell]}>
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
                </View>}
              </View>
            ))}
          </View>
        </ScrollView>
        
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
    </>
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
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cellText: {
    fontSize: 14,
  },
});

export default EditableTable;