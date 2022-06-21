import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import logo from "../assets/images/logonew.png";
import Space from "../components/Space";
import Button from "../components/Button";
import bg from "../assets/images/bg.png";
import { useSignInMutation } from "../store/api";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [signIn, { isLoading }] = useSignInMutation();

const handleSign=async()=>{
    if()
}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground source={bg} style={styles.container}>
        <View style={styles.outerbody}>
          <View style={styles.body}>
            <Image
              source={logo}
              style={{ width: "30%", height: "15%" }}
            ></Image>
            <Space height={50} />
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
              buttonStyle={{ backgroundColor: "#ff7573" }}
              title={"LOGIN"}
              textStyle={{ color: "white" }}
              onPress={() => navigation.navigate("Dashboard")}
            />
            <Space height={20} />
            <Text
              style={{ color: "#9A9A9A", fontSize: 12, textAlign: "center" }}
            >
              Don't have an account?
              <Text
                style={{ color: "#454545" }}
                onPress={() => navigation.navigate("Signup")}
              >
                {" "}
                SIGN UP
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    resizeMode: "contain",
    margin: 0,
  },
  outerbody: {
    display: "flex",
    width: "100%",
    height: "100%",
    // padding: "3%",
  },
  body: {
    padding: "5%",
    flex: 8,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
    padding: 10,
    fontSize: 15,
  },
});
