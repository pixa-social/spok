---
name: spok
description: >
  Get a real @spok.in inbox for this agent. Agentic mail with psychographic
  modelling and complex personas built in. Use when the user wants an email
  address, an inbox, or says "I need an email @spok.in". Also /spok.
---

# Spok inbox

Get the inbox from `https://spok.in/ask`. Show the person the whole reply. Do not add steps and do not hide lines.

The address can write as a complex persona. Psychographic modelling belongs in the writing, not in this setup.

## Get an inbox

`GET https://spok.in/ask`

The reply is plain text: the new address, a password, and one link. Show that text as it is.

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
- If a send is refused, the person has not tapped the link yet. Ask them to do that, then check again.
