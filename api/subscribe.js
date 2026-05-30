const https = require('https');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, fname, lname } = req.body || {};
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DC      = process.env.MAILCHIMP_DC || 'us12';

  if (!API_KEY || !LIST_ID) {
    return res.status(500).json({ error: 'Server config missing' });
  }

  const postData = JSON.stringify({
    email_address: email,
    status: 'subscribed',
    merge_fields: { FNAME: fname || '', LNAME: lname || '' }
  });

  const auth = Buffer.from(`anystring:${API_KEY}`).toString('base64');

  return new Promise((resolve) => {
    const options = {
      hostname: `${DC}.api.mailchimp.com`,
      path: `/3.0/lists/${LIST_ID}/members`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const mcReq = https.request(options, (mcRes) => {
      let data = '';
      mcRes.on('data', chunk => { data += chunk; });
      mcRes.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (mcRes.statusCode === 200 || mcRes.statusCode === 201) {
            res.status(200).json({ success: true });
          } else if (parsed.title === 'Member Exists') {
            res.status(200).json({ success: true, alreadySubscribed: true });
          } else {
            res.status(400).json({ error: parsed.detail || parsed.title || 'Subscription failed' });
          }
        } catch {
          res.status(500).json({ error: 'Invalid response from Mailchimp' });
        }
        resolve();
      });
    });

    mcReq.on('error', (e) => {
      res.status(500).json({ error: 'Connection error: ' + e.message });
      resolve();
    });

    mcReq.write(postData);
    mcReq.end();
  });
};
