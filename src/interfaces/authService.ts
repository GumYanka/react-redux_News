const users = [
  { id: 1, username: 'admin', password: '12345' },
];

export const login = (username: string, password: string) => {
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  return user;
};