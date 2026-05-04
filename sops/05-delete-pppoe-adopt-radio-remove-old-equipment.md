# SOP: Delete Old PPPoE + Adopt New Radio + Remove Old Equipment

## When to Use
Use when a tech request asks to delete an old PPPoE entry, adopt a new radio, and remove old equipment from UISP.

Example: “Delete old PPPoE for Matt and Emily Zemacke, adopt their new Wave Nano into UISP, and delete their old Cube.”

## Tools Needed
- Admin
- Radius
- UISP
- CPE Inventory/Admin inventory if physical equipment is returned
- Ticketing system

## Step-by-Step Process
1. Open Admin.
2. Search the customer.
3. Confirm correct customer, account, and service location.
4. Check current service type, billing line, and notes.
5. Identify the old PPPoE username from Admin.
6. Open Radius.
7. Search by PPPoE username.
8. Confirm the PPPoE entry is old/inactive before deleting.
9. Delete the old PPPoE entry only after confirmation.
10. Do not delete any active DHCP, Radius, or service entry unless clearly confirmed old or wrong.
11. Open UISP.
12. Search the customer.
13. Confirm whether the correct customer/site already exists.
14. If needed, create/update the UISP customer using Admin info.
15. Find the new radio waiting for adoption.
16. Adopt/add the radio into UISP.
17. Assign it to the correct customer/site.
18. Confirm device name, customer assignment, and site assignment are correct.
19. Verify the new radio shows connected/online.
20. Locate the old equipment in UISP.
21. Confirm it is old/inactive by device type, MAC/name, last seen, online/offline status, and replacement device status.
22. Remove the old equipment from UISP only after confirmation.
23. If physical equipment was returned, update/recycle it in CPE Inventory/Admin as appropriate.
24. Add ticket note.

## Safety Checks
- Admin first.
- Confirm old vs active before deletion.
- Match by MAC/name/device type/last seen/status.
- Never delete the only active service record.
- Confirm replacement radio is assigned and active before removing old equipment.

## Ticket Note Template
```text
Deleted old PPPoE entry for [Customer name] after confirming correct account/location in Admin and verifying the old PPPoE username in Radius. Adopted new [radio type] into UISP and assigned it to [Customer name]. Confirmed customer/device assignment and radio status: [online / pending connection / needs follow-up]. Removed old [equipment type] from UISP after confirming it was inactive/old equipment.
```
