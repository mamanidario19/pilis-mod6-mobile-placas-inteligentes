import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Linking, Modal, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { COLORS, FONT_SIZE, SPACING } from '../../utils/theme'

export const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data); // Guarda los datos del código QR escaneado
    setShowModal(true); // Abre el modal para mostrar los datos
  };

  const closeModal = () => {
    setShowModal(false);
    setScanned(false); // Restablece el estado del escaneo
  };

  // Función para intentar analizar manualmente los datos JSON
  const parseJsonData = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error al analizar los datos JSON:", error);
      return null;
    }
  };

  const parsedData = parseJsonData(scannedData);

  if (hasPermission === null) {
    return <Text>Requesting for Camera Permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No Access to Camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalle de Escaneo</Text>
            {parsedData && (
              <>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataLabel}>Nombre:</Text>
                  <Text style={styles.dataValue}>{parsedData.name || "N/A"}</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataLabel}>Género:</Text>
                  <Text style={styles.dataValue}>{parsedData.gender || "N/A"}</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataLabel}>Vacunas:</Text>
                  <Text style={styles.dataValue}>{parsedData.vacunas || "N/A"}</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataLabel}>Dueño:</Text>
                  {/*<Text style={styles.dataValue}>{parsedData.vacunas || "N/A"}</Text>*/}
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.dataLabel}>Contacto:</Text>
                  {/* <Text style={styles.dataValue}>{parsedData.vacunas || "N/A"}</Text>*/}
                </View>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/*scanned && (
        <Button style={styles.closeButton} title="Escanear de nuevo" onPress={() => setScanned(false)} />
      )*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: SPACING.md,
    borderRadius: 10,
    width: '85%',
  },
  modalTitle: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  dataContainer: {
    marginTop: SPACING.xs,
    alignItems: 'center',
  },
  dataLabel: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
  },
  dataValue: {
    fontSize: FONT_SIZE.md,
    marginTop: SPACING.sm,
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
  },
});