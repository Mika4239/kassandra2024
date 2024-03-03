import React, { useEffect, useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { json2csv } from 'json-2-csv';

const AddMatchToSheets: React.FC = () => {
    const [csvData, setCsvData] = useState<string>('');
    const [matchInfo, setMatchInfo] = useState<string>('')

    useEffect(() => {
        const jsonData = JSON.parse(matchInfo);
        setCsvData(json2csv(jsonData))
    }, [matchInfo])

    const serviceAccountAuth = new JWT({
        email: import.meta.env.VITE_CLIENT_EMAIL,
        key: import.meta.env.VITE_PRIVATE_KEY,
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
        ],
    });

    const addRowToGoogleSheets = async () => {
        console.log("tries to reach google sheets");
        try {
            const doc = new GoogleSpreadsheet(import.meta.env.VITE_SPREADSHEETS_ID, serviceAccountAuth);
            await doc.loadInfo(); // loads document properties and worksheets
            const sheet = doc.sheetsByIndex[0]; // assuming you want to add to the first sheet
            const dataArray = csvData.split(','); // Assuming CSV data is comma-separated
            await sheet.addRow(dataArray); // Adds a row with the data from CSV
            console.log('Row added successfully');
        } catch (error) {
            console.error('Error adding row to Google Sheets:', error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMatchInfo(event.target.value);
    };

    return (
        <div>
            <textarea
                rows={5}
                cols={50}
                value={matchInfo}
                onChange={handleChange}
                placeholder="Enter matchInfo here"
            />
            <button onClick={addRowToGoogleSheets}>Add Row to Google Sheets</button>
        </div>
    );
};

export default AddMatchToSheets;
