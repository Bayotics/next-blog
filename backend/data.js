import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Okunola",
    lastName: "Moshood",
    userName: "mosboy",
    email: "abiolamoshood@gmail.com",
    password: bcrypt.hashSync("12345678"),
    isAdmin: true,
    createdAt: 1219214568,
    image: "https://i2-prod.mirror.co.uk/incoming/article31931852.ece/ALTERNATES/s615/0_GettyImages-1805180502.jpg",
  },
  {
    _id: userIds[1],
    firstName: "Agbaje",
    lastName: "Sodiq",
    userName: "aboy0802",
    email: "thatabooy@gmail.com",
    password: bcrypt.hashSync("12345678"),
    image: "https://www.highsnobiety.com/static-assets/dato/1696613219-drake-for-all-the-dogs-lyrics.jpg",
    isAdmin: true,
    createdAt: 1219214568,

  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    appUserId: userIds[1],
    userName: "mosboy",
    title: "Why SEO is good",
    description: "SEO is really good for your website",
    details:"This may be the night that my dreams might let me know all the stars are closer. This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.This may be the night that my dreams might let me know all the stars are closer.",
    image: "https://searchengineland.com/wp-content/seloads/2014/08/seo-idea-lightbulbs-ss-1920.jpg",
    userImage: "https://i2-prod.mirror.co.uk/incoming/article31931852.ece/ALTERNATES/s615/0_GettyImages-1805180502.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
    ]),
    comments: [
      "Go and read things fall apart by O.T. Sumi",
      "Omo wetyn we go do like this",
      "I no even come know again",
    ],
  },
];