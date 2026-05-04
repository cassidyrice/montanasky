# SOP: Speed Profile Change + Radius Bounce

## When to Use
Use when a tech request asks to change a customer package/speed profile and bounce the customer session so the new profile applies.

Example: “Bump Brad and Claudia Stanton to 100/20 and bounce.”

## Tools Needed
- Admin
- Radius
- Plume/Tarana if needed for online verification
- Ticketing system

## Step-by-Step Process
1. Open Admin.
2. Search the customer.
3. Confirm the correct customer, account, and service location.
4. Check current service plan and billing/service line.
5. Change the package/speed profile to the requested speed, such as 100/20.
6. Save/apply the billing or service plan change.
7. Confirm Admin now shows the updated package.
8. Open Radius.
9. Search for the customer by username/account info from Admin.
10. Confirm the correct Radius session/customer.
11. Send a Status of Disconnect / bounce Radius.
12. If using the Radius dropdown flow: first dropdown 4, second dropdown 1.
13. Wait for the session to reconnect.
14. Verify service is back online.
15. Check Plume/Tarana if needed to confirm equipment is online.
16. Add a clean ticket note.

## Safety Checks
- Confirm the correct account in Admin before changing speed.
- Do not change the wrong location/account.
- Do not delete Radius entries for a simple bounce.
- Only send status-of-disconnect after confirming the correct customer/session.

## Completion Criteria
- Admin shows correct speed package.
- Radius bounce/status-of-disconnect completed.
- Customer session reconnects or equipment shows online.
- Ticket note added.

## Ticket Note Template
```text
[Customer name] was updated to the [speed package] package in Admin. Confirmed correct customer/account/location before making changes. Sent Radius status-of-disconnect to bounce the session so the new speed profile can apply. Verified service status after bounce: [online / pending reconnect / needs follow-up].
```
