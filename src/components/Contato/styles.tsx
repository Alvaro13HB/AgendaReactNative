import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#36393f',  
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#4f545c',  
  },
  dados: {
    flex: 1,
    marginRight: 12,
  },
  nome: {
    color: '#ffffff',  
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  numero: {
    color: '#b9bbbe',  
    fontSize: 14,
  },
  trashIcon: {
    width: 20,
    height: 20,
    tintColor: '#ed4245', 
  }
});

export default styles;