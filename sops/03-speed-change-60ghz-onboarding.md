# SOP: Speed Change + 60 GHz Radio Onboarding

## When to Use
Use when a tech request combines a package/speed change with onboarding a 60 GHz radio.

Example: “Change Rachel and Mark Leighty to 100/20 and onboard 60 GHz radio off Creston North sector.”

## Tools Needed
- Admin
- UISP
- Radius
- CPE Inventory if old equipment is involved
- Ticketing system

## Step-by-Step Process
1. Open Admin.
2. Search the customer.
3. Confirm correct customer, account, and service location.
4. Check current package, billing/service line, and service type.
5. Change package/speed profile to requested speed.
6. Save/apply change.
7. Confirm Admin now shows the updated speed.
8. Open UISP.
9. Search for the customer.
10. Check whether a correct customer/site already exists.
11. If no correct customer/site exists, create one using Admin info.
12. Copy name, service address, account/customer ID, and GPS/location info if required.
13. Find the pending 60 GHz radio waiting for adoption.
14. Adopt/add the radio.
15. Assign it to the correct customer.
16. Assign it to the correct AP/sector from the request.
17. Confirm device name, customer assignment, service association, and online status.
18. If old equipment exists, do not remove it until old vs active is confirmed.
19. Open Radius.
20. Search using Radius username/account info from Admin.
21. Confirm correct customer/session.
22. Send Status of Disconnect / bounce so updated speed can apply.
23. If using dropdown flow: first dropdown 4, second dropdown 1.
24. Wait for reconnect.
25. Recheck UISP/radio status.
26. Add ticket note.

## Safety Checks
- Admin first before UISP or Radius.
- Do not create duplicate UISP customer/site if correct one already exists.
- Do not remove old CPE unless verified inactive by MAC, device type, ping/online status, and last connected time.
- Do not delete the only active Radius entry.

## Ticket Note Template
```text
[Customer name] was updated to the [speed package] package in Admin. Confirmed correct customer/account/location before making changes. Onboarded/adopted 60 GHz radio in UISP and assigned it to the customer off [sector/AP]. Verified radio/customer assignment and radio status: [online / pending connection / needs follow-up]. Sent Radius status-of-disconnect/bounce so updated provisioning can apply. Result: [online / waiting reconnect / escalated].
```
