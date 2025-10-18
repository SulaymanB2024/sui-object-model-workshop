import { requestSuiFromFaucetV0, getFaucetHost } from "@mysten/sui/faucet";
import keyPairJson from "./keypair.json";

const main = async () => {
  const address = keyPairJson.publicAddress;
  console.log("Requesting tokens for address:", address);
  
  try {
    const result = await requestSuiFromFaucetV0({
      host: getFaucetHost("testnet"),
      recipient: address,
    });
    console.log("Faucet response:", result);
  } catch (error) {
    console.error("Error requesting from faucet:", error);
  }
};

main();
