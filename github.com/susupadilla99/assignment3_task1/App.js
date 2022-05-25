import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View, Image, Picker} from 'react-native';

export default function App() {

  const [picker2selectedvalue, setPicker2SelectedValue] = useState("val-Banana");

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Welcome heading  (Annie) */}

      {/* 2. Image of your choice (Nishesh) */}
      <View style={styles.row2}>
      <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3787/3787377.png"}}
      style={styles.logo} />
      </View>
      {/* 3. Veggies dropdown (Annie) */}

      {/* 4. Fruits dropdown (Nishesh) */}
      <View style={styles.row4}>
      <Picker style={styles.picker2}
      selectedValue={picker2selectedvalue}
      onValueChange={(itemValue, itemIndex) => setPicker2SelectedValue(itemValue)}>
      	<Picker.Item	label="Banana - $7"	value="val-Banana - $7"	/>
        <Picker.Item	label="Durian - $8"	value="val-Durian - $8"	/>
        <Picker.Item	label="Apple - $7"	value="val-Apple - $7"	/>
        </Picker>
      </View>
      {/* 5. Quantities dropdowns (Daniel) */}

      {/* 6. Calculate button (Akif) */}

      {/* 7. Developers credit  (Daniel) */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffcc'
  },
  logo: {
    height: 100,
    width: 100,
  },
  row2: {
    marginTop: 100,
    alignItems: 'center',
  },
  row4: {
    marginTop: 50,
  }
});
