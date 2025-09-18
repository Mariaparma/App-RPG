import { View, Text, StyleSheet} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>🏰 Minha Party RPG</Text>
            <Text style={styles.subtitle}> Recrutado * Disponível * Segure para remover </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '00008B',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'center',
        color: 'c5282F',
    },
});