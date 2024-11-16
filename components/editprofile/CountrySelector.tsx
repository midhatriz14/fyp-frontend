import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

type CountrySelectorProps = {
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
};

const CountrySelector: React.FC<CountrySelectorProps> = ({ selectedCountry, onSelectCountry }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const countries = ['Germany', 'Pakistan'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Country</Text>
      <TouchableOpacity onPress={toggleDropdown} style={styles.selector}>
        <Text style={styles.selectedText}>{selectedCountry}</Text>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a143cc56fe92cb15ca2b86a0369d4de6599d5e071b6c53a492cf29691d680ee3?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          {countries.map((country) => (
            <TouchableOpacity
              key={country}
              style={styles.option}
              onPress={() => {
                onSelectCountry(country);
                setIsOpen(false);
              }}
            >
              <Text style={styles.optionText}>{country}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    maxWidth: 328,
    flexDirection: "column",
    alignItems: "stretch",
  },
  label: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
    color: "#595959",
  },
  selector: {
    borderRadius: 8,
    borderColor: "rgba(130, 130, 130, 0.7)",
    borderWidth: 1,
    display: "flex",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  selectedText: {
    color: "#1D1D1D",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
  },
  dropdownIcon: {
    width: 26,
    aspectRatio: 1,
  },
  dropdown: {
    position: "absolute",
    top: 74,
    left: 0,
    right: 0,
    borderRadius: 8,
    borderColor: "rgba(130, 130, 130, 0.7)",
    borderWidth: 1,
    backgroundColor: "white",
  },
  option: {
    padding: 16,
  },
  optionText: {
    color: "#1D1D1D",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default CountrySelector;