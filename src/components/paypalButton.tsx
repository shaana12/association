import { useState } from "react";

const PayPalDonationSection = () => {
  const [amount, setAmount] = useState<number>(10); // Montant par défaut

  const handleClick = () => {
    if (!amount || amount <= 0) return; // Validation du montant
    const paypalLink = `https://www.paypal.me/jeunemamancelibatair/${amount}`;
    window.open(paypalLink, "_blank", "noopener,noreferrer,width=600,height=600,left=50%,top=50%,transform=translate(-50%,-50%)");
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center space-y-4 p-6 bg-gray-200 md:w-1/2 mx-auto rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Faites un don</h2>
        <label className="text-gray-700">Montant en € :</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 0)}
          className="p-2 border border-gray-300 rounded-md w-32 text-center"
          min="1"
        />
        <button
          onClick={handleClick}
          className="bg-gray-50 text-black py-3 px-6 rounded-lg text-xs shadow-md hover:bg-[#FFB822] transition"
        >
          <span className="flex items-center space-x-2">
            <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" alt="PayPal" className="h-6" />
            <span>Payer avec PayPal</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PayPalDonationSection;