# SOP: Tarana 6 GHz Interference Escalation

## When to Use
Use when a Tarana radio shows repeated disconnect reason indicating unstable uplink control channel, high pathloss, or high uplink interference.

Key phrase to watch:

```text
Uplink Control Channel Unstable, RN disconnected possibly due to high pathloss or high uplink interference
```

## Tools Needed
- Admin
- Tarana Operator Portal
- Ticketing system

## Step-by-Step Process
1. Confirm customer/account/location in Admin.
2. Open Tarana Operator Portal.
3. Locate the customer radio.
4. Confirm the disconnect reason.
5. Check whether the disconnect reason repeats.
6. Capture:
   - Customer name
   - BN / radio identifier if available
   - Sector/AP
   - Timestamps
   - Count/frequency of repeats
   - Signal/pathloss/interference indicators
   - Whether nearby customers or same-sector radios show similar behavior
7. Do not treat as a standard reboot-only issue if repeats are present.
8. Escalate to Cass for review as possible 6 GHz interference watch item.
9. Document findings in the ticket.

## Escalation Trigger
Escalate if the disconnect reason appears repeatedly, even if the issue is not widespread.

## Ticket Note Template
```text
Tarana radio showed repeated disconnect reason: [disconnect reason]. Confirmed correct customer/account/location in Admin. Checked Tarana radio: BN/radio [identifier], sector/AP [sector], timestamps [times], repeat count [count]. Possible high pathloss/uplink interference pattern. Escalated to Cass for review / 6 GHz interference watch.
```
