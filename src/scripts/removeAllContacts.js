
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        data = [];
        await fs.writeFile(PATH_DB, JSON.stringify(data), 'utf-8');

    }
    catch (error) {
        console.log(error);
    }
};

await removeAllContacts();