"use client";

import MainLayout from "@/components/layout/MainLayout";
import PropertyCards from "@/components/dashboard/PropertyCards";
import StatisticsChart from "@/components/dashboard/StatisticsChart";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import AreaMap from "@/components/dashboard/AreaMap";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <PropertyCards />
          <StatisticsChart />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <TransactionHistory />
          <AreaMap />
        </div>
      </div>
    </MainLayout>
  );
}