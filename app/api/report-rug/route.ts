import {NextRequest, NextResponse} from "next/server";
import { getFrameHtmlResponse} from "@coinbase/onchainkit/frame";
import {api_endpoint, rug_report_img} from "../../constant";
import {NEXT_PUBLIC_URL} from "../../config";
import {apiResolver} from "next/dist/server/api-utils/node/api-resolver";

async function getResponse(req: NextRequest): Promise<NextResponse> {
    // const body: FrameRequest = await req.json();
    // const { isValid } = await getFrameMessage(body);
    // if (!isValid) {
    //     return new NextResponse('Message not valid', {status: 500});
    // }

    try {
        const getLatestCoinRes = await fetch(`${api_endpoint}/api/coin/latest`);
        if (!getLatestCoinRes.ok) {
            // Handle response errors, such as 404 or 500 statuses
            throw new Error('Server responded with a non-200 status');
        }
        const latestCoinRes = await getLatestCoinRes.json();
        let tokenAddress = latestCoinRes.token_address

        const reportRugRes = await fetch(`${api_endpoint}/api/coin/${tokenAddress}/report-rug`);
        if (!reportRugRes.ok) {
            // Handle response errors, such as 404 or 500 statuses
            throw new Error('Server responded with a non-200 status');
        }
        const data = await reportRugRes.json();

        return new NextResponse(
            getFrameHtmlResponse({
                buttons: [
                    {
                        label: "Go Back",
                        action: "post",
                        target: `${NEXT_PUBLIC_URL}/api/start-sniper`,
                    },
                ],
                image: {
                    src: rug_report_img,
                    aspectRatio: '1.91:1',
                },
                postUrl: `${NEXT_PUBLIC_URL}/api/frame`,

            }),
        );
    } catch (error) {
        return new NextResponse(
            getFrameHtmlResponse({
                buttons: [
                    {
                        label: "Go Back",
                        action: "post",
                        target: `${NEXT_PUBLIC_URL}/api/start-sniper`,
                    },
                ],
                image: {
                    src: rug_report_img,
                    aspectRatio: '1.91:1',
                },

            }),
        );
    }



}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
