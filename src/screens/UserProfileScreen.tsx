import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, Chip } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCurrentUser } from '../store/slices/userSlice';

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [userData, setUserData] = useState(currentUser || {
    name: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    position: '',
    sports: [],
    club: '',
    clubStatus: 'pending',
    ranking: 0,
  });

  const handleUpdateProfile = () => {
    dispatch(setCurrentUser(userData));
    // TODO: Save to Firestore
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>User Profile</Title>
      <TextInput
        label="Name"
        value={userData.name}
        onChangeText={(text) => setUserData({ ...userData, name: text })}
        style={styles.input}
      />
      <TextInput
        label="First Name"
        value={userData.firstName}
        onChangeText={(text) => setUserData({ ...userData, firstName: text })}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={userData.lastName}
        onChangeText={(text) => setUserData({ ...userData, lastName: text })}
        style={styles.input}
      />
      <TextInput
        label="Date of Birth"
        value={userData.dateOfBirth}
        onChangeText={(text) => setUserData({ ...userData, dateOfBirth: text })}
        style={styles.input}
      />
      <TextInput
        label="Position"
        value={userData.position}
        onChangeText={(text) => setUserData({ ...userData, position: text })}
        style={styles.input}
      />
      <View style={styles.sportsContainer}>
        <Title style={styles.subtitle}>Sports</Title>
        {userData.sports.map((sport, index) => (
          <Chip key={index} onClose={() => {
            const newSports = [...userData.sports];
            newSports.splice(index, 1);
            setUserData({ ...userData, sports: newSports });
          }}>
            {sport}
          </Chip>
        ))}
        <TextInput
          label="Add Sport"
          onSubmitEditing={(event) => {
            const newSport = event.nativeEvent.text;
            setUserData({ ...userData, sports: [...userData.sports, newSport] });
          }}
          style={styles.input}
        />
      </View>
      <TextInput
        label="Club"
        value={userData.club}
        onChangeText={(text) => setUserData({ ...userData, club: text })}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleUpdateProfile} style={styles.button}>
        Update Profile
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
  subtitle: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  sportsContainer: {
    marginBottom: 16,
  },
});

export default UserProfileScreen;