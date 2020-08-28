import React from 'react';
import './Form.css';

function Form(props) {

  const [value1, setValue1] = React.useState('10');
  const [value2, setValue2] = React.useState('12');

  function handleChange1 (e) {
    setValue1(e.target.value);
  }

  function handleChange2 (e) {
    setValue2(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    props.onSubmit(value1, value2);
  }

  return (
      <div className="container">
        <h2 className="title">Select starships</h2>
        <form onSubmit={handleSubmit} className="form">
            <select onChange={handleChange1} value={value1} className="form__input">
                <option value="10" >Millennium Falcon</option>
                <option value="12">X-wing</option>
                <option value="22">Imperial shuttle</option>
            </select>
            <select onChange={handleChange2} value={value2} className="form__input">
                <option value="10" >Millennium Falcon</option>
                <option value="12">X-wing</option>
                <option value="22">Imperial shuttle</option>
            </select>
            <input className="form__btn" type="submit" value="Compare"></input>
        </form>
    </div>
  );
}

export default Form;