import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store';

// Define a type for the slice state
interface WindowState {
	Window: string;
}

// Define the initial state using that type
const initialState: WindowState = {
	Window: 'AccountSection',
};

export const WindowStateSlice = createSlice({
	name: 'WindowState',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		SetWindow: (state, action: PayloadAction<string>) => {
			state.Window = action.payload;
		},
	},
});

export const { SetWindow } = WindowStateSlice.actions;

export const SettingsWindowState = (state: RootState) =>
	state.SettingsWindowState;

export default WindowStateSlice.reducer;
