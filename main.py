level = 0

def on_on_chat():
    global level
    level = 0
    for index in range(5):
        agent.teleport(pos(0, level, 0), WEST)
        for index2 in range(5):
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        for index3 in range(4):
            agent.move(RIGHT, 1)
            agent.turn(LEFT_TURN)
            agent.move(RIGHT, 2)
            for index4 in range(4):
                agent.place(FORWARD)
                agent.move(RIGHT, 1)
        agent.move(RIGHT, 1)
        agent.turn(LEFT_TURN)
        agent.move(RIGHT, 2)
        for index5 in range(3):
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        agent.move(RIGHT, 2)
        agent.turn(LEFT_TURN)
        agent.move(RIGHT, 1)
        level += 1
player.on_chat("ev", on_on_chat)
