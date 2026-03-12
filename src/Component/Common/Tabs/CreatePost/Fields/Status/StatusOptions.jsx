import { Layout } from "lucide-react";

const StatusOptions = () => {
  return (
    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-4">
      <div className="flex items-center gap-2 text-purple-400 mb-2">
        <Layout size={18} />
        <span className="font-bold uppercase text-xs tracking-widest">
          Publishing Settings
        </span>
      </div>

      <select className="w-full bg-black/20 border border-white/5 p-3 rounded-xl focus:outline-none focus:border-purple-500 text-sm text-white">
        <option value="draft" className="bg-gray-900">
          Draft Mode
        </option>
        <option value="published" className="bg-gray-900">
          Publish Now
        </option>
        <option value="archived" className="bg-gray-900">
          Archive
        </option>
      </select>

      <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white/5 rounded-xl transition-all">
        <input
          type="checkbox"
          className="w-5 h-5 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-0 focus:ring-offset-0"
        />
        <span className="text-sm text-gray-300">Feature this post</span>
      </label>
    </div>
  );
};

export default StatusOptions;
