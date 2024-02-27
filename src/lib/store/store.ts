import { applyMiddleware, createStore } from "redux";
import { IJob } from "../../components/Job/IJob";
import {composeWithDevTools} from 'redux-devtools-extension';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {thunk} from 'redux-thunk';

const initialState = {
    loading: false,
    jobs: [] as IJob[],
    todoList: []
}

export enum JobActionTypes {
    CREATE_JOB_REQUEST = "CREATE_JOB_REQUEST",
    CREATE_JOB_SUCCESS = "CREATE_JOB_SUCCESS",
    CREATE_JOB_FAILURE = "CREATE_JOB_FAILURE",
    GET_JOBS_REQUEST= "GET_JOBS_REQUEST",
    GET_JOBS_SUCCESS= "GET_JOBS_SUCCESS",
    GET_JOBS_FAILURE= "GET_JOBS_FAILURE",
    GET_JOB_BY_ID= "GET_JOB_BY_ID",
    UPDATE_JOB= "UPDATE_JOB",
    DELETE_JOB= "DELETE_JOB",
}

const reducer = function(state= initialState, action: any) {
    switch (action.type) {
        case JobActionTypes.CREATE_JOB_REQUEST:
            return {
                ...state,
                loading: true
            }
        case JobActionTypes.CREATE_JOB_SUCCESS:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            }
        case JobActionTypes.CREATE_JOB_FAILURE:
            return {
                ...state,
                loading: false
            }
        case JobActionTypes.GET_JOBS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case JobActionTypes.GET_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                loading: false
            }
        case JobActionTypes.GET_JOBS_FAILURE:
            return {
                ...state, 
                loading: false
            }
        case JobActionTypes.UPDATE_JOB:
            const job = state.jobs.find(job => job._id === action.payload?._id);
            if(job) {
                const jobs = state.jobs.map(job => job._id === action.payload?._id ? action.payload.job : job);
                return {
                    ...state, 
                    jobs
                }
            }
            return state;

        case JobActionTypes.DELETE_JOB:
            const jobs = state.jobs.filter(job=> job._id!==action.payload._id);
            return {
                ...state,
                jobs
            }
        default:
            return state;
    }
};


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;