import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";
const Category = ({ name = "categories" }) => {
  const { control } = useFormContext();
  const [inputValue, setInputValue] = useState("");
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <input
          {...field}
          type="text"
          placeholder="Categories (comma separated, e.g: papon,rayhan)"
          className="w-full bg-black/20 border border-white/5 p-3 rounded-xl focus:outline-none focus:border-blue-500 text-sm text-white"
          // ইনপুটে দেখানোর জন্য অ্যারে থেকে স্ট্রিং করা হচ্ছে
          value={inputValue}
          onChange={(e) => {
            const val = e.target.value;
            setInputValue(val); // স্ক্রিনে কমা সহ লেখা দেখানোর জন্য
            // ১. কমা দিয়ে ভাগ করে ২. ট্রিম করে ৩. খালি ভ্যালু ফিল্টার করে এররে বানানো
            const arrayData = val
              .split(",")
              .map((item) => item.trim())
              .filter((item) => item !== "");

            // রিয়েক্ট ফর্ম হুককে আপডেট করা হচ্ছে এররে হিসেবে
            onChange(arrayData);
          }}
          onKeyDown={(e) => {
            // এন্টার চাপলে কমা যোগ করে দেবে যেন নতুন ক্যাটাগরি শুরু করা যায়
            if (e.key === "Enter") {
              e.preventDefault(); // ফরম সাবমিট হওয়া রোধ করবে
              if (inputValue.trim() !== "" && !inputValue.endsWith(",")) {
                const newVal = inputValue + ", ";
                setInputValue(newVal);
              }
            }
          }}
        />
      )}
    />
  );
};

export default Category;
