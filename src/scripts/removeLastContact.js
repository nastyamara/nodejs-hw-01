
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const parsedData = JSON.parse(data);
        const indexToRemove = parsedData.length;
        parsedData.splice(indexToRemove-1, 1);
       
        await fs.writeFile(PATH_DB, JSON.stringify(parsedData), 'utf-8');

    }
    catch (error) {
        console.log(error);
}
};

await removeLastContact();