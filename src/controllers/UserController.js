import User from '../models/User.js';

export default {
  async create(request, response) {
    const { useremail, name, whatsappnumber, password } = request.body;

    try {
      const userExists = await User.findOne({
        where: {
          useremail,
        },
      });

      if (userExists) {
        return response.status(400).json({ error: 'User already exists.' });
      }

      const user = await User.create({
        useremail,
        name,
        whatsappnumber,
        password,
        latitude: 0,
        longitude: 0,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
