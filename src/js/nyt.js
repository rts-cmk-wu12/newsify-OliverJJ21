const API_KEY = 'D8ZjPin6XGFy4rHAEpFEA4ftn16KGFyl';

const BASE_URL = 'https://api.nytimes.com/svc/';

const endpoints = {
    mostPopularByViews: 'mostpopular/v2/viewed/'
}

export async function fetchMostPopularByViews(days = 1){
    const url = new URL(BASE_URL + endpoints.mostPopularByViews + `${days}.json`);

    url.searchParams.set('api-key', API_KEY);

    const reponse = await fetch(url);
    const data = await reponse.json();

    return data;
}


// module.exports = { fetchMostPopularByViews};