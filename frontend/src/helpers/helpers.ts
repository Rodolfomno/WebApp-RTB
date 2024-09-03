export function apiCall(url: string) {
    return fetch(url)
        .then(response => response.json())
        .then((json) => json)
        .catch(error => console.error(error));
}

export const formatToCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};
