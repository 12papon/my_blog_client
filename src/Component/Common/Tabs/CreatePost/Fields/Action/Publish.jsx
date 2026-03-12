import { Send } from "lucide-react";

const Publish = () => {
  return (
    <button
      type="submit"
      className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-4 rounded-2xl font-black text-lg text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all"
    >
      <Send size={20} /> Publish Post
    </button>
  );
};

export default Publish;
