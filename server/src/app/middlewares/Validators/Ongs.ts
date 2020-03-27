import { celebrate, Segments, Joi } from 'celebrate';

class OngsValidator {
  store() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    });
  }
}

export default new OngsValidator();
