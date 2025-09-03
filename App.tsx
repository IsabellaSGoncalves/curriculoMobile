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
            source={{ uri: 'https://avatars.githubusercontent.com/u/161075154?v=4' }}
            style={styles.image}  
          />
        </View>

        <View style={styles.big_container}>
          <View style={styles.container_namePrincipal}>
            <Text style={{ color: 'white' }}>Isabella da Silva Gonçalves</Text>

          </View>
          <View style={styles.container_nameSecond}>
            <Text style={{ color: 'white' }}>Estudante de Desenvolvimento de Software Multiplataforma</Text>
          </View>

        </View>

        <View style={styles.big_container}>
          <View style={styles.icon}>
            <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png' }}
            style={styles.icon_image}  
          />
          </View>
          <View style={styles.icon}>
            <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZTinSnt5Egjs0eRQy98J_lxaNJSkml2DRQ&s' }}
            style={styles.icon_image}  
          />
          </View>
          <View style={styles.icon}>
            <Image
            source={{ uri: 'https://pngimg.com/d/github_PNG58.png' }}
            style={styles.icon_image}  
          />
          </View>
          <View style={styles.icon}>
            <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_tPm7gc-lt2P1fRtVk0rcXpBkw3srvEynw&s' }}
            style={styles.icon_image}  
          />

          </View>
        </View>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_experience, { height }]}>
            <Text style={styles.text}>Experiências</Text>
            <Text style={styles.text}>▃▃▃▃▃▃▃▃▃▃▃</Text>
            <Text style={styles.text}>╔═════════════════════════╗</Text>
            <Text style={styles.text}> ✦ Microsoft - DBA </Text>
            <Text style={styles.text}> ✦ Google - Back-End Developer </Text>
            <Text style={styles.text}> ✦ Amazon - Data Engineer </Text>
            <Text style={styles.text}>╚══════════════════════════╝ </Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_habilities, { height }]}>
            <Text style={styles.text}>Habilidades</Text>
            <Text style={styles.text}>▃▃▃▃▃▃▃▃▃▃▃</Text>
            <Text style={styles.text}>╔═════════════════════════╗</Text>
            <Text style={styles.text}> ✦ ETL </Text>
            <Text style={{ color: 'white' }}> ✦ Scrum </Text>
            <Text style={{ color: 'white' }}> ✦ DevOps </Text>

            <Text style={{ color: 'white' }}>╚══════════════════════════╝ </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_tecnologies, { height }]}>
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
  container_namePrincipal: {
    width: 150,
    height: 100,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10

  },
  container_nameSecond: {
    width: 150,
    height: 100,
    backgroundColor: "#575757ff",
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10

  },

  big_container: {
    flexDirection: "row",
  },

  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    margin: 10,
    borderRadius: 10
  },

  icon_image: {
    height: 45,
    width: 45,
    borderRadius: 100
  },
  container_experience: {
    width: 300,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  container_habilities: {
    width: 300,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  container_tecnologies: {
    width: 300,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  text: {
    color: "#ffffffff"
  }

});

export default App;
