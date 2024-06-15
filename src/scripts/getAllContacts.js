import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const allContacts = JSON.parse(data);
        return allContacts;
    }
    catch (error) {
        console.log(error);
    }

};

console.log(await getAllContacts());