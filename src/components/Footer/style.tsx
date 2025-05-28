import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2f3136',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#202225', 
    height: 60,
  },
  button1: {
    backgroundColor: '#36393f',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#b9bbbe', 
  },
  activeButton: {
    backgroundColor: '#5865f2', 
  },
  activeIcon: {
    tintColor: '#ffffff',
  }
});

export default styles;