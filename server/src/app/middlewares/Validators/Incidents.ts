import { celebrate, Segments, Joi } from 'celebrate';

class IncidentsValidator {
  index() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    });
  }

  store() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
      }),
    });
  }

  delete() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    });
  }
}

export default new IncidentsValidator();
