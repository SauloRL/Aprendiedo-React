import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Peter Doe",
		email: "Ejemplo1@gamil.com",
		github: "pepegit.com",
	},
	{
		id: "2",
		name: "John Doe",
		email: "leo@gamil.com",
		github: "leo",
	},
	{
		id: "3",
		name: "Jane Smith",
		email: "jane@gmail.com",
		github: "janesmith",
	},
	{
		id: "4",
		name: "Alice Johnson",
		email: "alice@gmail.com",
		github: "alicejohnson",
	},
	{
		id: "5",
		name: "Bob Brown",
		email: "bob@gmail.com",
		github: "bobbrown",
	},
	{
		id: "6",
		name: "Eva Davis",
		email: "eva@gmail.com",
		github: "evadavis",
	},
	{
		id: "7",
		name: "Michael Wilson",
		email: "michael@gmail.com",
		github: "michaelwilson",
	},
	{
		id: "8",
		name: "Sarah Lee",
		email: "sarah@gmail.com",
		github: "sarahlee",
	},
	{
		id: "9",
		name: "Chris Martin",
		email: "chris@gmail.com",
		github: "chrismartin",
	},
	{
		id: "10",
		name: "Saulo Lopez",
		email: "sauloRLM@gmail.com",
		github: "SauloRL",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

// let initialState: UserWithId[] = DEFAULT_STATE;
// const persistedState = localStorage.getItem("__redux__state__");
//   if (persistedState){
//     initialState =  JSON.parse(persistedState).users;
//   }

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user: UserWithId) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
				//return [...state, action.payload];
			}
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
