import React from 'react';
import logo from '../../logo.svg';

export interface ILoginProps {
  handleLogin: () => void;
}

export interface ILoginState {
  username: string;
  password: string;
}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  public render() {
    const { username, password } = this.state;
    const { handleLogin } = this.props;
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#E5E5E5]">
        <img src={logo} className="p-10" alt="logo" />
        <div className="mt-10 flex w-5/6 flex-col rounded-lg bg-white p-16 md:mt-0 lg:w-1/3">
          <h1 className="mb-5 text-center text-3xl text-gray-900">Contilio</h1>
          <p className="mb-5 text-center text-[#171d66]">Log In to your account</p>
          <div className="relative mb-4">
            <label htmlFor="username" className="text-sm leading-7 text-black">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='enter your username'
              onChange={(e) => this.setState({ username: e.target.value })}
              value={this.state.username}
              className="w-full rounded border border-[#F1F1F1] bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none focus:border-[#009dd9] focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="text-sm leading-7 text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='enter your password'
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              value={this.state.password}
              className="w-full rounded border border-[#F1F1F1] bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none focus:border-[#009dd9] focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <button
            onClick={() => handleLogin()}
            disabled={!username || !password}
            className="mt-6 rounded border-0 bg-[#009dd9] py-2 px-8 text-lg text-white focus:outline-none disabled:opacity-50"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
