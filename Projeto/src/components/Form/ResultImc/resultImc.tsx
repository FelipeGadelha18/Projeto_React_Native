import React from "react";
import { View, Text } from "react-native";
import styles from "../ResultImc/estiloResult";

interface ResultImcProps {
    messageResultImc: string;
    resultImc: any;
}

const ResultImc: React.FC<ResultImcProps> = (props) => {
    return (
        <View style={styles.resultImc}>
            <Text style={styles.informacao}> 
                {props.messageResultImc}
            </Text>
            <Text style={styles.numImc}>
                {props.resultImc}
            </Text>
        </View>
    );
}

export default ResultImc;