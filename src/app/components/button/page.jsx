export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-purple-600 
        hover:bg-purple-700 
        focus:outline-none 
        focus:ring-4 
        focus:ring-purple-300 
        text-white 
        font-semibold 
        py-3 
        px-6 
        rounded-lg 
        shadow-md 
        transition 
        duration-300 
        ease-in-out
        active:bg-purple-800
      "
    >
      {children}
    </button>
  );
}
