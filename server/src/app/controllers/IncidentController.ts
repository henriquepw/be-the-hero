import { Request, Response } from 'express';

import db from '../../database';

class IncidentController {
  async index(req: Request, res: Response) {
    const { page = 1, limit = 5 } = req.query;

    const [count] = await db('incidents').count();

    const response = await db('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(limit)
      .offset((page - 1) * limit)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    const incidents = response.map(incident => {
      const { name, email, whatsapp, city, uf } = incident;

      const ong = { name, email, whatsapp, city, uf };

      return {
        id: incident.id,
        title: incident.title,
        description: incident.description,
        value: incident.value,
        ong,
      };
    });

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  }

  async store(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await db('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await db('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await db('incidents').where('id', id).delete();

    return res.status(204).send();
  }
}

export default new IncidentController();
