import { NextPage } from 'next';
import { ChangeEvent, FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage: NextPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn('credentials', {
      redirect: false,
      ...form,
    });

    console.log(response);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="mb-10 text-center text-3xl font-bold text-white">
        Todo App
      </h1>
      <form
        className="mx-auto flex max-w-md flex-col space-y-3 rounded-md bg-indigo-200 py-8 px-4"
        onSubmit={handleOnSubmit}
      >
        <input
          className="rounded-md py-1 px-3 text-xl"
          type="text"
          placeholder="john.doe@example.com"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <input
          className="rounded-md py-1 px-3 text-xl"
          type="password"
          name="password"
          value={form.password}
          placeholder="*********"
          onChange={handleInputChange}
        />
        <button
          className="rounded-md bg-indigo-700 py-2 px-3 text-xl font-bold uppercase tracking-wide text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
