const URL = process.env.BASE_URL;
import request from 'superagent';
const signUp = async (user) => {
  const res = await request.
    post(`${URL}/signup`)
    .send(user)
    .withCredentials();

  console.log(res);
  return res.body;
};

export { signUp };
