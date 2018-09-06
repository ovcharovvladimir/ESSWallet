## Adding Custom Networks

To add another network to our dropdown menu, make sure the following files are adjusted properly:

```
--app/scripts/config.js
--app/scripts/lib/buy-eth-url.js no faucet
++app/scripts/lib/resolver.js 
++app/scripts/controllers/network/enums.js no faucet
++app/scripts/controllers/network/utils.js 
++app/scripts/lib/config-manager.js
++ui/app/app.js
--ui/app/components/buy-button-subview.js
--ui/app/components/drop-menu-item.js next
++ui/app/components/drop-downs/network-dropdown.js
--ui/app/components/network.js display
++ui/app/components/network-display/network-display.component.js
??ui/app/components/transaction-list-item.js
--ui/app/config.js
--ui/app/css/lib.css
++ui/app/css/output/index.css
++ui/app/css/components/network-display/index.sccss
++ui/app/css/components/network.css
++ui/app/css/components/network.js
++ui/app/css/components/pages/setings/setings.js
++ui/lib/account-link.js
++ui/lib/etherscan-prefix-for-network.js
--ui/lib/explorer-link.js

ui/app/constants/common.js change eth to ess
```

You will need:
+ The network ID
+ An RPC Endpoint url
+ An explorer link
+ CSS for the display icon

