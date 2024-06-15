import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
            const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts.length;
    }
    catch (error) {
        console.log(error);
    }

};

console.log(await countContacts());