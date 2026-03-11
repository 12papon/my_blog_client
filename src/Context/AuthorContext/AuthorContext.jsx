import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

/**
 * ১. কনটেক্সট অবজেক্ট তৈরি
 */
const AuthContext = createContext();
/**
 * ২. প্রোভাইডার কম্পোনেন্ট
 */
export const AuthProvider = ({ children }) => {
  // এখানে আপনার স্টেটগুলো রাখুন
  const [user, setUser] = useState(() => {
    // অ্যাপ লোড হওয়ার সময় চেক করবে ইউজার আগে থেকে লগইন কি না
    try {
      const savedUser = localStorage.getItem("user");
      //console.log(savedUser);

      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Authentication error : ", error);
      return null;
    }
  });
  console.log(user);

  //Login
  /**
   * ১. useCallback দিয়ে Login ফাংশন মেমোয়াইজ করা
   * যাতে এটি প্রতি রেন্ডারে নতুন রেফারেন্স তৈরি না করে
   */
  const Login = useCallback((userData) => {
    if (userData) {
      console.log(userData);
      setUser(() => userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return true;
    }

    return false;
  }, []); // dependency array খালি কারণ এটি স্টেটের ওপর সরাসরি নির্ভর নয়

  //   const Login = (userData) => {
  //     if (userData) {
  //       setUser(userData);
  //       localStorage.setItem("user", JSON.stringify(userData));
  //       return true;
  //     }
  //     return false;
  //   };

  //Logout
  /**
   * ২. useCallback দিয়ে Logout ফাংশন মেমোয়াইজ করা
   */
  const Logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");

    return false;
  }, []);

  //   const Logout = () => {
  //     setUser(null);
  //     localStorage.removeItem("user");
  //     return false;
  //   };

  /**
   * ৩. useMemo দিয়ে পুরো ভ্যালু অবজেক্টটি মেমোয়াইজ করা
   * এটিই সবচেয়ে গুরুত্বপূর্ণ অপ্টিমাইজেশন।
   * এখন শুধুমাত্র 'user' চেঞ্জ হলেই প্রোপ্রাইডার তার চিলড্রেনদের রি-রেন্ডার করবে।
   */
  const authValue = useMemo(
    () => ({ user, Login, Logout }),
    [user, Login, Logout],
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

// কাস্টম হুক (সহজে ব্যবহারের জন্য)
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth অবশ্যই AuthProvider এর ভেতরে ব্যবহার করতে হবে");
  }
  return context;
};
