import discord

TOKEN = 'Nzk5NzQ5OTA3NDY4NjQ4NTA4.YAIHJA.E219_CJ0OYkaXzr7HMckwMEsiU4'

client = discord.Client()

@client.event
async def on_message(message):
    # but doesn't reply to self
    if message.author == client.user:
        return

    if message.content == ('!luci hello'):
        channel = message.channel
        msg = 'Hello {.author.mention}'.format(message)
        await channel.send(msg)

    if message.content == ('!luci get back to work'):
        channel = message.channel
        msg = '@everyone get back to work!'.format(message)
        await channel.send(msg)

    if message.content == ('!luci stats'):
        channel = message.channel
        msg = 'Name: {.guild.name}'.format(message) + '\n' + 'Members: {.guild.member_count}'.format(message) + '\n' + 'Created: {.guild.created_at}'.format(message)
        await channel.send(msg)

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run(TOKEN)
