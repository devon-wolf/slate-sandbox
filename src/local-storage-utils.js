export const setLocalDocument = (value) => {
	localStorage.setItem('document', JSON.stringify(value));
}

export const getLocalDocument = () => {
	return JSON.parse(localStorage.getItem('document'));
}