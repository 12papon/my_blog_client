import { Eye } from "lucide-react";

const Preview = () => {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl font-bold transition-all border border-white/10"
    >
      <Eye size={20} /> Preview
    </button>
  );
};

export default Preview;
