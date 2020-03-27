import { celebrate, Segments, Joi } from 'celebrate';

class ProfileValidator {
  index() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  }
}

export default new ProfileValidator();
