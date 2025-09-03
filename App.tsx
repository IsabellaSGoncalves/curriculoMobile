import React, { useState } from 'react';
import { Linking, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const [height, setHeight] = useState(100);

  const linkedInimage = require('./images/LinkedIcon.png')
  const githubIcon = require('./images/iconGithub.png')
  const mailIcon = require('./images/mailIcon.png')
  const outLookIcon = require('./images/OutlookIcon.png')
  const perfilGithub = require('./images/perfilGithub.png')

  const toggleHeight = () => {
    setHeight(prev => (prev === 100 ? 150 : 100));
  };

  const OpenLinkLinkedIN = () => {
    Linking.openURL('https://www.linkedin.com/in/isabella-da-silva-gon%C3%A7alves-504b032b6/')
  }

  const OpenLinkEmail = () => {
    Linking.openURL('mailto:isabelllacom2l@gmail.com')
  }

  const OpenLinkGithub = () => {
    Linking.openURL('https://github.com/IsabellaSGoncalves')
  }

  const OpenLinkOutlook = () => {
    Linking.openURL('mailto:isabella.goncalves2025@outlook.com')
  }


  return (
    <ScrollView>

      <View style={styles.container}>
        <View style={styles.backgroundImage}>

          <Image
            source={perfilGithub}
            style={styles.image}
          />
        </View>

        <View style={styles.big_container}>
          <View style={styles.container_namePrincipal}>
            <Text style={styles.text_title}>Isabella da Silva Gonçalves</Text>

          </View>
          <View style={styles.container_nameSecond}>
            <Text style={styles.text}>Estudante de Desenvolvimento de Software Multiplataforma</Text>
          </View>

        </View>

        <View style={styles.big_container}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={OpenLinkLinkedIN}>
              <Image
                source={linkedInimage}
                style={styles.icon_image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={OpenLinkEmail}>
              <Image
                source={mailIcon}
                style={styles.icon_image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={OpenLinkGithub}>
              <Image
                source={githubIcon}
                style={styles.icon_image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={OpenLinkOutlook}>
              <Image
                source={outLookIcon}
                style={styles.icon_image}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_experience, { height }]}>
            <Text style={styles.text_title}>Experiências</Text>
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
            <Text style={styles.text_title}>Habilidades</Text>
            <Text style={styles.text}>▃▃▃▃▃▃▃▃▃▃▃</Text>
            <Text style={styles.text}>╔═════════════════════════╗</Text>
            <Text style={styles.text}> ✦ ETL </Text>
            <Text style={styles.text}> ✦ Scrum </Text>
            <Text style={styles.text}> ✦ DevOps </Text>
            <Text style={styles.text}>╚══════════════════════════╝ </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleHeight}>
          <View style={[styles.container_tecnologies, { height }]}>
            <Text style={styles.text_title}>Tecnologias</Text>
            <Text style={styles.text}>▃▃▃▃▃▃▃▃▃▃▃</Text>
            <Text style={styles.text}>╔══════════════════════════╗</Text>
            <Text style={styles.text}> ✦ Python </Text>
            <Text style={styles.text}> ✦ Go </Text>
            <Text style={styles.text}> ✦ SQL </Text>
            <Text style={styles.text}>╚══════════════════════════╝ </Text>
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
    borderWidth: 3,
    borderColor:"#000",
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
  },
  text_title: {
    fontWeight: 'bold',
    color: "#ffffffff",
    fontSize: 16
  }

});

export default App;
