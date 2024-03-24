import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'post',
      label: 'Start Sniper',
      target: `${NEXT_PUBLIC_URL}/api/start-sniper`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/main_ready_to_snipe.jpg`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}`,
});

export const metadata: Metadata = {
  title: 'Sniper Frame',
  description: 'LFG',
  openGraph: {
    title: 'Sniper Frame',
    description: 'LFG',
    images: [ `${NEXT_PUBLIC_URL}/main_ready_to_snipe.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
      <>
        <h1>Please go back and press Start Sniper</h1>
      </>
  );
}
