
import { StyleSheet, Text, View } from 'react-native';
import Historia from '../../components/Historia';
import Jogar from '../../components/Jogar';
export default function Games() {
  return (
    <View style={styles.container}>
       <Text> LISTAR GAMES </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231f20',
    alignItems: 'center',
    
  },
});
