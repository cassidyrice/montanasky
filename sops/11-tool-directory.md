# SOP: Tool Directory

## Purpose
Use this file as a quick reference for which system to check for each support task.

## Admin
Primary source for customer/account verification.

Use Admin for:
- Customer name
- Service address
- Correct account/location
- Service status
- Billing/service plan
- Service type
- Recent notes
- Router/radio type if listed
- Provisioning context

Default rule: check Admin first before making changes anywhere else.

## Plume
Use Plume for customer Wi-Fi/router troubleshooting.

Check:
- Gateway online/offline
- Last seen
- Topology
- Extender/pod health
- Connected devices
- Device RSSI
- Device path to gateway/extender
- Gateway/router speed test
- Device-level performance

## Tarana Operator Portal
Use Tarana for radio/RF troubleshooting.

Check:
- Radio online/offline
- Connection state
- Sector/AP
- Signal/pathloss/quality
- Recent disconnects
- Alarms
- Throughput indicators
- Interference/pathloss patterns

## UISP
Use UISP for radio/customer/site inventory and assignment.

Use UISP for:
- Creating or confirming customer/site
- Adopting pending radios
- Assigning radios to customer/site
- Assigning correct AP/sector
- Removing old inactive equipment after confirmation

## Radius
Use Radius for PPPoE/session/provisioning work.

Use Radius for:
- Status of Disconnect / bounce
- PPPoE lookup
- Speed-profile/session verification
- Removing old PPPoE only after confirming old vs active

## CPE Inventory
Use for physical equipment tracking.

Use for:
- Returned equipment
- Recycled/available equipment
- Damaged equipment notes
- Matching MAC/serial/device type

## cnMaestro
Use for Cambium-related wireless troubleshooting where applicable.

Check:
- Modulation
- LQI
- Session drops
- Retransmissions
- Device health
- AP/SM relationship

## SMS / Ticketing
Use for customer communication and documentation.

Document:
- Symptoms
- Customer statements
- Tools checked
- Findings
- Actions taken
- Result
- Next action
