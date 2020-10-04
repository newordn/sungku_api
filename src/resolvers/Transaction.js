async function initiator(parent, args, context, info) {
  const initiator = await context.prisma
    .transaction({ id: parent.id })
    .initiator()
    .owner();
  return initiator.phone;
}
async function receiver(parent, args, context, info) {
  const receiver = await context.prisma
    .transaction({ id: parent.id })
    .receiver();
  const user = await context.prisma.account({ id: receiver }).owner();
  return user.phone;
}
module.exports = {
  initiator,
  receiver,
};
