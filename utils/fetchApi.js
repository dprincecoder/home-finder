import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key":
				process.env.NEXT_PUBLIC_RAPID_API_KEY ||
				"e9e14fec3emsh7fb95c9806765d8p15a18ajsn8776b6801316",
		},
	});

	return data;
};
