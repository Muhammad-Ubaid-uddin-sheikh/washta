// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { Fonts, FontsGeneral } from '../style';
// import Button from '../../allDynamicsComponets/Button';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/Octicons';
// import Feather from 'react-native-vector-icons/Feather';

// const StepTwo = ({ navigation }) => {
//   const [cards, setCards] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const storedCards = await AsyncStorage.getItem('cards');
//         if (storedCards) {
//           const parsedCards = JSON.parse(storedCards);
//           setCards(parsedCards);
//           setSelectedCard(parsedCards[0]); // Set the first card as the default selected card
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCards();
//   }, []);

//   const handleSelectCard = (card) => {
//     setSelectedCard(card);
//     console.log(card); // Log the selected card's data
//   };

//   const handleDeleteCard = async (cardNumber) => {
//     const updatedCards = cards.filter(card => card.cardNumber !== cardNumber);
//     setCards(updatedCards);
//     await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
//   };

//   const getCardImage = (cardNumber) => {
//     if (cardNumber.startsWith('4')) {
//       return require('../../../assets/visa.png');
//     } else if (cardNumber.startsWith('5')) {
//       return require('../../../assets/mastercard.png');
//     } else if (cardNumber.startsWith('3')) {
//       return require('../../../assets/american-express.png');
//     } else {
//       return ;
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={[styles.card, selectedCard === item && styles.selectedCard]}>
//       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
//           <TouchableOpacity onPress={() => handleDeleteCard(item.cardNumber)}>
//           <Feather name="trash-2" style={{ color: 'red', fontSize: 20 }} />
//         </TouchableOpacity>
//           <Image source={getCardImage(item.cardNumber)} style={{ width: 45, height: 22, marginLeft: 10, objectFit: 'contain' }} />
//           <Text style={{ fontFamily: FontsGeneral.MEDIUMSANS, color: 'black', fontSize: 15,}}>
//             Ending with <Text style={{ fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 18 }}> {item.cardNumber.slice(-4)}</Text>
//           </Text>
//         </View>
//         <TouchableOpacity
//             style={styles.radioButton}
//             onPress={() => handleSelectCard(item)}
//           >
//             {selectedCard === item && <View style={styles.radioButtonSelected} />}
//           </TouchableOpacity>
//       </View>
//       <TextInput
//         style={styles.cvvInput}
//         placeholder="CVV"
//         keyboardType="numeric"
//         maxLength={3}
//         secureTextEntry
//         value={item.cvv}
//         editable={false}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={[styles.progressContainer, { paddingHorizontal: 10 }]}>
//         <View style={styles.completedStep}>
//           <Text style={styles.stepText}>1</Text>
//         </View>
//         <View style={[styles.line, { backgroundColor: '#747EEF' }]} />
//         <View style={[styles.step, { backgroundColor: '#747EEF', borderColor: '#747EEF', borderWidth: 1 }]}>
//           <Text style={[styles.stepText, { color: 'white' }]}>2</Text>
//         </View>
//         <View style={[styles.line]} />
//         <View style={[styles.step, { backgroundColor: 'white', borderColor: '#a6a6a6', borderWidth: 1 }]}>
//           <Text style={[styles.stepText, { color: '#a6a6a6' }]}>3</Text>
//         </View>
//       </View>
//       <ScrollView>
//       <Text style={{ fontFamily: FontsGeneral.MEDIUMSANS, color: 'black', fontSize: 18, textAlign: 'left', paddingTop: 20 }}>Please select a payment method</Text>
//       {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
//         <TouchableOpacity style={{ flexDirection: 'row', width: 250, backgroundColor: '#747EEF', padding: 10, justifyContent: 'center', gap: 10, borderRadius: 50, paddingVertical: 14, alignItems: 'center' }} onPress={() => navigation.navigate('AddCard')}>
//           <Icon name='diff-added' style={{ color: 'white', fontSize: 18 }} />
//           <Text style={{ color: 'white', fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }}>Add New Card</Text>
//         </TouchableOpacity>
//       </View> */}
//       {/* <View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <Text style={{ color: 'black', fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 13, width: '50%' }}>Credit/Debit Card</Text>
//           <View style={{ width: '50%' }}>
//             <Image source={require('../../../assets/cardimg.png')} style={{ width: '100%', height: 20 }} />
//           </View>
//         </View>
//         <Text style={{ color: 'black', fontFamily: FontsGeneral.REGULARSANS, fontSize: 12, paddingTop: 5 }}>We accept Visa, MasterCard and American Express</Text>
//       </View> */}
//        <FlatList
//         data={cards}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//       />
//       <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
//         <TouchableOpacity style={{ flexDirection: 'row', width: 250, backgroundColor: '#747EEF', padding: 10, justifyContent: 'center', gap: 10, borderRadius: 50, paddingVertical: 14, alignItems: 'center' }} onPress={() => navigation.navigate('AddCard')}>
//           <Icon name='diff-added' style={{ color: 'white', fontSize: 18 }} />
//           <Text style={{ color: 'white', fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }}>Add New Card</Text>
//         </TouchableOpacity>
//       </View>
//       </ScrollView>
//       <View style={styles.buttonContainer}>
//         <Button text="Review Summary" Link={() => navigation.navigate('StepTwo')} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     paddingHorizontal: 15,
//   },
//   container: {
//     flex: 1,
//     textAlign: 'left',
//     paddingHorizontal: 20,
//   },
//   progressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   step: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#a6a6a6',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   completedStep: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#747EEF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   line: {
//     width: '28%',
//     height: 1.5,
//     marginHorizontal: 10,
//     backgroundColor: '#a6a6a6',
//   },
//   stepText: {
//     color: '#fff',
//     fontFamily: FontsGeneral.MEDIUMSANS,
//     fontSize: 16,
//   },
//   card: {
//     borderRadius: 8,
//     marginVertical: 15,
//     backgroundColor: '#F9F9F9',
//     paddingHorizontal: 20,
//     borderColor: '#747FE8',
//     borderWidth: 0.5,
//     paddingVertical: 10,
//     elevation: 2,
//   },
//   selectedCard: {
//     borderColor: '#747FE8',
//     borderWidth: 1,
//   },
//   cvvInput: {
//     borderWidth: 1,
//     borderBottomColor: '#ccc',
//     width: 90,
//     padding: 0,
//     borderColor: '#747FE8',
//     backgroundColor: 'white',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginLeft: 50,
//     color: '#212121',
//     fontFamily: FontsGeneral.REGULARSANS,
//     fontSize: 12,
//     paddingVertical: 0,
//     marginTop:10
//   },
//   radioButton: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#747FE8',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
//   radioButtonSelected: {
//     height: 10,
//     width: 10,
//     borderRadius: 5,
//     backgroundColor: '#747FE8',
//   },
// });

