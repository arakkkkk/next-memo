"use client";

import { useEffect, useState } from "react";
import Card from "./card";
import Header from "./header";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

function Memo() {
  const [loading, setLoading] = useState(true);
  const [memos, setMemos] = useState([]);
  const [completions, setCompletions] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/todo/list").then((results) => {
      const data = results.data;
      setMemos(data);
      setLoading(false);
    });
    axios.get("/api/v1/todo/list").then((results) => {
      const data = results.data;
      let _completions = [];
      for (let i = 0; i < data.length; i++) {
        _completions.push({ label: data[i].Title, key: i });
      }
      setCompletions(_completions);
    });
    setCompletions(["command"]);
  }, []);

  return (
    <>
      <Header completions={completions} />
      {loading ? (
        <p className="loader">ロード中。。。</p>
      ) : (
        <main>
          <div className="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8">
            {memos &&
              memos.map((memo, i) => {
                return <Card key={i} memo={memo} />;
              })}
          </div>
        </main>
      )}
    </>
  );
}

export default Memo;
