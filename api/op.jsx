import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

// Font preload (Playfair Display)
const fontUrl =
  'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYhPgaZL1xt6E.woff2';

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Saints & Sinners Bake Shop';

  const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: '#F9F6F0', // saint
          color: '#8B1E3F', // sinful-red
          fontFamily: '"Playfair Display", serif',
          padding: '60px',
          textAlign: 'center',
        }}>
        <div
          style={{
            fontSize: 64,
            marginBottom: 24,
            color: '#1E1B1A', // sinner
            letterSpacing: '-1px',
          }}>
          Saints & Sinners
        </div>
        <div
          style={{
            fontSize: 48,
            maxWidth: 1000,
            color: '#C08457', // indulgence
            lineHeight: 1.2,
          }}>
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Playfair Display',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
