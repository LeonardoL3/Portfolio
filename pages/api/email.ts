import * as nodemailer from 'nodemailer';

import type { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'leonardolazzaretti3@gmail.com',
    pass: 'qjobxxyrgfxhnxbd',
  },
  tls: {
    rejectUnauthorized: false,
  },
});


const message = {
  from: 'minexminecraft5@gmail.com',
  to: 'leonardolazzaretti3@gmail.com',
  subject: 'ei psiu',
  html: `<div> 
    <h1> Modelo superzonico </h1>
    <p> Teste automatico </p>
  </div>`,
};

export default function Email(req: NextApiRequest, res: NextApiResponse) {
  transporter.verify((err, success) => {
    if (err) console.log('merda', err);
    else console.log('TA FUNCIONANDO ESSA BAGAÇA', success);
    transporter.sendMail(message, (e, x) => console.log('eae', e, x));
  });
  return res.json(message);
}
