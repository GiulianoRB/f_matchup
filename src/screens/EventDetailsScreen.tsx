import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Paragraph, Button, List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const EventDetailsScreen = () => {
  const events = useSelector((state: RootState) => state.events.events);
  // For demonstration, we'll use the first event. In a real app, you'd pass the event ID as a parameter.
  const event = events[0];

  if (!event) {
    return (
      <View style={styles.container}>
        <Title>No event found</Title>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Title>{event.name}</Title>
      <Paragraph>Sport: {event.sport}</Paragraph>
      <Paragraph>Location: {event.location}</Paragraph>
      <Paragraph>Date: {event.date}</Paragraph>
      <Paragraph>Time: {event.time}</Paragraph>
      <Paragraph>Venue: {event.venue}</Paragraph>
      <Paragraph>Fee: ${event.fee}</Paragraph>
      <Paragraph>Organizer Account: {event.organizerAccount}</Paragraph>
      <Paragraph>Players: {event.players.length} / {event.maxPlayers}</Paragraph>
      <Button mode="contained" style={styles.button}>Join Event</Button>
      <Title style={styles.subtitle}>Players</Title>
      {event.players.map((player) => (
        <List.Item
          key={player.userId}
          title={player.name}
          description={`Status: ${player.status}, Payment: ${player.paymentStatus}`}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
});

export default EventDetailsScreen;