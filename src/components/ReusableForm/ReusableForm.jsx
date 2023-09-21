const ReusableForm = ({ formTitle, submitButtontext = "Submit" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>{formTitle}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitButtontext} />
      </form>
    </div>
  );
};

export default ReusableForm;
