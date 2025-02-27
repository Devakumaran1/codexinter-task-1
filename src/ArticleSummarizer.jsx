import React, { useState } from "react";
import axios from "axios";


const ArticleSummarizer = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle API call
  const handleSummarize = async () => {
    if (!url) {
      setError("Please enter a valid URL.");
      return;
    }
    setError("");
    setSummary("");
    setLoading(true);

    try {
      const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: `${url}`,
          lang: 'en',
          engine: '2'
        },
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': '4218e772d8mshd3036d10d2f0012p1a8adbjsnbdbc9d7a30a6',
          'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
        },

      };

      const response = await axios.request(options);

      setSummary(response.data.summary)

    } catch (err) {
      setError("Failed to fetch summary. Please try again.",err);
      console.log(err)
    } finally {
      setLoading(false);
    }
  };
  // console.log(url)

  return (

    <div className="flex flex-col items-center p-4 bg-slate-200 shadow-md rounded-lg max-w-lg mx-auto my-10  ">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Article Summarizer</h1>
      <input
        type="text"
        placeholder="Enter the URL of an article"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSummarize}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
        disabled={loading}
      >
     {loading ? "Summarizing..." : "Summarize"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {summary && (
        <div className="mt-4 bg-gray-100 p-4 rounded-md w-full">
          <h2 className="text-lg font-semibold text-gray-800">Summary:</h2>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleSummarizer;




