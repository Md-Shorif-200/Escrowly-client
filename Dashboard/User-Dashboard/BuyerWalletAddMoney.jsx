"use client";

import React, { useState } from "react";
import { FaWallet, FaSpinner, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function BuyerWalletAddMoney() {
  const [amount, setAmount] = useState("");
  const [gateway, setGateway] = useState("sslcommerz");
  const [isLoading, setIsLoading] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1250); // demo balance

  const handleAddMoney = async (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API request (replace with real backend call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setWalletBalance((prev) => prev + parseFloat(amount));
      setAmount("");

      toast.success(`৳${amount} added successfully via ${gateway}`);
    } catch (error) {
      toast.error("Payment failed. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <FaWallet className="text-emerald-500" />
          My Wallet
        </h2>
        <div className="text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
          <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
            ${walletBalance.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Add Money Form */}
      <form onSubmit={handleAddMoney} className="space-y-5">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Enter Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Select Payment Gateway
          </label>
          <select
            value={gateway}
            onChange={(e) => setGateway(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="sslcommerz">SSLCommerz (BD)</option>
            <option value="bkash">bKash</option>
            <option value="nagad">Nagad</option>
            <option value="stripe">Stripe (Card)</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 text-lg font-semibold rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 transition-all flex justify-center items-center cursor-pointer ${
            isLoading ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin mr-2" /> Processing...
            </>
          ) : (
            "Add Money"
          )}
        </button>
      </form>

      {/* Success Hint */}
      <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
        <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-xl" />
        <p className="text-sm">
          Once your payment is confirmed, the amount will appear in your wallet instantly.
        </p>
      </div>
    </div>
  );
}
