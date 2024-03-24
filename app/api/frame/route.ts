import {FrameRequest, getFrameMessage, getFrameHtmlResponse, getFrameMetadata} from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import {main_ready_to_snipe_img, NEXT_PUBLIC_URL} from '../../config';
import {Metadata} from "next";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
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
      postUrl: `${NEXT_PUBLIC_URL}`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
