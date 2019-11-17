import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {


  const selectFile = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true,
        multiple: false,
        type: 'image/*'
      });

      if (file.type === "success") {
        console.log(file.uri);
      }

    } catch (err) {
      // Expo didn't build with iCloud, expo turtle fallback
      console.log("error", err);

    }
  };



  return (
    <View style={styles.container}>
      <Button title="Ver archivos" onPress={async () => await selectFile()}>


      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
