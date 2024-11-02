"use client";
import HeaderBox from "@repo/ui/headerbox";
import TotalBalanceBox from "@repo/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  console.log("hi");
  const subtext = "Access and manage your account and transactions efficiently";
  const user = "Sandeep";
  const totalBanks = 5;
  const accounts : number[] = [];
  const totalCurrentBalance = 123;

  return (
    <div>
      <div>Home</div>
      <HeaderBox type="greeting" title="Welcome" subtext={subtext} user = {user} />
      <TotalBalanceBox accounts={accounts} totalBanks={totalBanks} totalCurrentBalance={totalCurrentBalance}/>
    </div>
  );
};

export default Home;
