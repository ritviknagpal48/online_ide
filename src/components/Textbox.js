import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';

const Textbox = () => {
  const [language, setLanguage] = useState('C++');
  const [code, setCode] = useState('//Enter your C++ code here');
  const [token, setToken] = useState(null);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const onChange1 = e => {
    setCode(e.target.value);
  };

  const onChange2 = e => {
    setInput(e.target.value);
  };

  const getOutput = e => {
    e.preventDefault();

    // console.log('Hello, Ritvik this side');
    axios
      .post(`https://api.judge0.com/submissions`, {
        source_code: code,
        language_id: 12,
        stdin: input
      })
      .then(f => {
        // console.log(f.data.token);
        setToken(f.data.token);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(`https://api.judge0.com/submissions/${token}`)
      .then(g => {
        setOutput(g.data.stdout);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={getOutput} className='form'>
        <textarea
          rows='4'
          id='codemirror_input'
          cols='20'
          className='#e0f2f1 teal lighten-5'
          style={{ height: '500px' }}
          value={code}
          onChange={onChange1}
        />
        <CodeMirror
          name='comment'
          value={code}
          options={{
            theme: 'dracula',
            keyMap: 'sublime',
            mode: 'clojure',
            lineNumbers: true,
            rtlMoveVisually: true,
            readOnly: true
          }}
        />

        <textarea
          rows='4'
          cols='20'
          name='comment'
          form='usrform'
          placeholder='Enter your input here'
          className='#e0f2f1 teal lighten-5'
          style={{ height: '100px' }}
          value={input}
          onChange={onChange2}
        />

        {/* <input
              value={output}
              style={{ overflow: 'scroll', height: '200px' }}
            /> */}
        <textarea
          rows='4'
          cols='20'
          name='comment'
          form='usrform'
          className='#e0f2f1 teal lighten-5'
          style={{ height: '100px' }}
          value={output}
        />

        <input
          type='submit'
          value='Run'
          className='btn waves-effect waves-light'
        />
      </form>
    </div>
  );
};

export default Textbox;
