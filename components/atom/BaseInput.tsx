export const BaseInput = (props) => {
  const { type, name, placeholder, className, value } = props;
  console.log("[BaseInput]", className);
  return (
    <input
      className={`${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
};

export default BaseInput;
