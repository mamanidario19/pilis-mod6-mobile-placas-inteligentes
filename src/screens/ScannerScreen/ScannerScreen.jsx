import React, { useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

export const ScannerScreen = ({ navigation }) => {
  const onSuccess = (e) => {
    // Maneja la lectura del código QR aquí
    console.log("Código QR leído:", e.data);
    // Puedes realizar alguna acción con el código leído, como redireccionar a otra pantalla
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      // Abre el escáner cuando la pantalla está enfocada
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={2000}
        topContent={
          <Text style={styles.centerText}>
            Apunta la cámara al código QR
          </Text>
        }
        bottomContent={
          <Text style={styles.centerText}>
            Escanea un código QR para continuar
          </Text>
        }
      />
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  centerText: {
    fontSize: 18,
    color: "white",
  },
});