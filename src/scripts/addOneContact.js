import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'; 
import fs from 'node:fs/promises';

export const addOneContact = async () => {
    try {
        const existingContacts = await fs.readFile(PATH_DB, 'utf-8');
        const parsedExistingContacts = JSON.parse(existingContacts);

        const updatedContacts = parsedExistingContacts.concat(createFakeContact());

        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf-8');
    }
    
    catch (error) {
        console.log(error);
    }

};

await addOneContact();