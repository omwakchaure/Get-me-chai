'use client';

import React, { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login'); // Redirect to login if session is not present
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-800">
      {session ? (
        <>
        

          {/* Main Dashboard */}
          <main className="p-6 space-y-6">
            {/* Welcome Section */}
            <div className="bg-orange-200 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">
                Welcome, {session.user.name}!
              </h2>
              <p className="mt-2 text-orange-700">
                Ready to inspire your supporters? Start a new campaign or check
                your stats below.
              </p>
            </div>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-medium">Chais Received</h3>
                <p className="text-3xl font-bold text-orange-600">120</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-medium">Total Earnings</h3>
                <p className="text-3xl font-bold text-orange-600">$450</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-medium">Supporters</h3>
                <p className="text-3xl font-bold text-orange-600">85</p>
              </div>
            </section>

            {/* Campaigns Section */}
            <section>
              <h3 className="text-xl font-semibold">Your Campaigns</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="/campaign-sample.jpg"
                    alt="Campaign"
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h4 className="mt-2 text-lg font-semibold">Art for All</h4>
                  <p className="text-gray-600">Status: Active</p>
                  <p className="text-orange-600 mt-1">$200 raised</p>
                  <button className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700">
                    View Details
                  </button>
                </div>
                {/* Additional campaign cards can go here */}
              </div>
            </section>

            {/* Recent Supporters */}
            <section>
              <h3 className="text-xl font-semibold">Recent Supporters</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/supporter1.jpg"
                    alt="Supporter"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-gray-700">
                    <strong>John Doe</strong> supported your campaign.
                  </p>
                </div>
                {/* More supporters can be added here */}
              </div>
            </section>
          </main>

          
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-medium">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
