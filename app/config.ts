// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://untitled-farcaster-frame.vercel.app';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
export const api_endpoint = process.env.API_ENDPOINT;
export const main_ready_to_snipe_img = `https://pub-a0bc9a5a595c491d8c260768c4e3cb9c.r2.dev/feels_good_sniper.png`
export const rug_report_img = 'https://pub-a0bc9a5a595c491d8c260768c4e3cb9c.r2.dev/feels_good_rug_accepted.png'