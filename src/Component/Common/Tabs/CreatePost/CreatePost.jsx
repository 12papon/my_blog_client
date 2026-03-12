import { useForm, FormProvider } from "react-hook-form";
import { useCreatePost } from "../../../../Hooks/PostHooks/usePost";
import { useAuth } from "../../../../Context/AuthorContext/AuthorContext";
import { Sparkles, Tag } from "lucide-react";
import Preview from "./Fields/Preview/Preview";
import Publish from "./Fields/Action/Publish";
import StatusOptions from "./Fields/Status/StatusOptions";
import Category from "./Fields/Category/Category";
import Tags from "./Fields/Tags/Tags";
import FeaturedImage from "./Fields/FeaturedImage/FeaturedImage";
import Content from "./Fields/Content/Content";
import Excerpt from "./Fields/Excerpt/Excerpt";
import Title from "./Fields/Title/Title";

const CreatePost = () => {
  const { user } = useAuth();
  console.log(user._id);

  const { mutate, isPending } = useCreatePost();
  const methods = useForm(); // সব মেথড এখানে আছে
  const onSubmit = (data) => {
    //Form Data Object create
    const formData = new FormData();
    // ১. টেক্সট ডাটা অ্যাপেন্ড করা
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("excerpt", data.excerpt);
    formData.append("status", data.status);
    formData.append("isFeatured", data.isFeatured);
    formData.append("userId", user._id);
    // ২. আপনার সেই স্পেশাল অ্যারে ডাটা (JSON stringify করে পাঠানো নিরাপদ)
    formData.append("categories", JSON.stringify(data.categories));
    formData.append("tags", JSON.stringify(data.tags));

    if (data.image) {
      formData.append("featuredimage", data.image);
    }

    // ৪. হুকের মাধ্যমে সার্ভারে ডাটা পাঠানো
    mutate(formData);
    console.log(data); // এখানে সব মডিউলের ডাটা একসাথে পাবেন
  };
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
          Create New Masterpiece{" "}
          <Sparkles className="text-yellow-400 w-8 h-8 animate-pulse" />
        </h3>
        <p className="text-gray-400 mt-2">
          Share your thoughts with the world in style.
        </p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side: Main Inputs */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title Field */}
              <Title />
              {/* Excerpt Field */}
              <Excerpt />
              {/* Content Editor Area */}
              <Content />
            </div>
            {/* Right Side: Settings & Media */}
            <div className="space-y-6">
              {/* Featured Image Upload */}
              <FeaturedImage />
              {/* Category & Tags Section */}
              <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Tag size={18} />
                  <span className="font-bold uppercase text-xs tracking-widest">
                    Taxonomy
                  </span>
                </div>

                <Category />

                <Tags />
              </div>
              {/* Status & Options */}
              <StatusOptions />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Preview />
            <Publish />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
