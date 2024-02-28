import { useEffect, useRef } from "react";
import { Job } from "../components/Job/Job";
import { useNavigate } from "react-router-dom";
import { RootState } from "../lib/store/store";
import { getJobsAyncThunk, useAppDispatch, useAppSelector } from './../lib/store/storeKit'


export function Jobs() {
    let isLoaded = useRef(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const jobs = useAppSelector((state: RootState) => state.jobs);
    const loading = useAppSelector((state: RootState) => state.loading);

    useEffect(() => {
        if(!isLoaded.current) {
            isLoaded.current = true;
            return;
        }

        dispatch(getJobsAyncThunk());

    }, [dispatch]);


    function handleCreateJob() {
        navigate('/jobs/new');
    }

    if(loading) {
        return <>
            Loading...
        </>
    }

    return <>
        <button className="btn btn-primary" onClick={handleCreateJob}>Create Job</button>
        {jobs.map((job, index) => {
            return <Job job={job} key={job._id}></Job>
        })}
    </>
}