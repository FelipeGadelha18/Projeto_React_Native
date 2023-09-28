import React from "react";
import { View, Text } from "react-native";
import styles from "./estiloTitle";
const Title = () => {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                Verifique o seu IMC
            </Text>
        </View>
    );
}

export default Title;
