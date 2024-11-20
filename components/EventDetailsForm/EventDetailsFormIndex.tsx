// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import GenderSelection from './GenderSelection';
// import RoleSelection from './RoleSelection';
// import DateInput from './DateInput';
// import BudgetInput from './BudgetInput';
// import SubmitButton from './SubmitButton';

// const EventDetailsFormIndex: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>
//         Enter your details for personalized experience
//       </Text>
//       <GenderSelection />
//       <RoleSelection />
//       <Text style={styles.sectionTitle}>Event</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>Enter your Mobile Number</Text>
//       </View>
//       <DateInput />
//       <Text style={styles.sectionTitle}>Event</Text>
//       <BudgetInput />
//       <SubmitButton />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 40,
//     display: 'flex',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     maxWidth: 480,
//     width: '100%',
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 78,
//     flexDirection: 'column',
//     overflow: 'hidden',
//     alignItems: 'center',
//   },
//   title: {
//     color: 'rgba(0, 0, 0, 1)',
//     fontSize: 20,
//     fontFamily: 'Inter, sans-serif',
//     fontWeight: '600',
//     textAlign: 'center',
//     marginTop: 50,
//     width: 249,
//   },
//   sectionTitle: {
//     color: 'rgba(0, 0, 0, 1)',
//     fontSize: 16,
//     fontFamily: 'Inter, sans-serif',
//     fontWeight: '600',
//     textAlign: 'center',
//     marginTop: 30,
//     marginLeft: 16,
//   },
//   inputContainer: {
//     borderRadius: 12,
//     display: 'flex',
//     marginTop: 24,
//     width: '100%',
//     maxWidth: 340,
//     flexDirection: 'column',
//     alignItems: 'stretch',
//     fontFamily: 'Inter, sans-serif',
//     fontSize: 13,
//     color: 'rgba(132, 132, 132, 0.46)',
//     fontWeight: '400',
//     textAlign: 'center',
//   },
//   inputLabel: {
//     borderRadius: 12,
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingTop: 20,
//     paddingBottom: 12,
//   },
// });

// export default EventDetailsFormIndex;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  //CheckBox,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";


const EventDetailsFormIndex = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>
        Enter your details for personalized experience
      </Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Event Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event name"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Event Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event type"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Event Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event date"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total Guests</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter guests"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Desired Services */}
      <Text style={styles.label}>Desired Services</Text>
      <View style={styles.servicesContainer}>
        {[
          "Venue",
          "Catering",
          "Makeup",
          "Photography",
          "Hina Artist",
          "DJ/Sound",
        ].map((service, index) => (
          <View key={index} style={styles.serviceItem}>
            <CheckBox
              value={selectedServices.includes(service)}
              onValueChange={() => toggleService(service)}
            />
            <Text style={styles.serviceText}>{service}</Text>
          </View>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.aiButton}>
          <Text style={styles.aiButtonText}>AI Suggested Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.customButtonText}>Customise Your Own</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8EFFF",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#000",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 20,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 10,
  },
  serviceText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  aiButton: {
    flex: 1,
    backgroundColor: "#7C185E",
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  aiButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  customButton: {
    flex: 1,
    backgroundColor: "#CBA5D4",
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: "center",
  },
  customButtonText: {
    color: "#7C185E",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default EventDetailsFormIndex;
