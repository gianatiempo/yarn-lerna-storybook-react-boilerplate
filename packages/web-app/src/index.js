import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExternalComponent from '@ariel-demo/external-component';
import ExternalComponent2 from '@ariel-demo/arielito-test';

const App = () => (
<>
<ExternalComponent text="ando!"/>
<ExternalComponent2 text="lalala" />
</>);

ReactDOM.render(<App />, document.getElementById('root'));