// export default StepTwo;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Fonts, FontsGeneral } from '../style';
import Button from '../../allDynamicsComponets/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

const StepTwo = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const storedCards = await AsyncStorage.getItem('cards');
        if (storedCards) {
          const parsedCards = JSON.parse(storedCards);
          setCards(parsedCards);
          setSelectedCard(parsedCards[0]); // Set the first card as the default selected card
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, []);

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    console.log(card); // Log the selected card's data
  };

  const handleDeleteCard = async (cardNumber) => {
    const updatedCards = cards.filter(card => card.cardNumber !== cardNumber);
    setCards(updatedCards);
    await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const getCardImage = (cardNumber) => {
    if (cardNumber.startsWith('4')) {
      return require('../../../assets/visa.png');
    } else if (cardNumber.startsWith('5')) {
      return require('../../../assets/mastercard.png');
    } else if (cardNumber.startsWith('3')) {
      return require('../../../assets/american-express.png');
    } else {
      return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, selectedCard === item && styles.selectedCard , ]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleDeleteCard(item.cardNumber)}>
            <Feather name="trash-2" style={{ color: 'red', fontSize: 20 }} />
          </TouchableOpacity>
          <Image source={getCardImage(item.cardNumber)} style={{ width: 45, height: 22, marginLeft: 10, objectFit: 'contain' }} />
          <Text style={{ fontFamily: FontsGeneral.MEDIUMSANS, color: 'black', fontSize: 15, }}>
            Ending with <Text style={{ fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 18 }}> {item.cardNumber.slice(-4)}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleSelectCard(item)}
        >
          {selectedCard === item && <View style={styles.radioButtonSelected} />}
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.cvvInput}
        placeholder="CVV"
        keyboardType="numeric"
        maxLength={3}
        secureTextEntry
        value={item.cvv}
        editable={false}
      />
    </View>
  );

  const renderHeader = () => (
    <View>
      <View style={[styles.progressContainer, { paddingHorizontal: 10 }]}>
        <View style={styles.completedStep}>
          <Text style={styles.stepText}>1</Text>
        </View>
        <View style={[styles.line, { backgroundColor: '#747EEF' }]} />
        <View style={[styles.step, { backgroundColor: '#747EEF', borderColor: '#747EEF', borderWidth: 1 }]}>
          <Text style={[styles.stepText, { color: 'white' }]}>2</Text>
        </View>
        <View style={[styles.line]} />
        <View style={[styles.step, { backgroundColor: 'white', borderColor: '#a6a6a6', borderWidth: 1 }]}>
          <Text style={[styles.stepText, { color: '#a6a6a6' }]}>3</Text>
        </View>
      </View>
      <Text style={{ fontFamily: FontsGeneral.MEDIUMSANS, color: 'black', fontSize: 18, textAlign: 'left', paddingTop: 20 }}>Please select a payment method</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingRight:10}}>
           <Text style={{ color: 'black', fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 13, width: '50%' }}>Credit/Debit Card</Text>
         <View style={{ width: '50%' }}>
            <Image source={require('../../../assets/cardimg.png')} style={{ width: '100%', height: 20 }} />
          </View>
        </View>
        <Text style={{ color: 'black', fontFamily: FontsGeneral.REGULARSANS, fontSize: 12, paddingTop: 5,paddingBottom:10 }}>We accept Visa, MasterCard and American Express</Text>
      </View> 
    // </View>
  );

  const renderFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
      <TouchableOpacity style={{ flexDirection: 'row', width: 250, backgroundColor: '#747EEF', padding: 10, justifyContent: 'center', gap: 10, borderRadius: 50, paddingVertical: 14, alignItems: 'center' }} onPress={() => navigation.navigate('AddCard')}>
        <Icon name='diff-added' style={{ color: 'white', fontSize: 18 }} />
        <Text style={{ color: 'white', fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
      <View style={styles.buttonContainer}>
        <Button text="Review Summary" Link={() => navigation.navigate('StepThree')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#a6a6a6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedStep: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#747EEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '28%',
    height: 1.5,
    marginHorizontal: 10,
    backgroundColor: '#a6a6a6',
  },
  stepText: {
    color: '#fff',
    fontFamily: FontsGeneral.MEDIUMSANS,
    fontSize: 16,
  },
  card: {
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
    borderColor: '#747FE8',
    borderWidth: 0.5,
    paddingVertical: 10,
    elevation: 2,
  },
  selectedCard: {
    borderColor: '#747FE8',
    borderWidth: 1,
    backgroundColor:'white'
  },
  cvvInput: {
    borderWidth: 1,
    borderBottomColor: '#ccc',
    width: 90,
    padding: 0,
    borderColor: '#747FE8',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 50,
    color: '#212121',
    fontFamily: FontsGeneral.REGULARSANS,
    fontSize: 12,
    paddingVertical: 0,
    marginTop: 10
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#747FE8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#747FE8',
  },
});

export default StepTwo;
