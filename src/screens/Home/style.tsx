import { Dimensions, StyleSheet } from "react-native";

const windowsHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36393f', 
    paddingHorizontal: 16,
    paddingTop: 16,
    height: windowsHeight - 140
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#72767d', 
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  emptyIcon: {
    width: 100,
    height: 100,
    tintColor: '#72767d',
    opacity: 0.7,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5865f2', 
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  floatingButtonIcon: {
    width: 24,
    height: 24,
    tintColor: '#ffffff',
  },
});

export default styles;