import { useFormContext } from "react-hook-form";
const Excerpt = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label className="text-sm font-medium text-gray-400 ml-2 mb-2 block">
        Short Excerpt (Intro)
      </label>
      <textarea
        {...register("excerpt", { required: "Excerpt is required" })}
        placeholder="Write a brief summary..."
        maxLength={200}
        rows="2"
        className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-purple-500 text-white transition-all resize-none"
      />
    </div>
  );
};

export default Excerpt;
