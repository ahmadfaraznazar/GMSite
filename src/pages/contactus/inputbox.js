import  IconError from "../../assets/images/IconBuilding.svg";

const Inputbox = ({ type, placeholder, name, value, onValueChange, error, isDisabled }) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onValueChange}
          disabled={isDisabled}
          className={`w-full rounded border px-[14px] py-3 text-base text-body-color outline-none focus:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 ${error ? 'border-red-500' : 'border-stroke'}`}
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

export default Inputbox;
