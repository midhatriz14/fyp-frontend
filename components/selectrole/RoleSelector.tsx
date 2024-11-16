import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';

interface RoleSelectorProps {}

const RoleSelector: React.FC<RoleSelectorProps> = () => {
  const [selectedValue, setSelectedValue] = useState('Select an option');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = [
    {
      value: "organizer",
      label: "Organizer"
    },
    {
      value: "vendor",
      label: "Vendor"
    }
  ]

  const handleSelect = (item: { label: React.SetStateAction<string>; }) => {
    setSelectedValue(item.label);
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.dropdownButtonText}>{selectedValue}</Text>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsModalVisible(false)}
        />
        <View style={styles.modalContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 40,
    width: '100%',
    maxWidth: 272,
    paddingVertical: 24,
    marginTop: 12,
  },
  text: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    color: 'rgba(102, 102, 102, 1)',
    fontWeight: '400',
  },
  icon: {
    width: 12,
    height: 12,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 25
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    right: '10%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    maxHeight: '50%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default RoleSelector;