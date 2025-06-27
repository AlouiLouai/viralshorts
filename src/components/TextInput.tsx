'use client';

interface TextInputProps {
  placeholder: string;
  // Using defaultValue for uncontrolled component as per original implementation
  // To make it controlled, use `value` and `onChange`
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, defaultValue, onChange, name }) => {
  return (
    <label className="flex flex-col min-w-40 flex-1">
      <input
        type="text" // Explicitly setting type
        name={name}
        placeholder={placeholder}
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </label>
  );
};

export default TextInput;
