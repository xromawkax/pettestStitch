import {describe, expect, test} from '@jest/globals';
import {CreatePetInStore, PetSmartController} from "./controllers/PetSmartController";

describe('Тесты для добавления животных в магазин', () => {
    test('Добавляем собаку только собязательным параметрами', async () => {

        const res: CreatePetInStore  = await new PetSmartController().addNewPetInStore({name: 'Стич'});
        expect(res.name).toBe('Стич')
    });
});


