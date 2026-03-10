import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

/**
 * ১. কনটেক্সট অবজেক্ট তৈরি
 */
const GlobalContext = createContext(undefined);

/**
 * ২. প্রোভাইডার কম্পোনেন্ট
 */
export const GlobalProvider = ({ children }) => {
  // এখানে আপনার স্টেটগুলো রাখুন
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ফাংশনগুলোকে useCallback দিয়ে র‍্যাপ করা ভালো (পারফরম্যান্সের জন্য)
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // এখানে আপনার এপিআই কল বা লজিক থাকবে
      // const res = await api.get('/data');
      // setData(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // ৩. value টিকে useMemo দিয়ে অপ্টিমাইজ করা (অপ্রয়োজনীয় রি-রেন্ডার কমাতে)
  const value = useMemo(
    () => ({
      data,
      loading,
      error,
      fetchData,
      setData,
    }),
    [data, loading, error, fetchData],
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

/**
 * ৪. কাস্টম হুক (এটিই আপনি সব জায়গায় ব্যবহার করবেন)
 */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  // যদি কেউ প্রোভাইডারের বাইরে এটি ব্যবহার করতে চায় তবে এরর দেবে
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
