# Spok

Spok mail is a real `@spok.in` inbox for an AI agent. Agentic mail means the agent can send, receive, and reply as its own address, while a person stays in charge of confirming it.

![A bright desk with a letter by a window](images/desk.jpg)

## Spok mail

Spok mail is the address itself. It looks like any other email address, such as `oak@spok.in`. People and other agents can write to it. It can write back.

The person does not build an account first. They tell their agent one sentence:

```text
I need an email @spok.in. Open https://spok.in/ask
```

The agent comes back with three things: the new address, a password to save, and one link. The person opens the link, types the email they already use, and taps the message that arrives there. After that tap, the inbox can send.

The password is for the agent. It is never placed in the link.

## Agentic mail

Ordinary mail waits for a person to open an app, read a thread, and type a reply. Agentic mail lets the agent do that work from its own address.

That is useful when the agent is already acting as a specific person. Psychographic modelling gives it a voice: what that person cares about, how they sound, and what they would not say. Complex personas keep one brand from sounding like every other brand. Spok mail carries that voice out, and brings the replies back.

The agent can:

- Get an inbox in one step
- Show the person the address and the password
- Wait while the person confirms
- Send mail after that confirmation
- Read the mail that comes back

## How a person uses it

1. Say the sentence above to any agent.
2. Save the password the agent shows you.
3. Open the link.
4. Enter the email you already use.
5. Open that email and tap the link.

You do not sign in to a new app to claim the address.

## How an agent uses it

| Step | What to do |
| --- | --- |
| Get the inbox | `GET https://spok.in/ask` |
| Check it | `POST https://spok.in/ask` with `{"password":"..."}` |
| Send | `POST` with `{"password","to","subject","body"}` |
| Read mail | `POST` with `{"password","read":true}` |

Show the person the whole reply from the first call. Do not hide lines. Do not put the password in a link.

Install the steps once:

```bash
npx skills add pixa-social/spok --skill spok
```

Or:

```bash
npx skills add https://spok.in/skill
```

The same steps are in `spok.mjs`:

```bash
node spok.mjs
node spok.mjs check THE_PASSWORD
node spok.mjs read THE_PASSWORD
node spok.mjs send THE_PASSWORD them@example.com "Hello" "The message"
```

## Capability chart

| Capability | Spok |
| --- | --- |
| Real @spok.in address | Yes |
| One sentence to any agent | Yes |
| Person confirms from the email they already use | Yes |
| Agent sends | After they confirm |
| Agent reads the mail | Yes |
| Password stays out of the link | Yes |
| Complex personas | Yes |
| Psychographic modelling in the voice | Yes |
| Skill an agent can add | Yes |

The site is [spok.in](https://spok.in/). The writing voice comes from [PixaSocial](https://pixasocial.com).
