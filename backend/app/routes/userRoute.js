import { Router } from "express";
import { User, validate } from "../database/UserSchema.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().exec();
    console.log(users)
    res.status(200).send({ data: users, message: "Lista użytkowników " });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  // console.log("delete", req.params.id)
  const _id = req.params?.id
  if(_id) {
    try{
      await User.findByIdAndDelete(req.params.id);
      res.sendStatus(204);
    } catch(error) {
      res.status(500).send({ message: error.message })
    }
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
})

router.get('/me', async (req, res) => {
  // console.log(req.user)
  try{
    const _id = req.user?._id;
    if(_id) {
      const user = await User.findById(_id);
      console.log(user)
      res.status(200).send({ data: user, message: "User data" });
    } else {
      res.status(401).send({ message: 'Unauthorized' });
    }
  } catch(error) {
    console.log(error)
    res.status(500).send({ message: error.message });
  }
})

export default router;
