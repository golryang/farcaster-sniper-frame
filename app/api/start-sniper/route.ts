import {FrameRequest, getFrameHtmlResponse, getFrameMessage} from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import {api_endpoint, main_ready_to_snipe_img} from "../../constant";

async function getResponse(req: NextRequest): Promise<NextResponse> {

    // const body: FrameRequest = await req.json();
    // const { isValid } = await getFrameMessage(body);
    // if (!isValid) {
    //     return new NextResponse('Message not valid', {status: 500});
    // }

    let tokenAddress = ""
    try {
        const response = await fetch(`${api_endpoint}/api/coin/latest`);
        if (!response.ok) {
            // Handle response errors, such as 404 or 500 statuses
            throw new Error('Server responded with a non-200 status');
        }
        const data = await response.json();
        let img_url = data.img_url
        // let report_count = data.report_count
        tokenAddress = data.token_address

        // Continue processing the data...
        return new NextResponse(
            getFrameHtmlResponse({
                buttons: [
                    {
                        label: "Dexscreener",
                        action: "link",
                        target: `https://dexscreener.com/base/${tokenAddress}`,
                    },
                    {
                        label: "Buy on Uniswap",
                        action: "link",
                        target: `https://app.uniswap.org/#/swap?outputCurrency=${tokenAddress}`,
                    },
                    {
                        label: "Rug Report",
                        action: "post",
                        target: `${NEXT_PUBLIC_URL}/api/reportRug`,
                    },
                    {
                        label: "Back to main",
                        action: "post",
                        target: `${NEXT_PUBLIC_URL}`,
                    },
                ],
                image: {
                    src: img_url,
                    aspectRatio: '1.91:1',
                },
                postUrl: `${NEXT_PUBLIC_URL}`,
            }),
        );

    } catch (error) {
        console.error('Failed to fetch data:', error);
        return new NextResponse(
            getFrameHtmlResponse({
                buttons: [
                    {
                        label: "Snipe Again",
                        action: "post",
                        target: `${NEXT_PUBLIC_URL}/api/start-sniper`,
                    },
                ],
                image: {
                    src: main_ready_to_snipe_img,
                    aspectRatio: '1.91:1',
                },
                postUrl: `${NEXT_PUBLIC_URL}`,
            }),
        );
    }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
