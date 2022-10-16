import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

const App = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [goalList, setGoalList] = useState([]);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}
	
	function endAddGoalHandler() {
		setModalIsVisible(false);
	}
	
	function addGoalHandler(goalText) {
		setGoalList((currentGoalList) => [
			...currentGoalList,
			{ text: goalText, id: Number(new Date()).toString() },
		]);
		endAddGoalHandler();
	}
	
	function deleteGoalHandler(id) {
		setGoalList((currentGoalList) => {
		  	return currentGoalList.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<View style={styles.buttonContainer}>
					<Button
						title="Add New Goal"
						color="#000000"
						onPress={startAddGoalHandler}
					/>
				</View>
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goalList}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item, index) => {
							return item.id;
						}}
						alwaysBounceVertical={false}
					/>
				</View>
      		</View>
		</>
	);
}

export default App;

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 80,
		paddingHorizontal: 16,
		backgroundColor: "#000000"
	},
	goalsContainer: {
		flex: 5,
		marginTop: 20
	},
	buttonContainer: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		borderRadius: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
