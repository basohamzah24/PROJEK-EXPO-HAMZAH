import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const students = [
    { 
        id: '1', 
        name: 'BASO HAMZAH', 
        nim: '105841106922',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841106922_.jpg?1751871539',
    },
    {
        id: '2',
        name: 'FAUZIAH',
        nim: '105841107023',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107022_.jpg?1751871540',
   },
    {
        id: '3',
        name: 'ZALNA NUR ISLAMIAH',
        nim: '105841107124',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107122_.jpg?1751871541',
    },
    {
        id: '4',
        name: 'AHMAD RIZKI',
        nim: '105841107025',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107222_.jpg?1751871542',
    },
    {
        id: '5',
        name: 'SITI NURHALIZA',
        nim: '105841107026',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107322_.jpg?1751871543',
    },
    {
        id: '6',
        name: 'MUHAMMAD FADLI',
        nim: '105841107027',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107422_.jpg?1751871544',
    },
    {
        id: '7',
        name: 'NURUL AZIZAH',
        nim: '105841107028',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107522_.jpg?1751871545',
    },
    {
        id: '8',
        name: 'DIMAS PRATAMA',
        nim: '105841107029',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107622_.jpg?1751871546',
    },
    {
        id: '9',
        name: 'SARAH AMELIA',
        nim: '105841107030',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107722_.jpg?1751871547',
    },
    {
        id: '10',
        name: 'IRFAN SETIAWAN',
        nim: '105841107031',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107822_.jpg?1751871548',
    }
];

export default function About() {
    const renderStudent = ({ item }: { item: typeof students[0] }) => (
        <Link 
            href={{ pathname: "/(tabs)/user/[id]", params: { id: item.id } }}
            asChild
        >
            <TouchableOpacity style={styles.studentCard}>
                <Image 
                    source={{ uri: item.foto }}
                    style={styles.avatar}
                    resizeMode="cover"
                />
                <View style={styles.studentInfo}>
                    <Text style={styles.studentName}>{item.name}</Text>
                    <Text style={styles.studentNim}>NIM: {item.nim}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#666" />
            </TouchableOpacity>
        </Link>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="school" size={32} color="#2196F3" />
                <Text style={styles.headerTitle}>Daftar Mahasiswa</Text>
                <Text style={styles.headerSubtitle}>
                    Total: {students.length} mahasiswa
                </Text>
            </View>
            
            <FlatList
                data={students}
                renderItem={renderStudent}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2196F3',
        marginTop: 10,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    listContainer: {
        padding: 15,
    },
    studentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#e0e0e0',
    },
    studentInfo: {
        flex: 1,
    },
    studentName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    studentNim: {
        fontSize: 14,
        color: '#666',
    },
});
