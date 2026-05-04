# Security and Permissions

## Version 1 safety posture

The AI should not perform destructive or provisioning actions.

Allowed:

- Recommend SOP workflow
- Generate ticket notes
- Flag escalation triggers
- Provide tool order
- Provide safety checks

Not allowed in early versions:

- Delete Radius entries
- Delete PPPoE entries
- Remove UISP equipment
- Bounce Radius sessions automatically
- Change customer service plans
- Modify CPE inventory

## Future action controls

If write actions are added later, require:

- User authentication
- Role permissions
- Confirmation screen
- Before/after snapshot
- Audit log
- Supervisor-only controls for destructive actions
