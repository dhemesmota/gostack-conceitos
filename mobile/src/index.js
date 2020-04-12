import React, { useEffect, useState } from 'react';
import { 
  SafeAreaView, 
  FlatList, 
  Text, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity 
} from 'react-native';

import api from './services/api';
import Header from './components/Header';
import Project from './components/Project';
import Modal from './components/Modal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  project: {
    color: '#FFF',
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#4caf50',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
    bottom: 15,
    borderWidth: 2,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    
    elevation: 19,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 36,
  },
});

import { ContainerTitle, Title, SubTitle } from './styles';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [countProject, setCount] = useState(0);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      setCount(response.data.length);
    })
  }, []);

  async function handleAddProject(title, owner) {
    const response = await api.post('projects', {
      title,
      owner,
    });

    const project = response.data;

    setModalOpen(false);
    setProjects([{...project, isNew: true},...projects]);
    setCount(countProject + 1);
  }

  return (
    <>
      <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="light-content" translucent />

      <SafeAreaView style={styles.container}>
        <Header 
          name="Dhemes"
          description="Adicione seus projetos favoritos"
        />

        <ContainerTitle>
          <SubTitle>Você tem {countProject} projetos</SubTitle>
        </ContainerTitle>

        <FlatList
          data={projects}
          showsVerticalScrollIndicator={false}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Project project={project} />
          )}
        />

        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button} 
          onPress={() => setModalOpen(true)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>

      {modalOpen && (
        <Modal createProject={handleAddProject} />
      )}
    </>
  );
}
