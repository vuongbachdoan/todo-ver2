import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice(
    {
        name: 'appData',
        initialState: {
            sidebarCollapse: false,
            currentRoute: 'today',
            addingWorkspaceHide: false,
            tasks: [],
            userData: {},
            workspaces: []
        },
        reducers: {
            changeCurrentRoute: (state, action) => {
                state.currentRoute = action.payload;
            },
            toogleSidebar: (state) => {
                state.sidebarCollapse = !state.sidebarCollapse;
            },
            setTasks: (state, action) => {
                state.tasks = [...state.tasks, action.payload];
            },
            toogleAddingWorkspace: (state, action) => {
                state.addingWorkspaceHide = action.payload;
            },
            setUserData: (state, action) => {
                state.userData = action.payload;
            },
            addWorkspace: (state, action) => {
                state.workspaces = [...state.workspaces, action.payload];
            }
        }
    },
)

export const { changeCurrentRoute, toogleSidebar, setTasks, toogleAddingWorkspace, addWorkspace, setUserData } = appSlice.actions;
export default appSlice.reducer;