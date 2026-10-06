let level = 0
player.onChat("ev", function () {
    level = 0
    for (let index = 0; index < 5; index++) {
        agent.teleport(pos(0, level, 0), WEST)
        for (let index = 0; index < 5; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
        for (let index = 0; index < 4; index++) {
            agent.move(RIGHT, 1)
            agent.turn(LEFT_TURN)
            agent.move(RIGHT, 2)
            for (let index = 0; index < 4; index++) {
                agent.place(FORWARD)
                agent.move(RIGHT, 1)
            }
        }
        agent.move(RIGHT, 1)
        agent.turn(LEFT_TURN)
        agent.move(RIGHT, 2)
        for (let index = 0; index < 3; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
        agent.move(RIGHT, 2)
        agent.turn(LEFT_TURN)
        agent.move(RIGHT, 1)
        level += 1
    }
})
