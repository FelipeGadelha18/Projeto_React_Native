import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc/resultImc";
import styles from "./estiloForm";

const Form = () => {
    const [altura, setAltura] = useState(""); // Inicialize com uma string vazia
    const [peso, setPeso] = useState(""); // Inicialize com uma string vazia
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    // Calcular o IMC...
    function imcCalcular() {
       // return setImc((peso / (altura * altura)).toFixed(2));
    }

    //Verificar se os Campos foram Preenchidos 
    function validacaoImc() {
        if (peso !== "" && altura !== "") { // Verifique se os campos não estão vazios
            imcCalcular();
            setAltura("");
            setPeso("");
            setMessageImc("Seu IMC é igual: ");
            setTextButton("Calcular Novamente");
            return;
        } else {
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
    }

    return (
        // Formulário para pegar informações do usuário
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 75.23"
                    keyboardType="numeric"
                />

               <TouchableOpacity
               style={styles.buttonCalcular}
               onPress={() => {
                validacaoImc()
               }}
               >
                <Text style={styles.textButton}>{textButton}</Text>
               </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
};

export default Form;


