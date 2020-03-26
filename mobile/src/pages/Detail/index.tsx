/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo } from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logo from '../../assets/logo.png';
import { Incident } from '../Incidents';

import styles from './styles';

function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params as { incident: Incident };

  const formattedValue = useMemo(
    () => Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(incident.value),
    [incident.value]
  );

  const message = useMemo(
    () => `Olá ${incident.ong.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" no valor de ${formattedValue}`,
    [incident.ong.name, incident.title, formattedValue]
  );

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.ong.email],
      body: message,
    });
  }

  function sendWhatapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.ong.whatsapp}&text=${message}`);
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
        <Text style={styles.incidentValue}>
          {incident.ong.name} de {incident.ong.city}/{incident.ong.uf}
        </Text>

        <Text style={styles.incidentProperty}>Caso</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor</Text>
        <Text style={styles.incidentValue}>{formattedValue}</Text>
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
