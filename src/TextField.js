const TextField = ({ name, onChange, onBlur, error, label }) => (
  <form>
    <label>
      {label}
      <input type="text" name={name} onChange={onChange} onBlur={onBlur} />
      {error && <div className="error">{error}</div>}
    </label>
  </form>
);

export default TextField;
