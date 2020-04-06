import axios from 'axios';
import ReadOnlyService from './Service';
import { Profile } from '../models';

export default class ProfileService extends ReadOnlyService<Profile> {
    baseUrl: string = '';

    get = (): Promise<Profile> => axios.get('');
}
