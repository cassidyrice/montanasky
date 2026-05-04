# SOP: 60 GHz Radio Onboarding

## When to Use
Use when a tech request asks to onboard/adopt a 60 GHz radio for a customer.

Example: “Onboard Kendra Hentges 60GHz on Creston East.”

## Tools Needed
- Admin
- UISP
- CPE Inventory if old equipment is involved
- Ticketing system

## Step-by-Step Process
1. Open Admin.
2. Search the customer.
3. Confirm correct customer, account, and service location.
4. Check service status, service address, and notes.
5. Confirm the request is for a 60 GHz radio and identify the correct AP/sector.
6. Open UISP.
7. Search the customer.
8. Check whether a correct customer/site already exists.
9. If no correct customer/site exists, create one using Admin info.
10. Add/copy customer name, service address, account/customer ID, and GPS/location info if required.
11. Find the pending 60 GHz radio waiting for adoption.
12. Adopt/add the radio.
13. Assign the radio to the correct customer.
14. Assign it to the correct AP/sector.
15. Confirm device name/customer assignment is correct.
16. Confirm the radio shows connected/online.
17. If old equipment is listed, do not remove it unless confirmed inactive by MAC, device type, ping/online status, and last connected time.
18. Add a clean ticket note.

## Safety Checks
- Always verify the customer in Admin first.
- Avoid duplicate UISP customers/sites.
- Match pending device carefully before adoption.
- Do not remove old equipment unless confirmed inactive.

## Ticket Note Template
```text
Onboarded/adopted [Customer name] 60 GHz radio in UISP. Confirmed correct customer/account/location in Admin before making changes. Assigned radio to [Customer name] off [sector/AP]. Verified customer/device assignment and confirmed radio status: [online / pending connection / needs follow-up].
```
