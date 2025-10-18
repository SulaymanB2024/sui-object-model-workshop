import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import keyPairJson from "./keypair.json";

const rpcUrl = getFullnodeUrl("testnet");
const suiClient = new SuiClient({ url: rpcUrl });

const main = async () => {
  console.log("Checking balance for:", keyPairJson.publicAddress);
  console.log();
  
  try {
    const balance = await suiClient.getBalance({
      owner: keyPairJson.publicAddress,
    });
    
    console.log("✅ Balance found!");
    console.log("Total Balance:", balance.totalBalance, "MIST");
    console.log("Total Balance:", (parseInt(balance.totalBalance) / 1000000000).toFixed(4), "SUI");
    console.log();
    
    if (parseInt(balance.totalBalance) === 0) {
      console.log("⚠️  You need to request tokens from a faucet!");
      console.log("Visit: https://faucet.n1stake.com/");
      console.log("Or: https://faucet.sui.io/");
    } else {
      console.log("✅ You have tokens! Ready to run the exercises.");
    }
  } catch (error) {
    console.error("❌ Error checking balance:", error);
  }
};

main();
