import * as React from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import logo from "../assets/images/logo.png";
import Space from "../components/Space";
import Button from "../components/Button";
import { useSignUpMutation } from "../store/api";

const Signup = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleSignUp = async () => {
    if (!name.length > 0 || !email.length > 0 || !password.length > 0) {
      alert("Please input valid data");
      return;
    }
    try {
      const { data, error } = await signUp({
        name: name,
        email: email,
        password: password,
      });
      if (error) {
        console.log(error);
        throw new Error(error);
      }
      navigation.navigate("Dashboard");
    } catch (error) {
      alert("Sign Up Failed");
    }
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: "30%", height: "15%" }}></Image>
      <Space height={50} />
      {/* <View style={styles.inputFieldOuter}>
        <TextInput
                    style={styles.inputFieldInner}
                    name={'First_Name'}
                    placeholder={'First Name'}
                />
      </View> */}

      <Space height={10} />
      <View style={styles.inputFieldOuter}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.inputFieldInner}
          name={"Name"}
          placeholder={"Enter Name"}
        />
      </View>
      <Space height={10} />
      <View style={styles.inputFieldOuter}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputFieldInner}
          name={"Email"}
          placeholder={"Email Address"}
        />
      </View>
      <Space height={10} />
      <View style={styles.inputFieldOuter}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputFieldInner}
          name={"Password"}
          placeholder={"********"}
        />
      </View>
      <Space height={20} />
      <Button
        disabled={isLoading}
        title={"SIGN UP"}
        textStyle={{ color: "white" }}
        onPress={handleSignUp}
        loa
      />
      <Space height={20} />
      <Text style={{ color: "#9A9A9A", fontSize: 12, textAlign: "center" }}>
        Already have an account?
        <Text
          style={{ color: "#454545" }}
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F8FD",
    alignItems: "center",
    justifyContent: "center",
  },

  inputFieldOuter: {
    flexDirection: "row",
    alignSelf: "center",
    width: "80%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(216, 216, 216, 255)",
    backgroundColor: "#ffffff",
  },

  inputFieldInner: {
    width: "90%",
    padding: 15,
    fontSize: 15,
  },
});
