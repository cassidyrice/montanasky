# SOP: Ticket Note Templates

## Purpose
Use these templates to keep support notes readable, complete, and consistent.

## Universal Ticket Note Format
```text
Customer reports [issue]. Confirmed correct customer/account/location in Admin. Checked [tool/system]: [finding]. Action taken: [action]. Result: [result]. Next action: [monitor / follow up / escalate / schedule tech / resolved].
```

## Wireless Tarana + Plume
```text
Customer reports [offline / slow speeds / intermittent drops / Wi-Fi issue]. Verified account/service in Admin. Checked Plume: gateway [online/offline], topology [normal/issue], affected devices [all/some/one]. Checked Tarana radio: [online/offline], signal/quality [normal/poor], recent drops [yes/no]. Action taken: [power cycle / reseated Ethernet / checked topology / escalated]. Result: [restored / no change / partial improvement]. Next action: [monitor / escalate / schedule tech / follow up].
```

## Speed Change + Radius Bounce
```text
[Customer name] was updated to the [speed package] package in Admin. Confirmed correct customer/account/location before making changes. Sent Radius status-of-disconnect to bounce the session so the new speed profile can apply. Verified service status after bounce: [online / pending reconnect / needs follow-up].
```

## 60 GHz Onboarding
```text
Onboarded/adopted [Customer name] 60 GHz radio in UISP. Confirmed correct customer/account/location in Admin before making changes. Assigned radio to [Customer name] off [sector/AP]. Verified customer/device assignment and confirmed radio status: [online / pending connection / needs follow-up].
```

## Delete PPPoE + Adopt Radio
```text
Deleted old PPPoE entry for [Customer name] after confirming correct account/location in Admin and verifying the old PPPoE username in Radius. Adopted new [radio type] into UISP and assigned it to [Customer name]. Confirmed customer/device assignment and radio status: [online / pending connection / needs follow-up]. Removed old [equipment type] after confirming it was inactive/old equipment.
```

## Nightly Intermittent Issue
```text
Customer reported recurring nightly internet degradation. Service works normally during the day, then around [time window] the connection remains active but bandwidth becomes unusable. Customer confirmed modem/router lights: [details]. Reboot result: [result]. Completed Layer 1 troubleshooting: [actions]. Current status: [working / degraded / offline]. Next action: [monitor / provider review / escalation / follow-up].
```

## DSL / Provider Escalation
```text
Customer reported [DSL/provider issue]. Confirmed correct customer/account/location in Admin. Completed customer troubleshooting: power cycled modem/router, disconnected power and DSL line, checked cabling/ports, and confirmed modem lights before/after reboot. Light status: [Power / DSL / Internet]. Result: [restored / no change / intermittent]. Next action: [monitor / provider contacted / dispatch info gathered].
```

## Plume Optimization
```text
Customer reported Plume/Wi-Fi issue: [symptom]. Confirmed correct account/location in Admin. Checked Plume gateway/topology/devices: [findings]. Reviewed device RSSI/backhaul and affected-device pattern. Applied Plume optimization settings: [settings changed]. Result: [improved / no change / monitor / escalated].
```

## Escalation Note
```text
Escalated for review due to [reason]. Confirmed account/location in Admin. Systems checked: [tools]. Findings: [findings]. Pattern/repeat evidence: [timestamps/count]. Customer impact: [impact]. Requested next action: [review / field tech / provider review / RF review].
```
