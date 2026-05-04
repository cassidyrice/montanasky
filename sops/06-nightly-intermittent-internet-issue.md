# SOP: Nightly Intermittent Internet / Bandwidth Issue

## When to Use
Use when a customer reports service works during the day but becomes unusable or extremely slow around the same time at night, often while the connection still appears active.

Common pattern:
- Works normally during the day.
- Fails around 10:30 PM–11:00 PM or another repeated window.
- Wi-Fi/connection still shows active.
- Pages do not load or streaming stops.
- Router reboot does not fully resolve.
- Issue clears by itself later.
- Modem/router lights may remain solid green with little/no traffic activity.

## Likely Causes
- Layer 1 / physical connection issue.
- Loose or bad cable.
- Modem/router handoff issue.
- Power issue.
- DSL/line issue.
- Upstream provider maintenance, congestion, or line instability.
- Modem/router believes it is connected but is not passing usable internet.

## Step-by-Step Process
1. Confirm customer/account/service in Admin.
2. Document the exact failure window.
3. Ask whether all devices are affected or only one device.
4. Ask what lights are doing during the issue:
   - Power: lit/off
   - DSL: color, solid/flashing/off
   - Internet: blinking, solid, or off
5. Confirm whether the customer has rebooted and whether that helped.
6. Complete Layer 1 troubleshooting first:
   - Power cycle equipment.
   - Reseat cables.
   - Confirm correct ports.
   - Check DSL/Internet light behavior before and after reboot.
7. If service is working at time of call, document current status and monitor.
8. If the same nightly pattern repeats, escalate for line/provider review.
9. If DSL/CenturyLink service is involved, use the DSL/CenturyLink SOP.

## Escalation Trigger
Escalate if the issue repeats at the same time window after Layer 1 troubleshooting, especially when all devices are affected and lights remain solid but no usable bandwidth passes.

## Ticket Note Template
```text
Customer reported recurring nightly internet degradation. Service works normally during the day, then around [time window] the connection remains active but bandwidth becomes unusable. Customer confirmed modem/router lights: [details]. Reboot result: [result]. Completed Layer 1 troubleshooting: [actions]. Current status: [working / degraded / offline]. Next action: [monitor / provider review / CenturyLink escalation / follow-up].
```
