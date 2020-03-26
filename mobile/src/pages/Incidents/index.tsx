/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import api from '../../services/api';

import styles from './styles';

export interface Incident {
  id: number;
  title: string;
  description: string;
  value: number;
  ong: {
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
}

function Incidents() {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('incidents');

      setIncidents(response.data);
      setTotal(response.headers['x-total-count']);
    }

    loadIncidents();
  }, []);

  function navigateToDetail(incident: Incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> {total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>
        Escolhe um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(incident) => String(incident.id)}
        renderItem={({ item }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>{item.ong.name}</Text>

            <Text style={styles.incidentProperty}>Caso</Text>
            <Text style={styles.incidentValue}>{item.title}</Text>

            <Text style={styles.incidentProperty}>Valor</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.value)}
            </Text>

            <TouchableOpacity
              onPress={() => navigateToDetail(item)}
              style={styles.detailsButton}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Incidents;
