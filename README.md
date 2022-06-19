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

## Fully-Resizable Window

The first is not actually a script, but a settings - applied to `settings.json` - that allows one to resize Discord as they want, which I personally find useful to make it smaller then it allows by default.

```json
  "MIN_WIDTH": 0,
  "MIN_HEIGHT": 0,
```

Of course after restarting Discord, you'll be able to resize it as you want.

## [Inbox Refresher](./scripts/inbox-refresher.js)

While the Discord inbox is useful for seeing what you missed across servers, direct messages, and other sources, the issue is that it does not refresh - if you have it open and a new message comes in, it will not appear in the inbox until you close and open it.

This script does exactly that - when the inbox is empty, it will close it and reopen it.

## [Sidebar Controls](./scripts/sidebar-controls.js)

The Guild Navigation and Sidebar both take up valuable screen real estate, and while they are useful, they are not always needed - perhaps if you have a live inbox, you use that instead of looking at these.

Of course there are times they are useful, in addition perhaps you just want them to be on the right instead of the left.

This script allows both of those customizations - first by adding a close and open button for each, and secondly by making right click of the close button flip the selected panel to the other side.
