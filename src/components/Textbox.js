import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import CodeMirror from '@uiw/react-codemirror';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/yonce.css';

import 'codemirror/mode/clojure/clojure.js';

// import 'codemirror/theme/dracula.css';

const Textbox = ({ lang, lang_id }) => {
  const [language, setLanguage] = useState(lang);
  const [code, setCode] = useState('');
  const [token, setToken] = useState(null);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [id, setId] = useState(parseInt(lang_id));
  const onChange1 = e => {
    setCode(e.target.value);
  };

  const onChange2 = e => {
    setInput(e.target.value);
  };

  const getOutput = e => {
    e.preventDefault();

    axios
      .post(`https://api.judge0.com/submissions`, {
        source_code: code,
        language_id: id,
        stdin: input
      })
      .then(f => {
        console.log(f);
        setToken(f.data.token);
        axios
          .get(`https://api.judge0.com/submissions/${token}`)
          .then(g => {
            console.log(g);
            if (g.data.stdout != null) {
              setOutput(g.data.stdout);
            } else {
              setOutput(
                g.data.message +
                  '\n' +
                  g.data.status.description +
                  '\n' +
                  g.data.stderr
              );
            }
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={getOutput} className='form'>
        {/* <textarea
          id='id1'
          rows='4'
          cols='20'
          className='#ffe082 amber lighten-4'
          style={{ height: '500px' }}
          value={code}
          onChange={onChange1}
        /> */}
        <CodeMirror
          value={code}
          style={{ height: '1000px' }}
          options={{
            mode: 'clojure',
            theme: 'yonce',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            setCode(value);
            // console.log({ value });
          }}
        />
        <i>{'Current Language :' + lang}</i>
        <h4 className='#f9a825 yellow-text text-darken-3'>Input</h4>
        <textarea
          rows='4'
          cols='20'
          name='comment'
          form='usrform'
          placeholder='Enter your input here'
          className='#ffe082 amber lighten-4 #3e2723 brown-text text-darken-1'
          style={{ height: '150px' }}
          value={input}
          onChange={onChange2}
        />
        {/* <input
              value={output}
              style={{ overflow: 'scroll', height: '200px' }}
            /> */}
        <h4 className='#f9a825 yellow-text text-darken-3'>Output</h4>
        <textarea
          rows='4'
          cols='20'
          name='comment'
          form='usrform'
          className='#ffe082 amber lighten-4 #3e2723 brown-text text-darken-1'
          style={{ height: '150px', fontWeight: 'bold' }}
          value={output}
        />
        <input
          type='submit'
          value='Run'
          style={{ width: '150px' }}
          className=' btn waves-effect #f9a825 yellow darken-3'
        />
      </form>
    </div>
  );
};
Textbox.propTypes = {
  lang: PropTypes.string.isRequired,
  lang_id: PropTypes.number.isRequired
};
export default Textbox;
