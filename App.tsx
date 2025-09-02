import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

const App = () => {
  const [height, setHeight] = useState(100);

  const toggleHeight = () => {
    setHeight(prev => (prev === 100 ? 200 : 100));
  };

  return (
          <ScrollView>
            
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50 }}
      />

      <View style={styles.container_name}>
        <Text style={{ color: 'white' }}>Nome do Curso</Text>

      </View>
      <View style={styles.container_name}>
        <Text style={{ color: 'white' }}>FATEC</Text>
      </View>

      <View style={styles.container_name}>

      </View>
      <View style={styles.container_name}>

      </View>
      <View style={styles.container_name}>

      </View>
      <View style={styles.container_name}>

      </View>

      <TouchableOpacity onPress={toggleHeight}>
        <View style={[styles.container_name, { height }]}>
          <Text style={{ color: 'white' }}>Toque aqui para mudar a altura</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleHeight}>
        <View style={[styles.container_name, { height }]}>
          <Text style={{ color: 'white' }}>Toque aqui para mudar a altura</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleHeight}>
        <View style={[styles.container_name, { height }]}>
          <Text style={{ color: 'white' }}>Toque aqui para mudar a altura</Text>
        </View>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_name: {
    width: 300,
    height: 100,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  }
});

export default App;
