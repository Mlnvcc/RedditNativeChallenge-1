import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Header() {
  const [formValue, setFormValue] = useState('')

  const submitForm = () => {
    if (formData.trim()) {
      console.log(formValue);
      setFormValue('')
    }
  }

  return (
    <View style={styles.form}>
      <Button title="Profile" />

      <TextInput
        value={formValue}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder="Write here..."
      ></TextInput>

      <Button title="Search" />
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
  }
})
