import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import {main_ready_to_snipe_img} from "./constant";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'post',
      label: 'Start Sniper (10m)',
      target: `${NEXT_PUBLIC_URL}/api/start-sniper`,
    },
  ],
  image: {
    src: `${main_ready_to_snipe_img}`,
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
    images: [ `${main_ready_to_snipe_img}`],
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
