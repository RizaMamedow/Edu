import React from "react";

const Form = props => {
  return(
    <form onSubmit={props.weatherFunc} className="col-sm-12">
      <section className="titleForm col-sm-12">
        <h4>Погодное Приложение</h4>
      </section>
      <input type="text" name="city" placeholder="Город" />
      <button>Получить Погоду</button>
    </form>
  )
}
export default Form;
