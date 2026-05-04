# SOP: Plume Wi-Fi Optimization

## When to Use
Use for customers with Plume Wi-Fi issues after confirming the account and checking topology/device health.

Do not change optimization settings blindly. Check Admin first, then Plume topology, gateway status, extender placement, device RSSI, and affected-device pattern.

## Tools Needed
- Admin
- Plume
- Ticketing system

## Pre-Check
1. Confirm customer/account/location in Admin.
2. Open Plume.
3. Check gateway online status.
4. Check topology and extender health.
5. Check affected device RSSI and connection path.
6. Confirm whether all devices, some devices, or one device is affected.
7. Run or review Plume speed tests if appropriate.

## Suggested Optimization Settings
Use these as a troubleshooting profile when Wi-Fi conditions support it:

- Auto Optimize: disabled
- DFS Mode: Auto / DFS extension
- Zero Wait DFS Mode: enabled
- Max 2.4GHz Channel Width: 40
- Max 5GHz Channel Width: 160
- Max 6GHz Channel Width: 80
- UNII-4 / 5.9GHz: disabled
- Hop Penalty: Auto
- DFS Pre-CAC Scheduler: disabled
- Optimization: optimized/refresh after settings are reviewed
- Reset link failures if needed

## Safety Checks
- Do not apply settings before confirming customer and Plume account.
- Do not assume Wi-Fi is the issue if Plume gateway is offline.
- If Tarana/router speed is poor, troubleshoot RF/WAN before Wi-Fi tuning.
- Document every setting changed.

## Ticket Note Template
```text
Customer reported Plume/Wi-Fi issue: [symptom]. Confirmed correct account/location in Admin. Checked Plume gateway/topology/devices: [findings]. Reviewed device RSSI/backhaul and affected-device pattern. Applied Plume optimization settings: [settings changed]. Result: [improved / no change / monitor / escalated].
```
