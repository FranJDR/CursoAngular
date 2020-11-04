import { Address } from './address';

export class Participant {

    id?: string;
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    age?: number;
    center?: string;
    urlImg?: string;

    address?: Address;

    idsFavAlbum?: string[];
    idsFavArtist?: string[];
    idsFavSong?: string[];

}
