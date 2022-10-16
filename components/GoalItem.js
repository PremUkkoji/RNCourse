import { 
    StyleSheet, 
    View, 
    Text, 
    Pressable
} from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#EFEFEF' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
            <Text style={styles.goalText}>{props.id + ": " + props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 15,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: '#000000',
        padding: 8,
    },
});