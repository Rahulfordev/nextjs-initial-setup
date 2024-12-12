const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
  error = "",
  rows,
  ...props
}) => {
  const baseStyles =
    "w-full px-3 py-2 border rounded-lg focus:outline-none";

  const isTextarea = type === "textarea";

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 4} // Default rows for textarea
          className={`${baseStyles} ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
          {...props}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseStyles} ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
          {...props}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
