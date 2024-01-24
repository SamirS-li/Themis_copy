import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("Your name*");
  const [phone, setPhone] = useState("Your phone*");
  const [email, setEmail] = useState("Your email*");
  const [message, setMessage] = useState("Your message*");
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const onlyNumber = /\d$/g;
  const [errors, setErrors] = useState({});
  const validationErrors = {};
  const [send, setSendMessage] = useState(false);
  const [darkBackground, setStyle] = useState("");

  //  Auto type/clear value to input
  const typeInput = (e) => {
    if (e.target.value === "") {
      e.target.value = "Your " + e.target.name + "*";
    }
  };

  const clearInput = (e) => {
    if (e.target.value == "Your " + e.target.name + "*") {
      e.target.value = "";
    }
  };

  //  If form have errors them save with own error message

  const validateForm = () => {
    if (name.length <= 1 || name.includes("Your name*")) {
      validationErrors.name = "Please enter your name.";
    }

    if (phone.length <= 0 || phone.includes("Your phone*")) {
      validationErrors.phone = "Please enter phone.";
    } else if (!phone.match(onlyNumber)) {
      validationErrors.phone = "Please enter valid phone.";
    }

    if (email.length === 0 || email.includes("Your email*")) {
      validationErrors.email = "Please enter e-mail.";
    } else if (!email.match(validRegex)) {
      validationErrors.email = "Please enter valid e-mail.";
    }

    if (message.length === 0 || message.includes("Your message*")) {
      validationErrors.message = "Please enter your message.";
    }

    setErrors(validationErrors);
  };

  // If don't have any error do submit form
  const submitForm = (e) => {
    e.preventDefault();
    setStyle("0 0 0px 1000px #0000005c inset");
    setTimeout(() => {
      setStyle("0 0 0px 1000px #0000000c inset");
      validateForm();

      // Submit
      if (Object.keys(validationErrors).length === 0) {
        const formData = {
          name: name,
          phone: phone,
          email: email,
          message: message,
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(formData),
        })
          .then((data) => {
            if (data.ok) {
              setSendMessage("Thank you for contacting us");
            }
            return data.json();
          })
          .then((post) => {});
      } else {
        //Add visibility class inputs after removing visibility class with hover
        document.querySelectorAll(".errors").forEach((elem) => {
          formAddActive(elem.classList);
        });
      }
    }, 500);
  };

  // Adding visibilty class to send button on hover after form submitting successful
  const sendHover = () => {
    if (send && Object.keys(errors).length == 0) {
      let sendClasslist = document.querySelector(".send").classList;
      formAddActive(sendClasslist);
    }
  };
  // Removing visibilty class to send button on hover after form submitting successful

  const sendLeave = () => {
    if (send) {
      let sendClasslist = document.querySelector(".send").classList;
      formRemoveActive(sendClasslist);
    }
  };

  // Adding visibilty class to input on hover after form have errors

  const inputHover = (e) => {
    if (errors[e.target.name]) {
      let inputClasslist = e.target.parentNode.firstChild.classList;

      formAddActive(inputClasslist);
    }
    if (send) {
      if (e.target.value === "") {
        let inputClasslist = e.target.parentNode.firstChild.classList;
        formAddActive(inputClasslist);
      }
    }
  };

  // Removing visibilty class to input on hover after form have errors

  const inputLeave = (e) => {
    if (errors[e.target.name]) {
      let inputClasslist = e.target.parentNode.firstChild.classList;
      formRemoveActive(inputClasslist);
    }

    if (send) {
      if (
        e.target.value == "Your " + e.target.name + "*" ||
        e.target.value == ""
      ) {
        setErrors(validationErrors);

        let inputClasslist = e.target.parentNode.firstChild.classList;
        formAddActive(inputClasslist);
        setSendMessage(false);
      }
    }
  };

  const formAddActive = (par) => {
    if (!par.contains("formActive")) {
      par.add("formActive");
    }
  };
  const formRemoveActive = (par) => {
    if (par.contains("formActive")) {
      par.remove("formActive");
    }
  };

  return (
    <div>
      <form action="">
        <div className="contact-form-div">
          {errors.name && (
            <div className="errors formActive">
              <span>{errors.name}</span>
            </div>
          )}
          <input
            type="text"
            style={{
              backgroundColor: darkBackground,
              WebkitBoxShadow: darkBackground,
            }}
            value={name}
            onMouseOver={inputHover}
            onMouseLeave={inputLeave}
            onKeyUp={validateForm}
            onChange={(e) => setName(e.target.value)}
            onFocus={clearInput}
            onBlur={typeInput}
            name="name"
          />
        </div>
        <div className="contact-form-div">
          {errors.phone && (
            <label className="errors formActive">
              <span>{errors.phone}</span>
            </label>
          )}
          <input
            type="text"
            style={{
              backgroundColor: darkBackground,
              WebkitBoxShadow: darkBackground,
            }}
            value={phone}
            onMouseOver={inputHover}
            onMouseLeave={inputLeave}
            onKeyUp={validateForm}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={clearInput}
            onBlur={typeInput}
            name="phone"
          />
        </div>
        <div className="contact-form-div">
          {errors.email && (
            <label className="errors formActive">
              <span>{errors.email}</span>
            </label>
          )}
          <input
            type="email"
            style={{
              backgroundColor: darkBackground,
              WebkitBoxShadow: darkBackground,
            }}
            value={email}
            onMouseOver={inputHover}
            onMouseLeave={inputLeave}
            onKeyUp={validateForm}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={clearInput}
            onBlur={typeInput}
            name="email"
          />
        </div>
        <div className="contact-form-div">
          {errors.message && (
            <label className="errors formActive">
              <span>{errors.message}</span>
            </label>
          )}
          <textarea
            style={{
              backgroundColor: darkBackground,
              WebkitBoxShadow: darkBackground,
            }}
            value={message}
            onMouseOver={inputHover}
            onMouseLeave={inputLeave}
            onKeyUp={validateForm}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={clearInput}
            onBlur={typeInput}
            name="message"
            cols="38"
            rows="5"
          ></textarea>
        </div>

        <div className="contact-form-div">
          {send && (
            <label className="send formActive">
              <span>{send}</span>
            </label>
          )}
          <button
            onClick={submitForm}
            onMouseOver={sendHover}
            onMouseLeave={sendLeave}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
