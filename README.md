# Discord Scripts

An assortment of scripts for Discord, adding various quality of life features.

## Enabling Developer Mode

In order to enable the developer tools - which is required for all of these scripts to be injected - one must first find your Discords `settings.json` file. This file should be located in the following directory based on your platform:

- Windows: `%appdata%\discord\settings.json`
- Linux: `~/.config/discord/settings.json`
- macOS: `~/Library/Application Support/discord/settings.json`

After locating, you'll want to add

```json
"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true
```

as a new key in the `settings.json` file. After this, you'll need to restart Discord for the changes to take effect.

***

If successful, you can now open the developer tools by pressing `Ctrl + Shift + I` on Windows and Linux, or `Cmd + Shift + I` on macOS.

## [Inbox Refresher](./scripts/inbox-refresher.js)

While the Discord inbox is useful for seeing what you missed across servers, direct messages, and other sources, the issue is that it does not refresh - if you have it open and a new message comes in, it will not appear in the inbox until you close and open it.

This script does exactly that - when the inbox is empty, it will close it and reopen it.
