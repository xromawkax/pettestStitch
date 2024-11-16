import axios from 'axios';

export class PetSmartController {

    baseUrl: string = 'https://petstore.swagger.io/v2'

    async addNewPetInStore(pet: CreatePetInStore) {
        const res = await axios.post(`${this.baseUrl}/pet`, pet, {headers: {'Content-Type': 'application/json', 'accept': 'application/json'}});
        return res.data;
    }

}

export type CreatePetInStore = {
    id?: number,
    category?: {
        id: number,
        name: string
    },
    name: string,
    photoUrls?: string[],
    tags?: [{
        id: number,
        name: string
    }],
    status?: 'available' | 'pending' | 'sold'
}
