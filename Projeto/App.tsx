import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/Title';
import Form from './src/components/Form/form';

const App = () => {
  return (
      <View style={styles.container}>
          <Title/>
          <Form />
      </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});

