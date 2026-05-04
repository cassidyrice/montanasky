# SOP: Escalation Rules

## Purpose
Use this file to identify when a support issue should move beyond normal help desk troubleshooting.

## Always Escalate or Request Review When
- Customer remains offline after correct power-cycle and cabling checks.
- Tarana radio stays offline and no area outage is confirmed.
- Multiple nearby customers or same-sector customers show the same issue.
- Repeated Tarana disconnects suggest uplink interference, high pathloss, or control channel instability.
- Radius, PPPoE, DHCP, UISP, or CPE records appear conflicting and deletion/removal is being considered.
- Customer has repeated nightly degradation after Layer 1 troubleshooting.
- Plume gateway is online but repeated WAN drops are visible.
- Plume topology shows recurring extender/backhaul failure after placement checks.
- Speed tests are poor at the gateway/router, not just one customer device.
- Physical damage, bad POE, bad cabling, or field access may be required.

## Do Not Escalate as Network Issue When
- Only one device is affected and other customer devices work normally.
- Plume gateway speed is good but one device has poor Wi-Fi RSSI.
- Customer device is far from router/extender or connected to poor backhaul.
- The customer has not completed basic power/cabling checks.

## Safety Escalation
Escalate before deleting or removing anything if old vs active cannot be confirmed by MAC, device type, customer, last seen, online/offline status, and replacement device status.

## Ticket Note Template
```text
Escalated for review due to [reason]. Confirmed correct customer/account/location in Admin. Checked systems: [Admin / Plume / Tarana / UISP / Radius / CPE Inventory]. Findings: [findings]. Pattern or repeat evidence: [timestamps/count]. Customer impact: [impact]. Requested next action: [RF review / provider review / field tech / provisioning review / supervisor review].
```
