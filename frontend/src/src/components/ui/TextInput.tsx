export const TextInput = ({
  placeholder,
  obj,
}: {
  placeholder: string;
  obj?: Object;
}) => {
  return (
    <input
      type="text"
      className="block w-full p-4 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      {...obj}
    />
  );
};
