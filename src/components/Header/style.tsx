import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 100,
    backgroundColor: '#2f3136', 
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#202225', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    zIndex: 10,
  },
  header_text: {
    color: '#ffffff', 
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
    textTransform: 'uppercase', 
  },
});

export default styles;