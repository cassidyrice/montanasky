# MontanaSky Support Decision Tree

## Purpose
Use this decision tree to route common support requests into the correct SOP. The default rule is: verify the customer in Admin before making changes in Plume, Tarana, UISP, Radius, CPE Inventory, or vendor portals.

## Universal First Step
1. Open Admin.
2. Search the customer by name, phone, address, or account details.
3. Confirm the correct customer, service address, account/location, service status, and service type.
4. Review recent notes, package, equipment type, and provisioning details.
5. Only continue after confirming the correct account.

## Customer Completely Offline
Use: `01-wireless-tarana-plume-troubleshooting.md`

Start with Admin, then Plume, then Tarana. If the Tarana radio is offline, focus on radio power, POE, cabling, AP/sector status, or field escalation. If the Tarana radio is online but Plume is offline, focus on router power, WAN cabling, DHCP/provisioning, or Plume assignment.

## Wi-Fi Connected but No Internet
Use: `01-wireless-tarana-plume-troubleshooting.md`

Check whether the issue affects all devices, some devices, or one device. If Tarana and Plume are both online, treat it as a local Wi-Fi/device/topology issue unless WAN drops or provisioning issues are found.

## Slow Speeds
Use: `01-wireless-tarana-plume-troubleshooting.md`

Compare Tarana link health, Plume gateway speed, and customer device speed. If the gateway speed test is good but device speed is poor, focus on Wi-Fi RSSI, topology, extender placement, band steering, and device limitations.

## Intermittent Drops
Use: `01-wireless-tarana-plume-troubleshooting.md`

Check Tarana session drops, Plume WAN/offline history, extender drops, customer power, loose Ethernet, recent weather, and whether all devices drop together.

## Speed Change / Radius Bounce
Use: `02-speed-change-radius-bounce.md`

Change the package in Admin, confirm the package updated, send Radius status-of-disconnect, verify reconnect, and document.

## Speed Change + 60 GHz Radio Onboarding
Use: `03-speed-change-60ghz-onboarding.md`

Change speed in Admin, adopt/assign radio in UISP, confirm sector, bounce Radius, verify online, and document.

## 60 GHz Radio Onboarding Only
Use: `04-60ghz-radio-onboarding.md`

Confirm customer in Admin, create or confirm UISP customer/site, adopt pending radio, assign customer and sector, verify online, and document.

## Delete Old PPPoE / Adopt New Radio / Remove Old Equipment
Use: `05-delete-pppoe-adopt-radio-remove-old-equipment.md`

Confirm old vs active records before deleting anything. Verify by MAC, device type, last seen, status, customer, and replacement equipment status.

## Nightly Intermittent Issue
Use: `06-nightly-intermittent-internet-issue.md`

Collect time window, modem/router light behavior, affected devices, and whether service self-recovers. Complete Layer 1 checks first. Monitor and escalate to provider/line review if the pattern repeats.

## DSL / CenturyLink Issue
Use: `07-dsl-centurylink-troubleshooting.md`

Power cycle modem/router, check DSL and Internet lights, confirm cabling, gather access info, then contact CenturyLink if internal troubleshooting does not resolve.

## Plume Wi-Fi Optimization
Use: `08-plume-wifi-optimization.md`

Only apply optimization settings after Admin verification and Plume topology/device checks. Document every changed setting.

## Tarana 6 GHz Interference Watch
Use: `09-tarana-6ghz-interference-escalation.md`

Escalate repeated disconnect reason: “Uplink Control Channel Unstable, RN disconnected possibly due to high pathloss or high uplink interference.”

## Ticket Note Needed
Use: `12-ticket-note-templates.md`
