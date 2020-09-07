async function account(parent,args,context,info)
{
    const account = await context.prisma.user({id:parent.id}).account()
    return account
}
module.exports={
    account
}