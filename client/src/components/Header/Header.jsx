import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Header() {
  const [formValue, setFormValue] = useState('')

  const submitForm = () => { // formValue - это то шо нужно отправлять на поиск 
    if (formValue.trim()) {
      setFormValue('')
    }
  }

  return (
    <View style={styles.form}>
      <Button title="Profile" />

      <TextInput
        onChangeText={text => setFormValue(text)}
        value={formValue}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder="Write here..."
      ></TextInput>

      <Button onPress={submitForm} title="Search" />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },

  input: {
    padding: 7,
    width: 200,
    borderStyle: "solid",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#3949ab"
  },
})
