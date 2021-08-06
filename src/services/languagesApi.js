const BASE_URL = 'http://localhost:8001/languages';

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
export { fetchLanguages, fetchLanguage };
