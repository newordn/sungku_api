const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserId, APP_SECRET } = require("../helpers/user");
const {
  DEPOT,
  TRANSFERT,
  PAIEMENT,
  RETRAIT,
} = require("../consts/transactionTypes");
const { CLIENT, MERCHANT } = require("../consts/accountTypes");
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
          type: CLIENT
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
function checkBalanceAgainstAnAmount(account, amount) {
  return account.balance >= amount;
}
async function transfert(parent, args, context, info) {
  const { type, amount, initiator, receiverPhone } = args;
  console.log(
    `${type} ${amount} initiate by user id : ${initiator} to the user phone number : ${receiverPhone}`
  );
  // getting account
  const initiatorAccount = await context.prisma
    .user({ id: initiator })
    .account();
  const receiverAccount = await context.prisma
    .user({ id: receiverPhone })
    .account();
  switch (type) {
    case DEPOT:
      if (initiatorAccount.type === MERCHANT) {
        if (checkBalanceAgainstAnAmount(initiatorAccount, amount)) {
          try {
            // neword : we update the initiator's account
            await context.prisma.updateAccount({
              data: { balance: initiatorAccount.balance - amount },
              where: { id: initiatorAccount.id },
            });
            // neword : we update the receiver's account
            await context.prisma.updateAccount({
              data: { balance: receiverPhone.balance + amount },
              where: { id: receiverAccount.id },
            });
            return await context.prisma.createTransaction({
              amount,
              type,
              initiator: { connect: { id: initiator } },
              receiver: receiverAccount.id,
            });
          } catch (e) {
            throw e;
            console.log("An error happend", e);
          }
        }
      } else {
        throw new Error("You don't have a merchant account");
      }
      break;
  }
}
module.exports = {
  userSetPhone,
  userSetCode,
  userSetPassword,
  userSetName,
  transfert,
};
