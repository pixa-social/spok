const ASK = 'https://spok.in/ask';

async function call(body) {
  const res = await fetch(ASK, {
    method: body ? 'POST' : 'GET',
    headers: body ? { 'content-type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  process.stdout.write(text.endsWith('\n') ? text : `${text}\n`);
}

const [cmd, password, to, subject, ...rest] = process.argv.slice(2);
if (!cmd) {
  await call();
} else if (cmd === 'check' && password) {
  await call({ password });
} else if (cmd === 'read' && password) {
  await call({ password, read: true });
} else if (cmd === 'send' && password && to && subject && rest.length) {
  await call({ password, to, subject, body: rest.join(' ') });
} else {
  process.stderr.write('Use: node spok.mjs | check PASSWORD | read PASSWORD | send PASSWORD TO SUBJECT MESSAGE\n');
  process.exit(1);
}
