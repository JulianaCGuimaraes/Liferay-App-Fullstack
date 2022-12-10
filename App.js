import { StyleSheet, SafeAreaView} from 'react-native';
import Option from './screens/OptionScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Option />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
