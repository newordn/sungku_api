const info = () => `Welcome to Sunku GraphQl Api`;
const bcrypt = require("bcryptjs");
async function users(parent, args, context, info) {
  console.log("users query");
  const users = await context.prisma.users({ orderBy: "id_DESC" });
  return users;
}
async function checkBalance(parent, args, context, info) {
  const account = await context.prisma.user({ id: args.user }).account();
  return account.balance;
}
async function transactions(parent, args, context, info) {
  const transactions = await context.prisma
    .user({ id: args.user })
    .account()
    .transactions();
  return transactions;
}
async function checkCode(parent, args, context, info) {
  console.log("check code mutation");
  const user = await context.prisma.user({ id: args.user });
  return bcrypt.compareSync(args.code, user.code);
}
async function checkPassword(parent, args, context, info) {
  console.log("check password mutation");
  const user = await context.prisma.user({ id: args.user });
  return bcrypt.compareSync(args.password, user.password);
}
module.exports = {
  info,
  users,
  checkBalance,
  transactions,
  checkPassword,
  checkCode,
};
