import IconError from "../../assets/images/pexels-photo-1857732.jpeg";

const Textareabox = ({ row, placeholder, name, value, onValueChange, error, isDisabled }) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onValueChange}
          disabled={isDisabled}
          className={`w-full resize-none rounded border px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 ${error ? 'border-red-500' : 'border-stroke'}`}
        />
        {error && (
          <span className="absolute top-1/2 right-4 -translate-y-1/2">
            <IconError />
          </span>
        )}
      </div>
      {error && <p className="mt-[10px] text-sm text-red">{error}</p>}
    </div>
  );
};

export default Textareabox;
