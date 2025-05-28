import { Dimensions, StyleSheet } from "react-native";

const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36393f', 
    padding: 20,
    height: windowsHeight - 140
  },
  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  form: {
    backgroundColor: '#2f3136', 
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#202225', 
  },
  control: {
    marginBottom: 20,
  },
  texto: {
    color: '#b9bbbe', 
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#40444b', 
    color: '#ffffff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#202225',
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#5865f2', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;