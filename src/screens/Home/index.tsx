import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = ['Thiago', 'Taeyang', 'Yukio', 'Baekho', 'Hanju', 'Mugyeong', 'Sartor', 'Geunbi', 'Nostrap'];

  function handleParticipantAdd() {
    console.log('Cu de telha')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Vc removeu o lindo ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 10 de junho de 2024.
      </Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => (
          <Participant 
            key={participant}
            name={participant} 
            onRemove={() => handleParticipantRemove('Thiago')} 
          />
        ))}
      </ScrollView>
    </View>
  )
}
