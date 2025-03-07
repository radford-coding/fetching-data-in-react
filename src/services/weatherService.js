const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const data = await fetch(BASE_URL + queryString).then((res) => res.json());
        return data;
    } catch (err) {
        console.log(err);
    }
};

export { show }