const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-500 text-white font-bold text-center p-3 px-10   mx-auto uppercase mb-3 rounded">
      <p> {mensaje} </p>
    </div>
  );
};

export default Error;
