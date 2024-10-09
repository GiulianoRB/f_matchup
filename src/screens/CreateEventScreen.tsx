import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addEvent } from '../store/slices/eventsSlice';

const CreateEventScreen = () => {
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState({
    name: '',
    sport: '',
    location: '',
    date: '',
    time: '',
    venue: '',
    fee: '',
    organizerAccount: '',
    maxPlayers: '',
  });

  const handleCreateEvent = () => {
    const newEvent = {
      ...eventData,
      id: Date.now().toString(),
      fee: parseFloat(eventData.fee),
      maxPlayers: parseInt(eventData.maxPlayers),
      players: [],
      status: 'open',
    };
    dispatch(addEvent(newEvent));
    // TODO: Save to Firestore
    // TODO: Generate and save invite link
    // TODO: Send push notifications to invited players
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Create New Event</Title>
      <TextInput
        label="Event Name"
        value={eventData.name}
        onChangeText={(text) => setEventData({ ...eventData, name: text })}
        style={styles.input}
      />
      <TextInput
        label="Sport"
        value={eventData.sport}
        onChangeText={(text) => setEventData({ ...eventData, sport: text })}
        style={styles.input}
      />
      <TextInput
        label="Location"
        value={eventData.location}
        onChangeText={(text) => setEventData({ ...eventData, location: text })}
        style={styles.input}
      />
      <TextInput
        label="Date"
        value={eventData.date}
        onChangeText={(text) => setEventData({ ...eventData, date: text })}
        style={styles.input}
      />
      <TextInput
        label="Time"
        value={eventData.time}
        onChangeText={(text) => setEventData({ ...eventData, time: text })}
        style={styles.input}
      />
      <TextInput
        label="Venue"
        value={eventData.venue}
        onChangeText={(text) => setEventData({ ...eventData, venue: text })}
        style={styles.input}
      />
      <TextInput
        label="Fee"
        value={eventData.fee}
        onChangeText={(text) => setEventData({ ...eventData, fee: text })}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Organizer Account"
        value={eventData.organizerAccount}
        onChangeText={(text) => setEventData({ ...eventData, organizerAccount: text })}
        style={styles.input}
      />
      <TextInput
        label="Max Players"
        value={eventData.maxPlayers}
        onChangeText={(text) => setEventData({ ...eventData, maxPlayers: text })}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleCreateEvent} style={styles.button}>
        Create Event
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default CreateEventScreen;