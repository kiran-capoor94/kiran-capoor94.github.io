#!/usr/bin/env node
// Refreshes the committed data snapshot the site reads at build time:
//   src/data/videos.json  — latest YouTube uploads
//
// Run with:  npm run refresh-data
//
// Design note: we deliberately DON'T fetch at build time. Committing the
// snapshot keeps `astro build` deterministic and offline-safe. Re-run this
// whenever you want the video list to catch up, then commit videos.json.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '..', 'src', 'data');

const YT_CHANNEL_ID = 'UCdd_SpdYQJsAchAFGNCluvg';

async function fetchVideos() {
  const res = await fetch(
    `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL_ID}`
  );
  if (!res.ok) throw new Error(`YouTube feed ${res.status}`);
  const xml = await res.text();

  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
  const videos = entries.map((e) => {
    const id = e.match(/<yt:videoId>([^<]+)/)?.[1] ?? '';
    const title = (e.match(/<title>([^<]+)/)?.[1] ?? '')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    const published = e.match(/<published>([^<]+)/)?.[1] ?? '';
    return {
      id,
      title,
      published,
      url: `https://www.youtube.com/watch?v=${id}`,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    };
  });

  return {
    channelId: YT_CHANNEL_ID,
    channelUrl: `https://www.youtube.com/channel/${YT_CHANNEL_ID}`,
    generatedAt: new Date().toISOString(),
    videos,
  };
}

async function run() {
  try {
    const data = await fetchVideos();
    await writeFile(join(dataDir, 'videos.json'), JSON.stringify(data, null, 2) + '\n');
    console.log(`✓ videos.json — ${data.videos.length} videos`);
  } catch (e) {
    console.warn(`✗ videos.json NOT updated (${e}). Keeping existing snapshot.`);
    process.exitCode = 1;
  }
}

run();
