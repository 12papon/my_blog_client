import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  page,
  totalPages,
  setPage,
  hasNextPage,
  hasPrevPage,
}) => {
  // ডাইনামিক স্লাইডিং লজিক: হাজার হাজার পেজ থাকলেও মাত্র ৫টি বাটন দেখাবে
  const getPaginationGroup = () => {
    let start = Math.max(page - 2, 1);
    let end = Math.min(start + 4, totalPages);

    // শেষের দিকে পৌঁছালে যাতে সবসময় ৫টি বাটন থাকে তার অ্যাডজাস্টমেন্ট
    if (end === totalPages) {
      start = Math.max(end - 4, 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-10 font-sans">
      {/* গ্লাস-মর্ফিজম ডিজাইন */}
      <div className="flex items-center p-1 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Previous Button */}
        <button
          disabled={!hasPrevPage}
          onClick={() => setPage(page - 1)}
          className="p-3 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white disabled:opacity-20 disabled:hover:bg-transparent group"
        >
          <ChevronLeft className="w-6 h-6 group-active:scale-75" />
        </button>

        {/* স্লাইডিং বাটন গ্রুপ */}
        <div className="flex items-center px-3 space-x-2">
          {/* প্রথম পেজ (যদি আমরা ৩ এর বেশি পেজে থাকি) */}
          {page > 3 && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPage(1)}
                className="w-10 h-10 rounded-xl font-bold text-gray-600 hover:bg-white/50"
              >
                1
              </button>
              <span className="text-gray-400 font-bold">...</span>
            </div>
          )}

          {/* মেইন ৫টি বাটন যা স্লাইড করবে */}
          {getPaginationGroup().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`w-10 h-10 rounded-xl font-black transition-all duration-500 ${
                page === pageNum
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110 rotate-3"
                  : "text-gray-700 hover:bg-white/60 hover:scale-105"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* শেষ পেজ (যদি আমরা শেষের ৩ পেজ থেকে দূরে থাকি) */}
          {page < totalPages - 2 && (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-bold">...</span>
              <button
                onClick={() => setPage(totalPages)}
                className="w-10 h-10 rounded-xl font-bold text-gray-600 hover:bg-white/50"
              >
                {totalPages}
              </button>
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          disabled={!hasNextPage}
          onClick={() => setPage(page + 1)}
          className="p-3 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white disabled:opacity-20 disabled:hover:bg-transparent group"
        >
          <ChevronRight className="w-6 h-6 group-active:scale-75" />
        </button>
      </div>

      {/* স্টাইলিশ ইন্ডিকেটর */}
      <p className="text-[12px] font-bold tracking-widest text-gray-400 uppercase">
        Page <span className="text-blue-500">{page}</span> of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
