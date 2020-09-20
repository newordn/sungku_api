const info = () => `Welcome to Sunku GraphQl Api`;
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
module.exports = {
  info,
  users,
  checkBalance,
  transactions,
};
