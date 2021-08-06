const BASE_URL = 'http://localhost:8001/languages';

const fetchLanguages = async () => {
  const res = await fetch(BASE_URL);

  const languages = await res.json();
  //   console.log(languages);
  return languages;
};

export { fetchLanguages };
