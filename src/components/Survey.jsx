import { useState } from "react";

function Survey() {
  //const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value, type, checked} = event.target;

    if (type === "checkbox"){
      
      setFormData((prevFormData) => {
        let newArray;

        if (checked) {
          newArray = [...prevFormData[name], value];
        } else {
          newArray = prevFormData[name].filter((item) => item !== value);
        }

        return {
          ...prevFormData,
          [name]: newArray,
        };
      });

    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    console.log(formData);
  };

  return (
    <main className="survey">

      {/*<section className={`survey__list ${open ? "open" : ""}`}>*/}
      <section className="survey__list">
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                  checked={formData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange}
                  checked={formData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange}
                  checked={formData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange}
                  checked={formData.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                  ><input
                    name="spendTime"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                  />Swimming</label
                >
              </li>
              <li>
                <label
                  ><input
                    name="spendTime"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                  />Bathing</label
                >
              </li>
              <li>
                <label
                  ><input
                    name="spendTime"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                  />Chatting</label
                >
              </li>
              <li>
                <label
                  ><input
                    name="spendTime"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                  />I don{'\''}t like to spend time with it</label
                >
              </li>
            </ul>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </label>
          
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}/>
          </label>
          
          <input className="form__submit" type="submit" value="Submit Survey!" />

        </form>
      </section>
    </main>
  );
}

export default Survey;
