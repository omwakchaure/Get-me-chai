import React from 'react';

const Username = (params) => {
  return (
    <div className="bg-gradient-to-b from-indigo-200 via-purple-200 to-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="relative w-screen text-center">
        <img
          className="w-full h-[400px] object-cover"
          src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Background"
        />
        <div className="absolute -bottom-20 right-[45%]">
          <img
            className="border-4 border-white rounded-full"
            width={150}
            height={150}
            src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile Picture"
          />
        </div>
      </header>

      {/* Information Section */}
      <main className="text-center text-black my-24 space-y-4">
        <h1 className="text-2xl font-bold">@omwakchaure9823@gmail.com</h1>
        <p className="text-slate-900">Creating animated art for Virtual Table Tops (VTTs).</p>
      </main>

      {/* Supporters and Payment Options Section */}
      <section className="flex justify-center my-12 space-x-12">
        {/* Supporters Section */}
        <div className="w-1/3 text-center">
  <h2 className="text-xl font-semibold  text-black">Supporters</h2>
  <div
    className="bg-gray-800 p-6 rounded-lg shadow-md mt-6 overflow-y-scroll"
    style={{ maxHeight: "250px" }}
  >
    <p className="text-gray-300 mb-4 font-bold">Thank you for your support:</p>
    <form>
      <h3>Rohan has supported you....</h3>
      <h3>Paresh has supported you....</h3>
      <h3>Rakesh has supported you....</h3>
      <h3>Rohan has supported you....</h3>
      <h3>Rajesh has supported you....</h3>
      <h3>Karan has supported you....</h3>
      <h3>Mohan has supported you....</h3>
      <h3>Suraj has supported you....</h3>
      <h3>Neha has supported you....</h3>
    </form>
  </div>
</div>




        {/* Payment Option Section */}
        <div className="w-1/3 text-center">
          <h2 className="text-xl font-semibold  text-black">Make a Contribution</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
            <p className="text-gray-300 mb-4">Support us by making a one-time donation:</p>
            <form>
            <input
                type="string"
                placeholder="Enter message"
                className="w-full px-4 py-2 mb-4 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none"
              />
              <input
                type="number"
                placeholder="Enter amount ($)"
                className="w-full px-4 py-2 mb-4 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-500">
                Pay and send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="flex flex-wrap justify-center space-x-8 mt-12">
        {/* Monthly Plan */}
        <div className="border border-white w-64 h-80 bg-gradient-to-r from-blue-500 to-green-400 text-white p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-xl font-bold mb-4">Monthly Plan</h2>
          <div className="text-4xl font-semibold">$19.99</div>
          <p className="text-sm mt-2">Billed every month</p>
          <button className="mt-4 py-2 px-6 bg-white text-blue-600 rounded-full hover:bg-gray-200">
            Subscribe
          </button>
        </div>

        {/* Yearly Plan */}
        <div className="border border-white w-64 h-80 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-xl font-bold mb-4">Yearly Plan</h2>
          <div className="text-4xl font-semibold">$199.99</div>
          <p className="text-sm mt-2">Billed every year</p>
          <button className="mt-4 py-2 px-6 bg-white text-purple-600 rounded-full hover:bg-gray-200">
            Subscribe
          </button>
        </div>

        {/* Premium Plan */}
        <div className="mx-12 border border-white w-64 h-80 bg-gradient-to-r from-yellow-400 to-red-500 text-white p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-xl font-bold mb-4">Premium Plan</h2>
          <div className="text-4xl font-semibold">$29.99</div>
          <p className="text-sm mt-2">Billed every month</p>
          <button className="mt-4 py-2 px-6 bg-white text-yellow-600 rounded-full hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Username;
