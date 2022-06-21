import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({

    containerStyle,
    buttonStyle,
    textStyle,
    title,
    //internalStyle,
    ...rest
}
) => {
    console.log(title)
    return (
        <View style={[Styles.container, containerStyle]}>
            <TouchableOpacity
                {...rest}
                style={[Styles.button, buttonStyle]}
            >
                <View styles={Styles.buttonInternal}>
                    <Text style={[Styles.buttonText, textStyle]}> {title} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default Button

const Styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        height: 55,
    },
    button: {
        width: '100%',
        height: '100%',
        backgroundColor: "#062a5c",
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttonInternal: {
        width: '100%',
        height: '100%',
        backgroundColor: "#062a5c",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
    }
});