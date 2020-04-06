import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.post['Content-Type'] = 'application/json';

export interface IService<T> {
    baseUrl: string;
    create(entity: T): Promise<void>;
    get(id: string): Promise<T>;
    update(entity: T): Promise<void>;
}

export interface IReadOnlyService<T> {
    baseUrl: string;
    get(id: string): Promise<T>;
}

export default abstract class Service<T> implements IService<T> {
    abstract baseUrl: string;

    create = (): Promise<void> => axios.post(`${this.baseUrl}`);

    get = (id: string): Promise<T> => axios.get(`${this.baseUrl}/${id}`);

    update = (entity: T): Promise<void> => axios.put(`${this.baseUrl}`, entity);
}

export abstract class ReadOnlyService<T> implements IReadOnlyService<T> {
    abstract baseUrl: string;

    get = (id: string): Promise<T> => axios.get(`${this.baseUrl}/${id}`);
}