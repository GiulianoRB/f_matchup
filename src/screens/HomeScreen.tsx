import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Friendly Matchup</Title>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('CreateEvent' as never)}
        style={styles.button}
      >
        Create Event
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('EventDetails' as never)}
        style={styles.button}
      >
        View Events
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('UserProfile' as never)}
        style={styles.button}
      >
        My Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  button: {
    marginVertical: 8,
    width: '100%',
  },
});

export default HomeScreen;