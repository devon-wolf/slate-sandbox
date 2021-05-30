import fetch from 'node-fetch';

export const getDocument = async (token, id) => {
	const response = await fetch(`${process.env.API_URL}/api/documents/${id}`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	});

	return response.json();
}

// body is of shape { title, body_text }
// this works when I manually plug in the URL and token, but currently the dotenv configuration does not seem to be wired up right
export const postDocument = async (token, body) => {
	const response = await fetch(`${process.env.API_URL}/api/documents`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
	 	}
	});

	return response.json();
}

export const editDocument = async (token, id, body) => {
	const response = await fetch(`${process.env.API_URL}/api/documents/${id}`, {
		method: 'PUT',
		body,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	});

	return response.json();
}

export const deleteDocument = async (token, id) => {
	const response = await fetch(`${process.env.API_URL}/api/documents/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	});

	return response.json();
}