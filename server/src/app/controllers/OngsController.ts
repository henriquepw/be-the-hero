import { Request, Response } from 'express';
import crypto from 'crypto';

import db from '../../database';

class OngController {
  async store(req: Request, res: Response) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }
}

export default new OngController();
