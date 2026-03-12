import React, { useState } from "react";
import {
  Sparkles,
  Image as ImageIcon,
  Tag,
  Layout,
  Send,
  Eye,
} from "lucide-react";

const CreatePost = () => {
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

      <form className="space-y-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Main Inputs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Field */}
            <div className="group">
              <label className="text-sm font-medium text-gray-400 ml-2 mb-2 block">
                Post Title
              </label>
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Enter a catchy title..."
                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white transition-all text-lg font-semibold placeholder:text-gray-600"
              />
            </div>

            {/* Excerpt Field */}
            <div>
              <label className="text-sm font-medium text-gray-400 ml-2 mb-2 block">
                Short Excerpt (Intro)
              </label>
              <textarea
                placeholder="Write a brief summary..."
                maxLength={200}
                rows="2"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-purple-500 text-white transition-all resize-none"
              />
            </div>

            {/* Content Editor Area */}
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
          </div>

          {/* Right Side: Settings & Media */}
          <div className="space-y-6">
            {/* Featured Image Upload */}
            <div className="relative group cursor-pointer">
              <div className="w-full h-48 rounded-[2rem] border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center gap-3 group-hover:border-blue-500/50 transition-all overflow-hidden">
                <ImageIcon className="w-10 h-10 text-gray-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-blue-300">
                  Upload Featured Image
                </span>
                {/* Image Preview Hidden by default, can be shown here */}
              </div>
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            {/* Category & Tags Section */}
            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Tag size={18} />
                <span className="font-bold uppercase text-xs tracking-widest">
                  Taxonomy
                </span>
              </div>

              <input
                type="text"
                placeholder="Categories (comma separated)"
                className="w-full bg-black/20 border border-white/5 p-3 rounded-xl focus:outline-none focus:border-blue-500 text-sm text-white"
              />

              <input
                type="text"
                placeholder="Tags (Press enter)"
                className="w-full bg-black/20 border border-white/5 p-3 rounded-xl focus:outline-none focus:border-blue-500 text-sm text-white"
              />
            </div>

            {/* Status & Options */}
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
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl font-bold transition-all border border-white/10"
          >
            <Eye size={20} /> Preview
          </button>
          <button
            type="submit"
            className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-4 rounded-2xl font-black text-lg text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all"
          >
            <Send size={20} /> Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
