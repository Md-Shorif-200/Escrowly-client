import BuyerDashboard from "@/Dashboard/Buyer/BuyerDashboard";

export default function page() {
  const role = "buyer";
  return <div>{role == "buyer" ? <BuyerDashboard></BuyerDashboard> : ""}</div>;
}
