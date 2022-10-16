import { useState } from 'react'
import { 
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image
} from 'react-native'

function GoalInput(props) {
    const [goalText, setGoalText] = useState('');

    function goalInputHandler(inputText) {
        setGoalText(inputText);
    }

    function addGoalHandler() {
        props.onAddGoal(goalText);
        setGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={{flex: 1, backgroundColor: '#000000'}}>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/goal.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Goal !"
                        onChangeText={goalInputHandler}
                        value={goalText}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Add Goal"
                                onPress={addGoalHandler}
                                color="#FFFFFF"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Cancel"
                                onPress={props.onCancel}
                                color="#FFFFFF"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#000000'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
})