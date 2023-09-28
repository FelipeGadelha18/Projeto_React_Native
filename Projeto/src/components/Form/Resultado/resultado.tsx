import React from "react";
import { View, Text } from "react-native";

// Defina os tipos das props
interface ResultadoProps {
  resultimc: string; // ou o tipo apropriado
  messageResultImc: string; // ou o tipo apropriado
}

const Resultado: React.FC<ResultadoProps> = (props) => {
  return (
    <View>
      <Text>{props.resultimc}</Text>
      <Text>{props.messageResultImc}</Text>
    </View>
  );
};

export default Resultado;
