import React , {useState} from "react";
import {SafeAreaView, StyleSheet, View, Text, Picker, Image, Button} from 'react-native';

export default function App() {

  const [picker1SelectedValue, setPicker1SelectedValue] = useState();
  const [picker2SelectedValue, setPicker2SelectedValue] = useState();

  const [picker1image, setPicker1Image] = useState("https://img.icons8.com/ios/344/smiling.png");
  const [picker2image, setPicker2Image] = useState("https://img.icons8.com/ios/344/smiling.png");

  const [quantity1SelectedValue, setQuantity1SelectedValue] = useState();
  const [quantity2SelectedValue, setQuantity2SelectedValue] = useState();

  const [calculatedString, setCalculatedString] = useState("Press the button above to calculate total price.");
  const [calculatedValue,	setCalculatedValue]	=	useState("");
  const [stringColor, setStringColor] = useState("black");

  return (

    <SafeAreaView style={styles.container}>
      {/* 1. Welcome heading  (Annie) */}
      <View style={styles.row1}>
        <Text style={styles.heading}> Welcome to VFUS </Text>
      </View>
      {/* 2. Image of your choice (Nishesh) */}
      <View style={styles.row2}>
        <Image 
          source={{uri:"https://cdn-icons-png.flaticon.com/512/3787/3787377.png"}}
          style={styles.logo} />
      </View>
      {/* 3. Veggies dropdown (Annie) & 5. Quantity (Daniel)*/}
      <View style={styles.row3}>
        <Image  
          style={styles.image}
          source={{uri: picker1image}} />
        <Picker 
          style={styles.picker1}
          selectedValue={picker1SelectedValue}
          onValueChange={(itemValue, itemIndex) => {
            setPicker1SelectedValue(itemValue);
            if (itemIndex == 0) setPicker1Image("https://img.icons8.com/ios/344/smiling.png");
            else if (itemIndex == 1) setPicker1Image("https://cdn-icons-png.flaticon.com/512/3416/3416652.png");
            else if (itemIndex == 2) setPicker1Image("https://cdn-icons-png.flaticon.com/512/2909/2909765.png");
            else if (itemIndex == 3) setPicker1Image("https://img.icons8.com/ios-filled/344/broccoli.png");
          }}>
          <Picker.Item	label="Select a veggie"/>
      	  <Picker.Item	label="Potato - $5"	value="val-Potato - $5"	/>
          <Picker.Item	label="Capsicum - $8"	value="val-Capsicum - $8"	/>
          <Picker.Item	label="Brocolli - $8"	value="val-Brocolli - $8"	/>
        </Picker>
        <Picker 
          style={styles.quantityPicker}
          selectedValue={quantity1SelectedValue}
          onValueChange={(itemValue, itemIndex) => setQuantity1SelectedValue(itemValue)} >
          <Picker.Item  label="Select quantity"/>
      	  <Picker.Item	label="1"	value={1}	/>
          <Picker.Item	label="2"	value={2}	/>
          <Picker.Item	label="3"	value={3}	/>
          <Picker.Item	label="4"	value={4}	/>
          <Picker.Item	label="5"	value={5}	/>
        </Picker>
      </View>
      {/* 4. Fruits dropdown (Nishesh) & 5. Quantity (Daniel) */}
      <View style={styles.row4}>
        <Image  
          style={styles.image}
          source={{uri: picker2image}} />
        <Picker 
          style={styles.picker2}
          selectedValue={picker2SelectedValue}
          onValueChange={(itemValue, itemIndex) => {
            setPicker2SelectedValue(itemValue);
            if (itemIndex == 0) setPicker2Image("https://img.icons8.com/ios/344/smiling.png");
            else if (itemIndex == 1) setPicker2Image("https://img.icons8.com/ios/344/banana.png");
            else if (itemIndex == 2) setPicker2Image("https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/344/external-durian-jungle-vitaliy-gorbachev-fill-vitaly-gorbachev.png");
            else if (itemIndex == 3) setPicker2Image("https://img.icons8.com/ios-filled/344/apple.png");
          }} >
          <Picker.Item  label="Select a fruit"/>
      	  <Picker.Item	label="Banana - $7"	value="val-Banana - $7"	/>
          <Picker.Item	label="Durian - $8"	value="val-Durian - $8"	/>
          <Picker.Item	label="Apple - $7"	value="val-Apple - $7"	/>
        </Picker>
        <Picker 
          style={styles.quantityPicker}
          selectedValue={quantity2SelectedValue}
          onValueChange={(itemValue, itemIndex) => setQuantity2SelectedValue(itemValue) }>
          <Picker.Item  label="Select quantity"/>
      	  <Picker.Item	label="1"	value={1}	/>
          <Picker.Item	label="2"	value={2}	/>
          <Picker.Item	label="3"	value={3}	/>
          <Picker.Item	label="4"	value={4}	/>
          <Picker.Item	label="5"	value={5}	/>
        </Picker>
      </View>
      {/* 6. Calculate button (Akif) */}
      <View style={styles.row6}>
        <Button 
          title="Calculate"
          onPress = { () => {
            var totalVeggiePrice = undefined;
            var totalFruitPrice = undefined;

            if (picker1SelectedValue !== undefined && quantity1SelectedValue !== undefined) {
            if (picker1SelectedValue !== null && quantity1SelectedValue !== null) {
              const lastCharVeggie = picker1SelectedValue[picker1SelectedValue.length - 1];
              const charToIntPicker1 = parseInt(lastCharVeggie);
              const veggieQuantity = quantity1SelectedValue;
              totalVeggiePrice = (charToIntPicker1 * veggieQuantity);
            }
            }

            if (picker2SelectedValue !== undefined && quantity2SelectedValue !== undefined) {
            if (picker2SelectedValue !== null && quantity2SelectedValue !== null) {
              const lastCharFruit = picker2SelectedValue[picker2SelectedValue.length - 1];
              const charToIntPicker2 = parseInt(lastCharFruit);
              const fruitQuantity = quantity2SelectedValue;
              totalFruitPrice = (charToIntPicker2 * fruitQuantity);
            }
            } 

            if (totalVeggiePrice !== undefined && totalFruitPrice !== undefined) {
              setCalculatedString("Total cost of the order: $");
              setCalculatedValue(totalVeggiePrice + totalFruitPrice);
              setStringColor("black");
            } else {
              setCalculatedString("Please select valid fruits, veggie & quantity from the dropdown above");
              setCalculatedValue("");
              setStringColor("red");
            }
          }}/>
        <Text style={[styles.calHeading, {color: stringColor}]} >{calculatedString}{calculatedValue} </Text>
      </View>

      {/* 7. Developers credit  (Daniel) */}
      <View style={styles.row7}>
        <Text style={styles.credit}>App developed by Akif Hasan, Annie Williamson, Daniel Le, Nishesh Abhilash</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffcc'
  },
  heading: {
    fontFamily: "Zapfino",
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  image: {
    width: 50, 
    height: 50, 
    alignSelf:'center'
  },
  row1: {
    flex: 0.5,
  },
  row2: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row3: {
    flex: 1,
    flexDirection: 'row',
  },
  row4: {
    flex: 1,
    flexDirection: 'row',
  },
  row6: {
    flex:0.7,
    justifyContent: 'center',
  },
  row7: {
    flex: 0.2,
    flexDirection: 'column-reverse',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  picker1: {
    flex:1,
  },  
  picker2: {
    flex:1
  },
  quantityPicker: {
    flex:1
  },
  credit: {
    fontFamily: 'Times New Roman', 
    fontSize: 12,
    textAlign: 'center',
  },
  calHeading: {
    marginTop: 5,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  }
});