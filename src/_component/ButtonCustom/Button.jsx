const CustomButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary px-8 text-white py-2 rounded-full cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
