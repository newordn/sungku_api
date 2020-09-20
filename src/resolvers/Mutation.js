const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserId, APP_SECRET } = require("../helpers/user");

async function userSetPhone(parent, args, context, info) {
  let user = await context.prisma.user({ phone: args.phone });
  // Neword: si l'utilisateur existe deja on le retourne simplement avec le token
  if (user) {
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      user,
      token,
    };
  }
  // Neword: sinon on le creer
  else {
    user = await context.prisma.createUser({
      phone: args.phone,
      account: {
        create: {
          balance: 0.0,
        },
      },
    });
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      user,
      token,
    };
  }
}

async function userSetCode(parent, args, context, info) {
  console.log("user set code mutation");
  let code = await bcrypt.hash(args.code, 10);
  const user = await context.prisma.updateUser({
    data: { code },
    where: { id: args.user },
  });
  return user;
}

async function userSetPassword(parent, args, context, info) {
  console.log("user setPassword mutation");
  let password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.updateUser({
    data: { password },
    where: { id: args.user },
  });
  return user;
}
async function userSetName(parent, args, context, info) {
  console.log("user set name mutation");
  const { name } = args;
  const user = await context.prisma.updateUser({
    data: { name },
    where: { id: args.user },
  });
  return user;
}
async function transfert(parent, args, context, info) {
  console.log("user set name mutation");
  const { name } = args;
  const user = await context.prisma.updateUser({
    data: { name },
    where: { id: args.user },
  });
  return user;
}
module.exports = {
  userSetPhone,
  userSetCode,
  userSetPassword,
  userSetName,
  transfert,
};
