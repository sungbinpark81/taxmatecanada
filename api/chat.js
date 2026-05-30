const https = require('https');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body || {};
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message required' });
  }

  const API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'API key not configured' });

  const postData = JSON.stringify({
    model: 'claude-haiku-4-5',
    max_tokens: 512,
    system: `You are TaxMate Canada's AI tax assistant. You help Canadian freelancers, self-employed individuals, and small business owners with Canadian tax questions.

Key rules:
- Answer ONLY Canadian tax questions (CRA, GST/HST, T1, T2125, RRSP, CPP, NETFILE, etc.)
- Be concise and practical — 2-4 sentences max
- Always mention this is general guidance, not legal/professional advice
- If asked non-tax questions, politely redirect to tax topics
- Use Canadian spelling and context (e.g. "colour", "CRA" not "IRS")`,
    messages: [
      { role: 'user', content: message.trim() }
    ]
  });

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const apiReq = https.request(options, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => { data += chunk; });
      apiRes.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (apiRes.statusCode === 200 && parsed.content?.[0]?.text) {
            res.status(200).json({ reply: parsed.content[0].text });
          } else {
            res.status(500).json({ error: parsed.error?.message || 'Claude API error' });
          }
        } catch {
          res.status(500).json({ error: 'Invalid response from Claude' });
        }
        resolve();
      });
    });

    apiReq.on('error', (e) => {
      res.status(500).json({ error: 'Connection error: ' + e.message });
      resolve();
    });

    apiReq.write(postData);
    apiReq.end();
  });
};
