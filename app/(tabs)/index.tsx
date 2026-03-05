import React from "react";
import { View, Text, Pressable, StyleSheet, Image, StatusBar } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Hero Image con Overlay */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />

        {/* Contenido sobre la imagen */}
        <View style={styles.heroContent}>
          <Text style={styles.subtitle}>Bienvenido a</Text>
          <Text style={styles.title}>Los Reyes</Text>
          <Text style={styles.tagline}>
            La excelencia del vino{'\n'}
            en tus manos
          </Text>
        </View>
      </View>

      {/* Sección inferior */}
      <SafeAreaView style={styles.bottomSection}>
        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🍷</Text>
            <Text style={styles.featureText}>Vinos Exclusivos</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>⭐</Text>
            <Text style={styles.featureText}>Selección</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🚚</Text>
            <Text style={styles.featureText}>Envío Rápido</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Descubre nuestra colección curada de los mejores vinos del mundo.
          Desde clásicos atemporales hasta joyas ocultas.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => router.push('/explore')}
        >
          <Text style={styles.buttonText}>
            Explorar Catálogo
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => alert("Más información")}
        >
          <Text style={styles.secondaryButtonText}>
            Conocer Más
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heroContainer: {
    flex: 1.2,
    position: "relative",
    justifyContent: "center",
  },
  heroImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  heroContent: {
    position: "relative",
    alignItems: "center",
    paddingHorizontal: 30,
    zIndex: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
    fontWeight: "300",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 48,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 12,
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "300",
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  feature: {
    alignItems: "center",
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: "#6B0000",
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#8B0000",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#8B0000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#8B0000",
  },
  secondaryButtonText: {
    color: "#8B0000",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});