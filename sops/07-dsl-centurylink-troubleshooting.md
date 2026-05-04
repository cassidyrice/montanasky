# SOP: DSL / CenturyLink Troubleshooting

## When to Use
Use when a customer has DSL service or the issue needs provider/reseller troubleshooting.

## Tools Needed
- Admin
- Customer modem/router
- Provider contact process
- Ticketing system

## Customer Troubleshooting First
1. Confirm customer/account/location in Admin.
2. Power cycle the modem/router.
3. Disconnect both the power cable and DSL line.
4. Wait briefly, reconnect DSL line, then reconnect power.
5. Check cabling and correct ports.
6. Reseat cables.
7. Get modem light status before and after reboot:
   - Power light: lit or off
   - DSL light: color, solid/flashing/off
   - Internet light: blinking/solid/off
8. Ask whether all devices are affected.
9. Gather dispatch information if needed:
   - Gate access
   - Dogs/animals
   - Available times
   - Best contact number

## Provider Contact
Use the approved internal provider contact sheet for phone numbers, reseller ID, passphrase, and authentication details. Do not store live credentials in this public repository.

When calling the provider, identify MontanaSky as the reseller, provide your name, call-back number, mutual customer name, customer service address, target DSL number if available, issue description, and troubleshooting already completed.

## Escalation Trigger
Contact the provider if Layer 1 troubleshooting does not restore service or the issue repeats with a clear line/provider pattern.

## Ticket Note Template
```text
Customer reported [DSL issue]. Confirmed correct customer/account/location in Admin. Completed customer troubleshooting: power cycled modem/router, disconnected power and DSL line, checked cabling/ports, and confirmed modem lights before/after reboot. Light status: [Power / DSL / Internet]. Result: [restored / no change / intermittent]. Next action: [monitor / provider contacted / dispatch info gathered].
```
