import { IJob } from "./IJob"

interface props {
    job: IJob
}
export function Job({job}: props) {
    return <>
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{job.title} | {job.company?.companyName}</h5>
                <p>{job.description}</p>
            </div>
        </div>
    </>
}