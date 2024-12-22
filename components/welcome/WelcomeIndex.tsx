import React, { useEffect } from 'react';
import { View } from 'react-native';
import WelcomeImageDisplay from './WelcomeImageDisplay';
import { router } from 'expo-router';



const WelcomeIndex: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push("/vendoraccount");
    }, 1000)
  }, []);
  return (
    <View>
      <WelcomeImageDisplay imageUri="https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&" />
    </View>
  );
};

export default WelcomeIndex;