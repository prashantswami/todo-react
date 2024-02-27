import { gql } from "graphql-request";
import { apiClient } from "./api";
import { IJob } from "../../components/Job/IJob";
import { JobActionTypes } from "../store/store";


export function getJobs() {
    return async function (dispatch: any) {
        dispatch({ type: JobActionTypes.GET_JOBS_REQUEST });
        try {
            const response = await apiClient.request<{ jobs: IJob[] }>(gql`
                    query {
                        jobs {
                            _id
                            title
                            description
                            company {
                                companyName
                            }
                        }
                    }
                `);
            console.log({ response })
            dispatch({ type: JobActionTypes.GET_JOBS_SUCCESS, payload: response.jobs })
        } catch (error) {
            dispatch({ type: JobActionTypes.GET_JOBS_FAILURE });
        }
    };
}

export function createJob(job: IJob) {
    return async function (dispatch: any) {
        dispatch({ type: JobActionTypes.CREATE_JOB_REQUEST });
        const mutation = gql`
            mutation createJob($input: CreateJobInput!) {
                createJob(input: $input) {
                    title
                    description
                    createdAt
                    company {
                        companyName
                    }
                }
            }
        `;
        try {
            const response = await apiClient.request(mutation, {
                input: {
                    title: job.title,
                    description: job.description,
                    companyId: '65ddc226d65687842773bd58'
                }
            });

            dispatch({type: JobActionTypes.CREATE_JOB_SUCCESS, payload: response})
        } catch (error) {
            dispatch({type: JobActionTypes.CREATE_JOB_FAILURE});
        }
    }
}