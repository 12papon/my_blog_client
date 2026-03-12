import { useFormContext } from "react-hook-form";
const Title = () => {
  const { register } = useFormContext();
  return (
    <div className="group">
      <label className="text-sm font-medium text-gray-400 ml-2 mb-2 block">
        Post Title
      </label>
      <input
        type="text"
        required
        {...register("title", { required: "Title is required" })}
        maxLength={100}
        placeholder="Enter a catchy title..."
        className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white transition-all text-lg font-semibold placeholder:text-gray-600"
      />
    </div>
  );
};

export default Title;
