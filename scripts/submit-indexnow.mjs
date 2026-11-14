import https from 'https';

const HOST = 'eventtribe.in';
const KEY = '8fa3d9b0487d4615a9992fca1249b5c2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  'https://eventtribe.in/',
  'https://eventtribe.in/about',
  'https://eventtribe.in/services',
  'https://eventtribe.in/services/staging',
  'https://eventtribe.in/services/audio',
  'https://eventtribe.in/services/video',
  'https://eventtribe.in/services/lighting',
  'https://eventtribe.in/services/event-production',
  'https://eventtribe.in/services/hybrid-events',
  'https://eventtribe.in/events',
  'https://eventtribe.in/events/conferences',
  'https://eventtribe.in/events/product-launches',
  'https://eventtribe.in/events/trade-exhibitions',
  'https://eventtribe.in/events/entertainment',
  'https://eventtribe.in/enterprise-event-production-hyderabad',
  'https://eventtribe.in/agency-partner-production-network',
  'https://eventtribe.in/corporate-stage-design-masterclass',
  'https://eventtribe.in/large-scale-av-technical-rider-guide',
  'https://eventtribe.in/hyderabad-venue-av-production-guide',
  'https://eventtribe.in/corporate-conference-fail-safe-protocol',
  'https://eventtribe.in/clients',
  'https://eventtribe.in/gallery',
  'https://eventtribe.in/contact',
  'https://eventtribe.in/privacy',
  'https://eventtribe.in/terms',
];

function postIndexNow(endpoint, payload) {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint);
    const data = JSON.stringify(payload);

    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
        'User-Agent': 'EventTribe-IndexNow-Submitter/1.0',
      },
    };

    const req = https.request(options, (res) => {
      let resBody = '';
      res.on('data', (chunk) => (resBody += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: resBody,
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log(`Submitting ${URLS.length} URLs for ${HOST} to IndexNow...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    console.log(`Submitting to ${endpoint}...`);
    try {
      const res = await postIndexNow(endpoint, payload);
      console.log(`Response from ${endpoint}: HTTP ${res.statusCode} (${res.statusMessage || 'OK'})`);
      if (res.body) {
        console.log(`Body: ${res.body}`);
      }
    } catch (err) {
      console.warn(`Submission to ${endpoint} failed: ${err.message}`);
    }
  }

  console.log('IndexNow submission finished.');
}

main().catch(console.error);

