import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Main from "../../Components/Main/Main";
import About_Conference from "../../Shared/Components/About/About_Conference";
import Scope_Conference from "../../Shared/Components/About/Scope_Conference";
import Organizing_Committee from "../../Shared/Components/About/Organizing_Committee";
import KeyDates from "../../Shared/Components/Author/KeyDates";
import Papersubmission from "../../Shared/Components/Author/Papersubmission";
import EditorialBoard from "../../Shared/Components/About/EditorialBoard";
import JournalPublication from "../../Shared/Components/Author/JournalPublication";
import RegistrationDetails from "../../Shared/Components/Author/RegistrationDetails";
import AuthConferenceTracks from "../../Shared/Components/Author/AuthConferenceTracks";
import ScrollToTop from "./ScrollToTop";
import ContactDetails from "../../Components/Contact/ContactDetails";
import PaperSubmissionForm from "../../Shared/Components/Author/paper";


export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/about_conference" element={<About_Conference />} />
            <Route path="/scope_conference" element={<Scope_Conference />} />

            <Route
              path="/organizing_committee"
              element={<Organizing_Committee />}
            />
            <Route path="/editorial_board" element={<EditorialBoard />} />

            <Route
              path="/auth_conference_tracks"
              element={<AuthConferenceTracks />}
            />
            <Route
              path="/journal_publication"
              element={<JournalPublication />}
            />
            <Route
              path="/registration_details"
              element={<RegistrationDetails />}
            />
            <Route path="/key_dates" element={<KeyDates />} />
            <Route path="/new_paper_submission" element={<Papersubmission />} />
            <Route path="/contact" element={< ContactDetails/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
