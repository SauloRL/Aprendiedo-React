import { Middleware, configureStore } from "@reduxjs/toolkit";
import userReducer, { rollbackUser } from "./users/slice";
import { toast } from "sonner";
import { UserWithId } from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;
		const previousState = store.getState();

		next(action);
		if (type === "users/deleteUserById") {
			const userIdToRemoce = payload;

			const usertoRemove: UserWithId | undefined = previousState.users.find(
				(user: UserWithId) => user.id === userIdToRemoce,
			);

			fetch(
				`https://jsonplaceholder.typicode.asasadasd/users/${userIdToRemoce}`,
				{
					method: "DELETE",
				},
			)
				.then((res) => {
					if (res.ok) {
						toast.success(`Usuario ${userIdToRemoce} eliminado correctamente`);
					}

					throw new Error("Error al eliminar el usuario");
				})
				.catch((err) => {
					toast.error(`Error deleting user ${userIdToRemoce}`);
					if (usertoRemove)
						store.dispatch(rollbackUser(usertoRemove as UserWithId));
					console.log(err);
					console.log("error");
				});
		}
	};

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
