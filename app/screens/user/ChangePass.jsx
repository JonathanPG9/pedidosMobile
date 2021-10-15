import React from 'react';
import { View,SafeAreaView ,Text, TouchableWithoutFeedback, Image,ScrollView, KeyboardAvoidingView,Platform} from "react-native";
import { Input, Button } from 'react-native-elements';
const ChangePass = () => {
  return ( 
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView>
          <Input>
          </Input>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
    );
}

export default ChangePass;