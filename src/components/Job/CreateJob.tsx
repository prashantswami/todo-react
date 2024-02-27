import { useState } from "react";
import { createJob } from "../../lib/graphql/jobApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../lib/store/store";

export function CreateJob() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (event: any) => {
        try {
            await dispatch(createJob({
                title: title,
                description,
            }));
            
            navigate('/jobs');
            
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <div className="row">
            <h4> Create Job </h4>
            <div className="col-md-12">
                <div className="form-group mt-2">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group mt-2">
                    <label>Description</label>
                    <textarea className="form-control" name="description" onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button className="btn btn-primary mt-2" onClick={handleSubmit} >Submit</button>
            </div>
        </div>
    </>
}