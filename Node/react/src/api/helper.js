const axios = require('axios');

const serverAddress = '/api/calendarapi';

export function getInitialData() {
    return (
        axios.get(`${serverAddress}`, { timeout: 10000 })
            .then(response => {
                return response.data.tasksList
            })
            .catch(() => {
                console.log('error getting info from calendarapi');
                return null;
            })
    );
}