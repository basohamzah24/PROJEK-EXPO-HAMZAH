import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const students = [
    { 
        id: '1', 
        name: 'BASO HAMZAH', 
        nim: '105841106922',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841106922_.jpg?1751871539',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841106922@unismuh.ac.id'
    },
    {
        id: '2',
        name: 'FAUZIAH',
        nim: '105841107023',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107022_.jpg?1751871540',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107022@unismuh.ac.id'
   },
    {
        id: '3',
        name: 'ZALNA NUR ISLAMIAH',
        nim: '105841107122',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107122_.jpg?1751871541',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107124@unismuh.ac.id'
    },
    {
        id: '4',
        name: 'AHMAD RIZKI',
        nim: '105841107222',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107222_.jpg?1751871542',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107025@unismuh.ac.id'
    },
    {
        id: '5',
        name: 'SITI NURHALIZA',
        nim: '105841107322',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107322_.jpg?1751871543',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107026@unismuh.ac.id'
    },
    {
        id: '6',
        name: 'MUHAMMAD FADLI',
        nim: '105841107422',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107422_.jpg?1751871544',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107027@unismuh.ac.id'
    },
    {
        id: '7',
        name: 'NURUL AZIZAH',
        nim: '105841107522',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107522_.jpg?1751871545',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107028@unismuh.ac.id'
    },
    {
        id: '8',
        name: 'DIMAS PRATAMA',
        nim: '105841107622',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107622_.jpg?1751871546',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107029@unismuh.ac.id'
    },
    {
        id: '9',
        name: 'SARAH AMELIA',
        nim: '105841107722',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107722_.jpg?1751871547',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107030@unismuh.ac.id'
    },
    {
        id: '10',
        name: 'IRFAN SETIAWAN',
        nim: '105841107822',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107822_.jpg?1751871548',
        jurusan: 'Informatika',
        fakultas: 'Teknik',
        semester: '6',
        email: '105841107031@unismuh.ac.id'
    }
];
export default function UserPage() {
    const { id } = useLocalSearchParams();
    const student = useMemo(() => students.find(student => student.id === id), [id]);

    if (!student) {
        return (
            <View style={styles.errorContainer}>
                <Ionicons name="alert-circle" size={64} color="#ff0000" />
                <Text style={styles.errorTitle}>Mahasiswa tidak ditemukan</Text>
                <Text style={styles.errorSubtitle}>
                    ID: {id}
                </Text>
            </View>
        );
    }
    
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}>
                        <Ionicons name="person-circle" size={28} color="#fff" />
                        <Text style={styles.headerTitle}>Detail Mahasiswa</Text>
                    </View>
                    <View style={styles.placeholder} />
                </View>
            </View>

            <View style={styles.content}>
                {/* Photo Section */}
                <View style={styles.photoSection}>
                    <View style={styles.photoContainer}>
                        <Image 
                            source={{ uri: student.foto }}
                            style={styles.photo}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.photoCaptionContainer}>
                        <Ionicons name="camera" size={16} color="#666" />
                        <Text style={styles.photoCaption}>Foto Simak Unismuh</Text>
                    </View>
                </View>
                
                {/* Personal Information */}
                <View style={styles.infoSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="person" size={20} color="#2196F3" />
                        <Text style={styles.sectionTitle}>Data Pribadi</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="person-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Nama Lengkap:</Text>
                        <Text style={styles.value}>{student.name}</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="id-card-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>NIM:</Text>
                        <Text style={styles.value}>{student.nim}</Text>
                    </View>
                </View>

                {/* Academic Information */}
                <View style={styles.infoSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="school" size={20} color="#2196F3" />
                        <Text style={styles.sectionTitle}>Informasi Akademik</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="laptop-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Jurusan:</Text>
                        <Text style={styles.value}>{student.jurusan}</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="library-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Fakultas:</Text>
                        <Text style={styles.value}>{student.fakultas}</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="time-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Semester:</Text>
                        <Text style={styles.value}>{student.semester}</Text>
                    </View>
                </View>

                {/* Contact Information */}
                <View style={styles.infoSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="call" size={20} color="#2196F3" />
                        <Text style={styles.sectionTitle}>Informasi Kontak</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="mail-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Email Institusi:</Text>
                        <Text style={styles.emailValue}>{student.email}</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="school-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Universitas:</Text>
                        <Text style={styles.value}>Unismuh Makassar</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#2196F3',
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    placeholder: {
        width: 40, // Same width as back button for centering
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'fontBas',
        marginLeft: 8,
    },
    content: {
        padding: 0,
    },
    photoSection: {
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
    photoContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#2196F3',
        marginBottom: 10,
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    photoCaptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoCaption: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'fontBas',
        marginLeft: 5,
    },
    infoSection: {
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
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2196F3',
        textAlign: 'center',
        fontFamily: 'fontBas',
        marginLeft: 8,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
    },
    infoIcon: {
        marginRight: 8,
        width: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        width: 120,
        fontFamily: 'fontBas',
    },
    value: {
        fontSize: 14,
        color: '#666',
        flex: 1,
        fontFamily: 'fontBas',
    },
    emailValue: {
        fontSize: 14,
        color: '#2196F3',
        flex: 1,
        fontFamily: 'fontBas',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    errorTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff0000',
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'fontBas',
    },
    errorSubtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'fontBas',
    },
});