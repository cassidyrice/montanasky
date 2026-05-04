# SOP: Wireless Troubleshooting — Tarana Radio + Plume Router

## When to Use
Use when a wireless customer has Tarana radio service and Plume router/Wi-Fi equipment.

Common symptoms:
- Completely offline
- Wi-Fi connected but no internet
- Slow speeds
- Intermittent drops
- Some devices affected but not all
- Plume pods/extenders offline or weak

## Tools Needed
- Admin
- Plume
- Tarana Operator Portal
- Radius/Admin provisioning if needed
- SMS/ticketing system

## Universal First Step: Admin
1. Open Admin.
2. Search and confirm the customer.
3. Verify customer name, service address, account/location, service status, plan, equipment type, recent notes, and service type.
4. Do not touch equipment tools until the correct customer/location is confirmed.

## Identify the Symptom
Ask:
- Is internet completely down?
- Is Wi-Fi connected but no internet?
- Are all devices affected or only one/some?
- Is it slow, intermittent, or fully offline?
- Did they reboot, unplug, move equipment, or have a power outage?
- Are Plume pods/extenders being used?

## A. Customer Completely Offline

### Check Plume
Look for gateway online/offline, last seen, topology, extender status, WAN status, and device connection history. If Plume gateway is offline, do not assume Wi-Fi is the root issue. The router may not be receiving internet from Tarana.

### Check Tarana
Look for radio online/offline, connection state, signal/quality, recent disconnects, sector/AP, alarms, and poor RF indicators. If Tarana is offline, suspect radio power, cabling, POE, alignment, AP/sector issue, or customer-side power.

### Power Cycle Order
1. Unplug Plume router power.
2. Unplug Tarana POE/radio power.
3. Wait 30 seconds.
4. Plug Tarana POE/radio back in first.
5. Wait for radio to return online.
6. Plug Plume router back in.
7. Wait 3–5 minutes.
8. Recheck Tarana and Plume.

### If Tarana Stays Offline
Check for area outage, neighboring customers on same AP/sector, radio never reconnecting, bad POE/power supply, wrong cabling, damaged cable/radio. Escalate or schedule tech if no network-wide issue is found.

## B. Tarana Online, Plume Offline
Likely router power, Ethernet/WAN handoff, DHCP, or Plume provisioning.

Check Plume power, Ethernet from Tarana POE/data to Plume WAN, correct port, last seen, replacement/router MAC, assigned account, profile active, and no old profile conflict. Reseat Ethernet and reboot Plume only. If still offline, confirm DHCP/service provisioning in Admin/Radius and escalate if router appears bad or not pulling WAN.

## C. Tarana Online and Plume Online, Customer Says No Internet
Treat as Wi-Fi/device/local network unless WAN drops or provisioning problems are found.

In Plume check connected devices, device health, gateway status, speed test, topology, extender placement, RSSI/backhaul, affected device location, and whether one device or all devices are affected.

Ask customer to test near the router, forget/rejoin Wi-Fi, disable cellular for testing, and confirm whether other devices work. If only one device is affected, likely customer device issue.

## D. Slow Speeds
Check in order:
1. Tarana radio link quality.
2. Tarana signal/sector health.
3. Recent drops or poor modulation/quality.
4. Plume gateway speed test.
5. Plume device-level speed if available.
6. Device Wi-Fi RSSI.
7. Band used: 2.4 GHz vs 5/6 GHz.
8. Extender daisy-chain or distance.
9. Active device count and high-usage devices.

If Plume gateway speed is good but device speed is bad, likely Wi-Fi/device/topology. If Tarana or gateway speed is bad, likely RF, tower/AP, provisioning, or service-side.

## E. Intermittent Drops
Check Tarana session drops, signal history, radio uptime, AP/sector alarms, Plume WAN drops, gateway offline history, extender disconnects, power issues, loose Ethernet, recent weather/wind, and whether all devices drop together.

Pattern logic:
- All devices drop together = radio/WAN/router issue.
- Only wireless devices drop = Plume/Wi-Fi issue.
- Only one device drops = customer device issue.
- Extender-connected devices drop = pod placement/backhaul issue.

## Tool Order Checklist
1. Admin — verify customer, service, account, notes, provisioning.
2. Plume — router/gateway, Wi-Fi topology, devices, speed tests.
3. Tarana — radio status, signal, sector/AP, drops, alarms.
4. Radius/Admin provisioning — only if online equipment is not getting service.
5. SMS/ticket — document symptoms, actions, and outcome.

## Ticket Note Template
```text
Customer reports [offline / slow speeds / intermittent drops / Wi-Fi issue]. Verified account/service in Admin. Checked Plume: gateway [online/offline], topology [normal/issue], affected devices [all/some/one]. Checked Tarana radio: [online/offline], signal/quality [normal/poor], recent drops [yes/no]. Had customer power-cycle Tarana POE first, then Plume router. Result: [restored service / no change / partial improvement]. Next action: [monitor / escalate / schedule tech / follow up].
```
