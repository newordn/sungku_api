async function initiator(parent, args, context, info) {
  const initiator = await context.prisma
    .transaction({ id: parent.id })
    .initiator();
  return initiator;
}
module.exports = {
  initiator,
};
