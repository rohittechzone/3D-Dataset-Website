var firebase = require("firebase");

firebase.initializeApp({
    serviceAccount: "../config/configdb.js",
    databaseURL: "https://axon-59366-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

var db = firebase.database();

module.exports = {
    name: 'setprefix',
    aliases: ['sp'],
    category: 'Infos',
    description: "Set a custom prefix for a server",
    async execute(client, message, args) {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`You don\'t have permission to use that! Make sure you have the "Manage Server" permission to use this command`)

        if (!args[0]) return message.channel.send("Please provide a new prefix!");

        if (args[1]) return message.channel.send(`The prefix can\'t have two spaces!`)
        if(args[0] == "-"){
            new_prefix = "-"
        }
        var ref = db.ref(message.guild.id.toString());
        ref.set(
            {
                "prefix": args[0],
            })

        message.channel.send(`${client.config.emojis.success} | Successfully set new prefix to **\`${args[0]}\`**`)
    }
}