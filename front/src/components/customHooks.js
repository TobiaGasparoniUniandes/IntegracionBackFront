import { useState } from "react";

const useOfferForm = () => {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();

      console.log("Enter rejoice and come in", inputs);

      fetch("/offers", {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

      console.log("Form submitted!", inputs);
    };

    const handleInputChange = (event) => {
      setInputs({...inputs, [event.target.name]: event.target.value});
    }
  
    return {
      handleSubmit,
      handleInputChange,
    };
  };
  
  export default useOfferForm;