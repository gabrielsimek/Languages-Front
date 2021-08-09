const BASE_URL = 'http://localhost:8001/languages';
//https://glacial-refuge-12601.herokuapp.com/languages
const fetchLanguages = async () => {
  const res = await fetch(BASE_URL);
  const languages = await res.json();
  return languages;
};

const fetchLanguage = async (id) => {
  const res = await fetch(`http://localhost:8001/languages/${id}`);
  const language = await res.json();
  return language;
};

const addLanguage = async (body) => {
  
  const res = await fetch('http://localhost:8001/languages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const language = await res.json();

  return language;
};

const editLanguage = async (id, body) => {
  const res = await fetch('http://localhost:8001/languages/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const language = await res.json();
  return language;
};


const deleteLanguage = async (id) => {
  const res = await fetch(`http://localhost:8001/languages/${id}`, {
    method: 'DELETE'
  });
  const language = await res.json();
  return language;
};

export { fetchLanguages, fetchLanguage, addLanguage, editLanguage, deleteLanguage };
