import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';

export default function App() {
  return (
    <View style={styles.container3}>
    <Login/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    backgroundColor: '#fff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
