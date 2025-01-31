import React from "react";
import Header from "../components/Header";
import AccountContent from "../components/AccountContent";

function Account() {
  return (
    <div className="page">
      <Header Header="sighFormHeader" isProfileLink={false} />
      <AccountContent />
    </div>
  )
}

export default Account;