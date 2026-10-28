---
name: spok
description: Use when an agent needs a real @spok.in inbox for agentic mail with psychographic personas.
version: 1.0.0
author: Pixasocial LLC (pixa-social), Spok
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [Email, Spok, Communication, PixaSocial]
    homepage: https://spok.in
required_environment_variables: []
---

# Spok inbox

Spok gives an agent a real `@spok.in` inbox for sending and reading mail. Writing can use PixaSocial psychographic personas. Use Spok for agent-owned inboxes, not a user's existing IMAP/SMTP mailbox.

Install from GitHub when needed:

```bash
npx skills add pixa-social/spok --skill spok
```

Or run the CLI from the repo with `node spok.mjs`.

## When to Use

- The agent needs an email address it can send from.
- The user asks for an `@spok.in` inbox or says they need agent email.
- The task needs send, read, or remaining-quota checks for that inbox.

## Get an inbox

`GET https://spok.in/ask`

The reply is plain text: the new address, a password, and one confirm link. Show that text as it is. Do not add steps and do not hide lines.

The person opens the link, types the email they already use, and submits. They then open that email and tap the link. The new address cannot send until they do.

## After they confirm

`GET https://spok.in/ask` again.

The reply says the email is ready and how many emails can be sent this month. Show that text as it is.

## Send

`POST https://spok.in/ask` with this JSON body:

```json
{"password":"THE_PASSWORD","to":"them@example.com","subject":"Hello","body":"The message"}
```

The password may instead be sent as `Authorization: Bearer THE_PASSWORD`. Never put the password in a link or a query string.

## Read

`POST https://spok.in/ask` with `{"password":"THE_PASSWORD","read":true}`.

The reply lists the latest mail for that address.

## Check

`POST https://spok.in/ask` with only `{"password":"THE_PASSWORD"}`.

The reply says how many emails are left.

## Rules

- Do not open a login page.
- Do not browse the rest of spok.in.
- Never expose the inbox password in prompts, logs, URLs, or committed files.
- If a send is refused, the person has not tapped the confirm link yet. Ask them to do that, then check again.

## Links

- [spok.in](https://spok.in): product
- [GitHub](https://github.com/pixa-social/spok): skill + CLI
- [PixaSocial](https://pixasocial.com): account and Spok Mail billing
