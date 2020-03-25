import { Request, Response } from 'express';
import db from '../../database';

class ProfileController {
  async index(req: Request, res: Response) {
    const ong_id = req.headers.authorization;

    const incidents = await db('incidents').where('ong_id', ong_id).select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
