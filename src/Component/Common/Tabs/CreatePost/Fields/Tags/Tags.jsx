import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

const Tags = ({ name = "tags" }) => {
  const { control } = useFormContext();
  // ইনপুটে টাইপ করা ভ্যালু স্ক্রিনে দেখানোর জন্য লোকাল স্টেট
  const [inputValue, setInputValue] = useState("");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <input
          type="text"
          value={inputValue}
          placeholder="Tags (papon, rayhan... or press enter)"
          className="w-full bg-black/20 border border-white/5 p-3 rounded-xl focus:outline-none focus:border-blue-500 text-sm text-white"
          // টাইপ করার সময় কমা সহ দেখাবে এবং ব্যাকএন্ডে অ্যারে আপডেট করবে
          onChange={(e) => {
            const val = e.target.value;
            setInputValue(val);

            const arrayData = val
              .split(",")
              .map((item) => item.trim())
              .filter((item) => item !== "");

            onChange(arrayData);
          }}
          // এন্টার চাপলে যেন সাবমিট না হয়ে যায় এবং কমা হিসেবে কাজ করে
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // ফরম সাবমিট হওয়া আটকাবে
              // এন্টার চাপলে কমা যোগ করে দিবে যেন onChange ট্রিগার হয়
              const val = e.target.value + ",";
              setInputValue(val);
            }
          }}
        />
      )}
    />
  );
};

export default Tags;
