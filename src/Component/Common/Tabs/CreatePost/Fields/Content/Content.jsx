

const Content = () => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-400 ml-2 mb-2 block">
        Story Content
      </label>
      <textarea
        required
        placeholder="Once upon a time..."
        rows="10"
        className="w-full bg-white/5 border border-white/10 p-6 rounded-[2rem] focus:outline-none focus:border-blue-500 text-white transition-all leading-relaxed"
      />
    </div>
  );
};

export default Content;
