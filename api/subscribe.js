module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, fname, lname, role } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DC      = process.env.MAILCHIMP_DC || 'us12';
  const auth    = Buffer.from(`anystring:${API_KEY}`).toString('base64');

  try {
    const mcRes = await fetch(
      `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Basic ${auth}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: { FNAME: fname || '', LNAME: lname || '' },
        }),
      }
    );

    const data = await mcRes.json();

    if (mcRes.ok || data.title === 'Member Exists') {
      return res.status(200).json({ success: true, alreadySubscribed: data.title === 'Member Exists' });
    }
    return res.status(400).json({ error: data.detail || 'Subscription failed' });

  } catch (err) {
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
