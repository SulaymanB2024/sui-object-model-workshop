import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";

const VAULT_ID = "0x8d85d37761d2a4e391c1b547c033eb0e22eb5b825820cbcc0c386b8ecb22be33";

const rpcUrl = getFullnodeUrl("testnet");
const suiClient = new SuiClient({ url: rpcUrl });

const main = async () => {
  const vaultObject = await suiClient.getObject({
    id: VAULT_ID,
    options: {
      showContent: true,
      showType: true,
    },
  });
  
  console.log("Vault Object:");
  console.log(JSON.stringify(vaultObject, null, 2));
};

main();
