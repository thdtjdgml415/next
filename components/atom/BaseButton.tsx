const BaseButton = (props) => {
  const { children, className, type, onClick, value } = props;
  return (
    <button className={className} type={type} onClick={onClick} value={value}>
      {children}
    </button>
  );
};

export default BaseButton;
