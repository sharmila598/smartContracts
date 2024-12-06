import { GrMoney } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { useModal } from "connectkit";
import { useState } from "react";

const CenteredForm = () => {
  const { openProfile } = useModal();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0]; // Get the first account
      setWalletAddress(address); // Set the wallet address
      openProfile(); // Optionally open the profile after connecting
    }
  };

  const handleDisconnectWallet = () => {
    setWalletAddress(null); // Clear the wallet address
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center relative">
      <div className="w-full max-w-md p-4">
        {/* Money button positioned at the top left */}
        <div className="absolute top-10 left-4 flex ">
          <button
            onClick={walletAddress ? openProfile : handleConnectWallet}
            className="border border-gray-300 m-2 p-2 rounded-md flex flex-row place-items-center hover:bg-gray-200"
          >
            <GrMoney size={24} className="text-black m-2" />
            {walletAddress
              ? `${walletAddress.slice(0, 5)}....${walletAddress.slice(-4)}`
              : "Connect Wallet"}
          </button>
        </div>

        <div className="space-y-4 mt-10">
          {/* Full-width input */}
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search by address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <CiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredForm;
