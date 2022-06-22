import * as React from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import logo from "../assets/images/logo.png";
import Space from "../components/Space";
import Button from "../components/Button";
import { useSignUpMutation } from "../store/api/covidApi";
import Loader from "../components/Loader";
import { addToast } from "../utils";
import { pathOr } from "ramda";
import { validateSignUp } from "../config/middlewares";
import { setAuthUser } from "../store/slice";
import { useDispatch } from "react-redux";

const Signup = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleSignUp = async () => {
    const { message, status } = validateSignUp(name, email, password);
    if (!status) {
      addToast(message, true);
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
      dispatch(setAuthUser({ user: data?.user, isLoggedIn: true }));
      addToast(data?.message, false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      });
    } catch (error) {
      addToast(
        pathOr(
          "Something went wrong while loggin in",
          ["data", "message"],
          error
        ),
        true
      );
    }
  };
  return (
    <View style={styles.container}>
      <Loader visible={isLoading} />
      <Image source={logo} style={{ width: "30%", height: "15%" }}></Image>
      <Space height={50} />

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
