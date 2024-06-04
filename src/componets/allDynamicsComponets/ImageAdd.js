// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import { FontsGeneral } from '../screens/style';

// const EditImageScreen = ({title}) => {
//   const [image, setImage] = useState('');
//   const [isImageEdited, setIsImageEdited] = useState(false);

//   useEffect(() => {
//     loadEditedImage();
//   }, []);

//   const loadEditedImage = async () => {
//     try {
//       const editedImage = await AsyncStorage.getItem('editedImage');
//       if (editedImage) {
//         setImage(editedImage);
//       }
//     } catch (error) {
//       console.error('Error loading edited image:', error);
//     }
//   };

//   const handleImagePicker = async () => {
//     try {
//       const pickedImage = await ImageCropPicker.openPicker({
//         width: 500,
//         height: 500,
//         cropping: true,
//       });

//       setImage(pickedImage.path);
//       setIsImageEdited(true);
//       saveEditedImage(pickedImage.path); // Save the edited image URI to AsyncStorage
//     } catch (error) {
//       console.log('Image picking error: ', error);
//     }
//   };

//   const saveEditedImage = async (editedImagePath) => {
//     try {
//       await AsyncStorage.setItem('editedImage', editedImagePath);
//     } catch (error) {
//       console.error('Error saving edited image:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {image ? (
//         <Image source={{ uri: image }} style={styles.selectedImage}  />
//       ) : (
//         <Image source={{uri:'https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000'}} style={styles.defaultImage} />
//       )}

//       <Text style={styles.TextLink}  onPress={handleImagePicker} >{title}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   TextLink:{
//   fontSize: 23,
//     lineHeight: 24,
//     color: 'black',
//     fontWeight: '600',
//     fontFamily: 'Satoshi-Medium',
//     letterSpacing: 0.4,
//     fontFamily:FontsGeneral.MEDIUMSANS
//   }
//     ,
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
//   defaultImage: {
//     width: 80,
//     height: 80,
//    marginTop:10,
//     // borderRadius:100,
//     objectFit:'cover',
//     // backgroundColor:'red'
//   },
//   selectedImage: {
//     width: 100,
//     height: 80,
//     marginBottom:3,
//     // borderRadius:100,
//     objectFit:'cover'
//   },
//   successText: {
//     color: 'green',
//     marginTop: 10,
//   },
// });

// export default EditImageScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageCropPicker from 'react-native-image-crop-picker';

const ImageUpload = () => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    fetchImageFromStorage();
  }, []);

  const handleImagePicker = () => {
    ImageCropPicker.openPicker({
      cropping: true,
    })
      .then((image) => {
        const imagePath = image.path;
        saveImageToStorage(imagePath);
        setImageUri(imagePath);
        Alert.alert('Image selected');
      })
      .catch((error) => {
        console.log('ImagePicker Error: ', error);
      });
  };

  const saveImageToStorage = async (imagePath) => {
    try {
      await AsyncStorage.setItem('profileImage', imagePath);
      console.log("Image saved locally:", imagePath);
    } catch (error) {
      console.log("Error saving image:", error);
    }
  };

  const fetchImageFromStorage = async () => {
    try {
      const storedImage = await AsyncStorage.getItem('profileImage');
      if (storedImage) {
        setImageUri(storedImage);
        console.log('Image fetched from storage:', storedImage);
      }
    } catch (error) {
      console.log("Error fetching image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.selectedImage} />
        ) : (
          <Image source={require('../../assets/Avatar.png')} style={styles.defaultImage} />
        )}
        <Text style={styles.textLink} onPress={handleImagePicker}>Editar foto</Text>
        
      </View>
      <Text>asdasd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  defaultImage: {
    width: 80,
    height: 80,
    marginTop: 10,
    borderRadius: 40,
  },
  selectedImage: {
    width: 80,
    height: 80,
    marginBottom: 3,
    borderRadius: 40,
  },
  textLink: {
    fontSize: 13,
    lineHeight: 24,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Satoshi-Medium',
    letterSpacing: 0.4,
    marginLeft: 10,
    marginTop:20
  },
});

export default ImageUpload;
