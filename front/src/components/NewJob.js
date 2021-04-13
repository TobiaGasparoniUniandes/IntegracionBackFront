import useOfferForm from "./customHooks";

function NewOffer() {
    const { handleSubmit, handleInputChange } = useOfferForm();
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  
  export default NewOffer;