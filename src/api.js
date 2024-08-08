import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7107'
});

export const fetchChallenges = async () => {
    try {
        const response = await api.get('/games');
        return response.data;
    } catch (error) {
        console.error('Error fetching challenges', error);
        throw error;
    }
};
