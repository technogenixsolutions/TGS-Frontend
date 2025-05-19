const CustomButton = ({
  children,
  onClick,
  type = "button",
  className = "", // ✅ ঠিক এইভাবে লিখতে হবে  
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-[13px] sm:text-base  px-8 text-white py-2 rounded-full cursor-pointer` }
    >
      {children}
    </button>
  );
};

export default CustomButton;
