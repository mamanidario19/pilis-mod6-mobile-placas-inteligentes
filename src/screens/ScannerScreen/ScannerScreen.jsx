import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data); // Guarda los datos del codigo QR escaneado
    handleLinking(data); // Abre direccionr usando Linking
  };

  const handleLinking = (data) => {
    // Verificamos si los datos son una url o link valido
    if (Linking.canOpenURL(data)) {
      Linking.openURL(data).catch((err) => console.error('Error al abrir la URL: ', err));
    } else {
      console.warn('Los datos escaneados no son una URL válida.');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for Camera Permission</Text>
  }

  if (hasPermission === false) {
    return <Text>No Access to Camera</Text>
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View>
          <Text>Escaneado: {scannedData}</Text>
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})