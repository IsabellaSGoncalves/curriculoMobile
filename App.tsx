import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const [height, setHeight] = useState(100);

  const toggleHeight = () => {
    setHeight(prev => (prev === 100 ? 150 : 100));
  };

  return (
    <ScrollView>

      <View style={styles.container}>
        <View style={styles.backgroundImage}>

          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}  
          />
        </View>

        <View style={styles.bigcontainer}>
          <View style={styles.container_name0}>
            <Text style={{ color: 'white' }}>Isabella da Silva Gonçalves</Text>

          </View>
          <View style={styles.container_name00}>
            <Text style={{ color: 'white' }}>Estudante de Desenvolvimento de Software Multiplataforma</Text>
          </View>

        </View>

        <View style={styles.bigcontainer}>
          <View style={styles.icon}>
          </View>
          <View style={styles.icon}>
          </View>
          <View style={styles.icon}>
          </View>
          <View style={styles.icon}>

          </View>
        </View>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_name, { height }]}>
            <Text style={{ color: 'white' }}>Experiências</Text>
            <Text style={{ color: 'white' }}>▃▃▃▃▃▃▃▃▃▃▃</Text>
            <Text style={{ color: 'white' }}>╔═════════════════════════╗</Text>
            <Text style={{ color: 'white' }}> ✦ Microsoft - DBA </Text>
            <Text style={{ color: 'white' }}> ✦ Google - Back-End Developer </Text>
            <Text style={{ color: 'white' }}> ✦ Amazon - Data Engineer </Text>

            <Text style={{ color: 'white' }}>╚══════════════════════════╝ </Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_name1, { height }]}>
            <Text style={{ color: 'white' }}>Habilidades</Text>
            <Text style={{ color: 'white' }}>▃▃▃▃▃▃▃▃▃▃▃</Text>
            <Text style={{ color: 'white' }}>╔═════════════════════════╗</Text>
            <Text style={{ color: 'white' }}> ✦ ETL </Text>
            <Text style={{ color: 'white' }}> ✦ Scrum </Text>
            <Text style={{ color: 'white' }}> ✦ DevOps </Text>

            <Text style={{ color: 'white' }}>╚══════════════════════════╝ </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_name2, { height }]}>
            <Text style={{ color: 'white' }}>Tecnologias</Text>
            <Text style={{ color: 'white' }}>▃▃▃▃▃▃▃▃▃▃▃</Text>
            <Text style={{ color: 'white' }}>╔══════════════════════════╗</Text>
            <Text style={{ color: 'white' }}> ✦ Python </Text>
            <Text style={{ color: 'white' }}> ✦ Go </Text>
            <Text style={{ color: 'white' }}> ✦ SQL </Text>
            <Text style={{ color: 'white' }}>╚══════════════════════════╝ </Text>
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
  backgroundImage: {
    backgroundColor: "#3d3d3dff",
    width: 500,
    height: 130,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,

  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: "#000",
    borderRadius: 100
  },
  container_name0: {
    width: 150,
    height: 100,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10

  },
  container_name00: {
    width: 150,
    height: 100,
    backgroundColor: "#575757ff",
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10

  },

  bigcontainer: {
    flexDirection: "row",
  },

  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    margin: 10,
    borderRadius: 10
  },
  container_name: {
    width: 300,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  container_name1: {
    width: 300,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  container_name2: {
    width: 300,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
    padding: 10
  }

});

export default App;
