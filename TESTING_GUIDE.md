# Quick Testing Guide

## Step-by-Step Testing Instructions

### Step 1: Get Testnet Tokens
Your address: `0x470d62b9ebb1df0cfa0e8a8a7c19d777e5f0e343d227332d8f5a7cf7305543b0`

Visit one of these faucets:
- https://faucet.n1stake.com/
- https://faucet.sui.io/
- Discord: https://discord.gg/cKx75xrRMq (use `/faucet` command)

### Step 2: Verify You Have Tokens
```bash
cd /workspaces/sui-object-model-workshop/scripts

# Create and run this quick balance check
cat > check_balance.ts << 'EOF'
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import keyPairJson from "./keypair.json";

const rpcUrl = getFullnodeUrl("testnet");
const suiClient = new SuiClient({ url: rpcUrl });

const main = async () => {
  const balance = await suiClient.getBalance({
    owner: keyPairJson.publicAddress,
  });
  console.log("Balance:", balance.totalBalance, "MIST");
  console.log("Balance:", parseInt(balance.totalBalance) / 1000000000, "SUI");
};

main();
EOF

pnpm exec ts-node check_balance.ts
```

### Step 3: Run Exercise 1 - Return Objects
```bash
pnpm return-objects
```
Expected: Creates and transfers a SuiNFT to your address

### Step 4: Run Exercise 2 - Input Objects
```bash
pnpm input-objects
```
Expected: Increments the shared counter object

### Step 5: Run Exercise 3 - Scavenger Hunt
```bash
pnpm scavenger-hunt
```
Expected: Withdraws 1 MIST from the vault and transfers it to your address

## Troubleshooting

### If you get "Insufficient gas"
- Request more tokens from the faucet
- Each transaction requires ~0.01 SUI for gas

### If you get "Object not found"
- The shared objects might have changed
- Check the current object IDs on the explorer

### If you get "Invalid key code"
- The vault code has been verified as: 745223
- If it still fails, the vault might have been emptied

## Verification

After each transaction:
1. Copy the transaction digest from the console output
2. Visit: https://suiscan.xyz/testnet/tx/[YOUR_DIGEST]
3. Verify the transaction succeeded
4. Check your account page to see received objects/tokens

Your account page: https://suiscan.xyz/testnet/account/0x470d62b9ebb1df0cfa0e8a8a7c19d777e5f0e343d227332d8f5a7cf7305543b0

## Success Criteria

✅ Exercise 1: You should see a new SuiNFT in your account
✅ Exercise 2: The counter value should increment by 1
✅ Exercise 3: You should receive 1 MIST in your account

Congratulations on completing the Sui Object Model Workshop! 🎉
