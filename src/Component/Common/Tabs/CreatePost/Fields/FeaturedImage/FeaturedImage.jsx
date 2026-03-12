import React, { useState } from "react";
import { Image as ImageIcon, X } from "lucide-react";
import { useFormContext } from "react-hook-form";

const FeaturedImage = () => {
  // যদি FormContext থাকে তবে register নিবে, নাহলে এরর দিবে না
  const methods = useFormContext();
  const { setValue } = methods; // এখান থেকে যা যা দরকার বের করে নিন
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("image", file, {
        shouldValidate: true,
        shouldDirty: true,
      });
      console.log(file);
    }
  };
  const removeImage = (e) => {
    e.preventDefault();
    e.stopPropagation(); // ইনপুট ক্লিক হওয়া আটকাবে
    setPreview(null);
    if (methods) {
      setValue("image", null);
    }
  };
  return (
    <div className="relative group cursor-pointer">
      <div className="w-full h-48 rounded-[2rem] border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center gap-3 group-hover:border-blue-500/50 transition-all overflow-hidden">
        {preview ? (
          <div className="relative w-full h-full">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-3 right-3 p-1.5 bg-red-500/80 hover:bg-red-600 rounded-full text-white transition-colors z-10"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <>
            <ImageIcon className="w-10 h-10 text-gray-500 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm text-gray-400 group-hover:text-blue-300">
              Upload Featured Image
            </span>
          </>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default FeaturedImage;
