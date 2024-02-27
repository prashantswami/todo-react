export interface IJob {
    _id?: string;
    title: string;
    description?: string;
    createdAt?: string;
    company?: {
        companyName: string;
    }
}