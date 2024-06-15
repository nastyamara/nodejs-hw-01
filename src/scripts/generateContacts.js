import { createFakeContact } from '../utils/createFakeContact.js'; 
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    try {
let existingContacts = await fs.readFile(PATH_DB, 'utf-8');
const parsedExistingContacts = JSON.parse(existingContacts);
      
        const newContacts = [];
        for (let i = 0; i < number; i += 1)
        { newContacts.push(createFakeContact()); }
        let updatedContacts = parsedExistingContacts.concat(newContacts);
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf-8');
    }
    catch (error) {
        console.log(error);
    }
};
await generateContacts(5);
