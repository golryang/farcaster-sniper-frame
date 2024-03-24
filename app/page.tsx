import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import {main_ready_to_snipe_img, NEXT_PUBLIC_URL} from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'post',
      label: 'Start Sniper',
      target: `${NEXT_PUBLIC_URL}/api/start-sniper`,
    },
  ],
  image: {
    src: `${main_ready_to_snipe_img}`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Sniper Frame',
  description: 'LFG',
  openGraph: {
    title: 'Sniper Frame',
    description: 'LFG',
    images: [ `${main_ready_to_snipe_img}`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-02-01', // Ensure this line is added or updated
  },
};

export default function Page() {
  return (
      <>
        <h1>Please go back and press Start Sniper in frame</h1>
      </>
  );
}
