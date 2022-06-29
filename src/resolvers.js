const { tasks } =  require('./database.js');

const resolvers = {

    Task: {
        id: (parent, args, context, info) => parent.id,
        name: (parent) => parent.name,
        status: (parent) => parent.status,
    },

    Query: {
        tasks: (parent) => {
            return tasks
        },
        task: (parent, args) => {
            return tasks.find((task) => task.id === Number(args.id))
        },
    },

    Mutation: {
        addTask: (parent, args) => {
            tasks.push({
                id: tasks.length + 1,
                name: args.name,
                status: args.status,
            })

            return tasks[tasks.length - 1]
        },
    },
}

module.exports = {
    resolvers,
}