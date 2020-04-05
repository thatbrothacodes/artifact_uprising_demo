import axios from 'axios';

export interface IService<T> {
    create(entity: T): Promise<void>;
    get(id: string): Promise<T>;
    update(entity: T): Promise<void>;
}


export default abstract class Service<T> implements IService<T> {
    abstract baseUrl: string;

    create = (): Promise<void> => {
        return axios.put(`${this.baseUrl}`);
    }

    get = async (id: string): Promise<T> => {
        return axios.get(`${this.baseUrl}/${id}`);
    }

    update = (): Promise<void> => {
        return axios.put(`${this.baseUrl}`);
    }
}
