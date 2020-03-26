/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logo from '../../assets/logo.png';

import styles from './styles';

const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso';

function Detail() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Caso 1',
      recipients: ['me@thehenry.dev'],
      body: message,
    });
  }

  function sendWhatapp() {
    Linking.openURL(`whatsapp://send?phone=${99}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>Caso</Text>
        <Text style={styles.incidentValue}>Caso 1</Text>

        <Text style={styles.incidentProperty}>Valor</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatapp}>
            <Text style={styles.actionText}>WathsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Detail;
