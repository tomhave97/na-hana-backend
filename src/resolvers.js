const { prisma } =  require('./database.js');

const resolvers = {

    Task: {
        id: (parent, args, context, info) => parent.id,
        name: (parent) => parent.name,
        status: (parent) => parent.status,
    },

    Query: {
        tasks: (parent) => {
            return prisma.task.findMany()
        },
        task: (parent, args) => {
            return prisma.task.findFirst({
                where: { id: Number(args.id) }
            })
        },
    },

    Mutation: {
        addTask: (parent, args) => {
            return prisma.task.create({
                data: {
                    name: args.name,
                    status: args.status,
                }
            })
        },
    },
}

module.exports = {
    resolvers,
}