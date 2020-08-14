import React, { useState } from 'react';

const Example = (props) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const _submit = () => {
    console.log(email, pw);
    setEmail('');
    setPw('');
  };
  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='아이디'
      />
      <br />
      <input
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder='비밀번호'
        type='password'
      />
      <br />
      <button onClick={() => _submit()}>로그인</button>
    </div>
  );
};

export default Example;
