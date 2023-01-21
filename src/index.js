import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const DEFAULT_CV_GENERAL = {
  name: "Jaden Yuki",
  email: "jadenyuki@duelacademy.com",
  phone_number: "100XXYY",
};

const DEFAULT_CV_EDUCATIONAL = {
  school_name: "Duel Academy",
  title_of_study: "Hero Deck, BSc",
  date_of_study_start: "3000-09-01",
  // "Sept 1 3000",
  date_of_study_end: "3003-06-01",
  // "Jun 1 3003"
};

const DEFAULT_CV_Practical = {
  company_name: "Yu-Gi-Oh GX",
  position_title: "Junior duelist",
  main_tasks_of_the_jobs: [
    "Participate in daily duel campaigns",
    "Complete weekly duel puzzles",
    "Sort out different cards accordingly",
  ],
  date_of_work_start: "3003-06-01",
  // "June 1 3003"
  date_of_work_end: "3005-03-03",
  // "Now" refers to today
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      general={DEFAULT_CV_GENERAL}
      educational={DEFAULT_CV_EDUCATIONAL}
      practical={DEFAULT_CV_Practical}
    />
  </React.StrictMode>
);
