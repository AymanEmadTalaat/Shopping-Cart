export default async function userLogin(username, password) {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "post",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status,
    };
  }

  return data;
}

export async function userSignup(
  email,
  username,
  password,
  firstname,
  lastname
) {
  const response = await fetch("https://fakestoreapi.com/users", {
    method: "post",
    body: JSON.stringify({
      email,
      username,
      password,
      name: {
        firstname,
        lastname,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status,
    };
  }

  return data;
}
