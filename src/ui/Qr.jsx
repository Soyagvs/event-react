import QRCode from 'qrcode.react';

export const Qr = () => {
    const urlToEncode = "https://eventphoto.vercel.app/view-mobile"
  return (
      <div className="flex justify-center items-center">
          <QRCode
              value={urlToEncode}
              size={256}
              fgColor="black"
              bgColor="yellow"
              level="H"
          />
      </div>
  )
}

