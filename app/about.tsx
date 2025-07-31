import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <Text style={styles.subtitle}>Projek Expo Hamzah</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deskripsi Aplikasi</Text>
        <Text style={styles.description}>
          Aplikasi ini adalah proyek pembelajaran React Native menggunakan framework Expo. 
          Aplikasi ini dikembangkan sebagai bagian dari tugas mata kuliah Aplikasi Komputasi 
          Bergerak dan mencakup berbagai fitur pembelajaran mobile development.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fitur-fitur Aplikasi:</Text>
        
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>🎨 Font Management</Text>
          <Text style={styles.featureDescription}>
            Implementasi 10+ font custom dengan 5 static fonts dan 5 variable fonts 
            menggunakan expo-font untuk variasi tipografi yang menarik.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>📝 Nama List</Text>
          <Text style={styles.featureDescription}>
            Menampilkan daftar 10 nama dengan font family yang berbeda-beda menggunakan 
            perulangan untuk rotasi font secara otomatis.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>🖼️ Grid Gambar</Text>
          <Text style={styles.featureDescription}>
            Grid gambar interaktif dengan format NIM yang dapat dikustomisasi, 
            menampilkan variasi digit terakhir dari NIM mahasiswa.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>🎯 Icon Screen</Text>
          <Text style={styles.featureDescription}>
            Koleksi 10 ikon berbeda dari berbagai library (@expo/vector-icons) 
            dengan interaksi touch dan animasi warna.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>📱 Tab Navigation</Text>
          <Text style={styles.featureDescription}>
            Navigasi tab dengan 3 halaman utama: Home (info Unismuh), About (info app), 
            dan Profile (data pribadi mahasiswa).
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Teknologi yang Digunakan:</Text>
        <View style={styles.techList}>
          <Text style={styles.techItem}>• React Native</Text>
          <Text style={styles.techItem}>• Expo Framework</Text>
          <Text style={styles.techItem}>• TypeScript</Text>
          <Text style={styles.techItem}>• Expo Router</Text>
          <Text style={styles.techItem}>• Expo Font</Text>
          <Text style={styles.techItem}>• Expo Vector Icons</Text>
          <Text style={styles.techItem}>• React Navigation</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Dikembangkan sebagai bagian dari pembelajaran mobile development 
          di Universitas Muhammadiyah Makassar
        </Text>
        <Text style={styles.version}>Versi 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'fontBas',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'fontBas',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    fontFamily: 'fontBas',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    textAlign: 'justify',
    fontFamily: 'fontBas',
  },
  featureItem: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
    fontFamily: 'fontBas',
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    textAlign: 'justify',
    fontFamily: 'fontBas',
  },
  techList: {
    paddingLeft: 10,
  },
  techItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontFamily: 'fontBas',
  },
  footer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'fontBas',
  },
  version: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
    fontFamily: 'fontBas',
  },
});
