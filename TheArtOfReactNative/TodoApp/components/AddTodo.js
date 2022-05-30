import React,{useState} from 'react';
import {View, StyleSheet, TextInput, 
    TouchableNativeFeedback, TouchableOpacity, Image, Keyboard} from 'react-native';

function AddTodo({onInsert}) {
    const [text, setText] = useState('');

    const onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss();
      };

    const button = (
    <View style={styles.buttonStyle}>
        <Image source={require('../images/add_white.png')} />
    </View>
    );

    return (
        <View style={styles.block}>
            <TextInput placeholder="할일을 입력하세요." 
            style={styles.input}
            value={text}
            onChangeText={setText}
            onSubmitEditing={onPress}
            />
            {Platform.select({
            ios: (
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                {button}
            </TouchableOpacity>
            ),
            android: (
            <View style={styles.circleWrapper}>
                <TouchableNativeFeedback onPress={onPress}>
                    {button}
                </TouchableNativeFeedback>
            </View>
            ),
        })}
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
    input: {
        fontSize: 16,
        paddingVertical: 8,
    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius: 24,
    },
});

export default AddTodo;
