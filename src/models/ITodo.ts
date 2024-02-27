export default interface ITodo {
    id: number;
    title: string | undefined;
    description?: string;
    isCompleted: boolean;
}