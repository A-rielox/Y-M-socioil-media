const InputSimple = ({ type, name, value, changeStateValues, labelText }) => {
   return (
      <div className="form-row">
         <label htmlFor={name} className="form-label">
            {labelText || name}
         </label>

         <input
            type={type}
            className="form-input"
            name={name}
            value={value}
            onChange={changeStateValues}
         />
      </div>
   );
};

export default InputSimple;
