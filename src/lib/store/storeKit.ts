import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IJob } from '../../components/Job/IJob';
import { getJobsAsync } from '../graphql/jobApi';

const initialState = {
    loading: false,
    jobs: [] as IJob[],
    todoList: []
}

export const getJobsAyncThunk = createAsyncThunk('getJobs', async () => {
    try{
        return await getJobsAsync();
    }catch(error) {
        console.error(error);
    }
})

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        createJob: (state: any, action: any) => {
            state.jobs.push(action.payload);
        },

        updateJob: (state: any, action: any) => {
            state.jobs.map((job:any) => {
                if(job._id === action.payload._id) {
                    return action.payload.job;
                }
                return job;
            })
        },

        deleteJob: (state: any, action: any) => {
            const filteredJobs = state.jobs.filter((job:any) => job._id === action.payload._id);

            state.jobs = filteredJobs;
        },
    },
    extraReducers(builder) {
        builder.addCase(getJobsAyncThunk.pending, (state, action) => {
            state.loading = true;
        }).addCase(getJobsAyncThunk.fulfilled, (state, action: any) => {
            state.loading = false;
            state.jobs = action?.payload.jobs || [];
        })
        .addCase(getJobsAyncThunk.rejected, (state) => {
            state.loading = false;
        }) 
    },
});

export const storeKit = configureStore({
    reducer: jobSlice.reducer
});

export const {createJob, updateJob, deleteJob} = jobSlice.actions;

export type RootState = ReturnType<typeof storeKit.getState>;

export type AppDispatch = typeof storeKit.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

