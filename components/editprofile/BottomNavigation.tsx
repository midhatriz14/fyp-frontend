import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type NavItem = {
  icon: string;
  label: string;
};

type BottomNavigationProps = {
  items: NavItem[];
  activeIndex: number;
  onItemPress: (index: number) => void;
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items, activeIndex, onItemPress }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={item.label}
          style={styles.navItem}
          onPress={() => onItemPress(index)}
          accessibilityLabel={item.label}
          accessibilityRole="button"
        >
          <Image
            resizeMode="contain"
            source={{ uri: item.icon }}
            style={styles.navIcon}
          />
          <Text style={[styles.navLabel, index === activeIndex && styles.activeLabel]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: 59,
    paddingHorizontal: 32,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navIcon: {
    borderRadius: 50,
    position: "relative",
    display: "flex",
    width: 37,
    height: 37,
    aspectRatio: 1,
  },
  navLabel: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 10,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "400",
  },
  activeLabel: {
    fontWeight: "700",
  },
});

export default BottomNavigation;